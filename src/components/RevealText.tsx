"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const CHAR_DELAY_MS = 30;
const FALL_CHAR_DELAY_MS = 45;

type RevealVariant = "fade" | "fall";

function renderChars(
  text: string,
  visible: boolean,
  variant: RevealVariant,
  immediate: boolean,
) {
  return text.split("").map((char, i) => {
    if (char === " ") return " ";

    if (variant === "fall") {
      return (
        <span
          key={i}
          className={immediate || visible ? "animate-letter-fall" : "opacity-0"}
          style={{ animationDelay: `${i * FALL_CHAR_DELAY_MS}ms` }}
        >
          {char}
        </span>
      );
    }

    // Immediate mode animates in via pure CSS (.animate-reveal-char-fade), so
    // it plays on first paint without waiting for hydration.
    if (immediate) {
      return (
        <span
          key={i}
          className="animate-reveal-char-fade"
          style={{ animationDelay: `${i * CHAR_DELAY_MS}ms` }}
        >
          {char}
        </span>
      );
    }

    return (
      <span
        key={i}
        className={`transition-[opacity,transform] duration-[600ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[0.4em]"
        }`}
        style={{ transitionDelay: `${i * CHAR_DELAY_MS}ms` }}
      >
        {char}
      </span>
    );
  });
}

export default function RevealText({
  children,
  lines,
  className = "",
  lineClassName = "",
  immediate = false,
  variant = "fade",
}: {
  children?: ReactNode;
  /**
   * Render each string as its own block-level animated line, e.g. for a
   * multi-line heading. Prefer this over wrapping plain-string `children` in
   * `<span>` elements yourself: when this component's parent is a Server
   * Component, JSX elements it creates aren't reliably introspectable once
   * passed across the server/client boundary as `children` here (they don't
   * pass `isValidElement`), which previously caused a hydration mismatch —
   * plain strings in `lines` don't have that problem.
   */
  lines?: string[];
  className?: string;
  /** className applied to each line's wrapping span when using `lines`. */
  lineClassName?: string;
  /** Skip the scroll trigger and animate right after mount — use for above-the-fold content. */
  immediate?: boolean;
  /** "fall" drops each letter in from above with a light bounce, instead of a fade-up. */
  variant?: RevealVariant;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Immediate mode animates in via pure CSS, so it plays on first paint
    // without waiting for hydration — nothing to do here.
    if (immediate) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate]);

  const output = lines
    ? lines.map((line, i) => (
        <span key={i} className={lineClassName}>
          {renderChars(line, visible, variant, immediate)}
        </span>
      ))
    : (Array.isArray(children) ? children : [children]).map((child, i) => {
        if (typeof child === "string") {
          return <span key={i}>{renderChars(child, visible, variant, immediate)}</span>;
        }
        return <span key={i}>{child}</span>;
      });

  return (
    <span ref={ref} className={className}>
      {output}
    </span>
  );
}
