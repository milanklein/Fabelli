"use client";

import { isValidElement, useEffect, useRef, useState, type ReactNode } from "react";

const CHAR_DELAY_MS = 30;
const FALL_CHAR_DELAY_MS = 45;

type RevealVariant = "fade" | "fall";

function renderChars(text: string, visible: boolean, variant: RevealVariant) {
  return text.split("").map((char, i) => {
    if (char === " ") return " ";

    if (variant === "fall") {
      return (
        <span
          key={i}
          className={visible ? "animate-letter-fall" : "opacity-0"}
          style={{ animationDelay: `${i * FALL_CHAR_DELAY_MS}ms` }}
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
  className = "",
  immediate = false,
  variant = "fade",
}: {
  children: ReactNode;
  className?: string;
  /** Skip the scroll trigger and animate right after mount — use for above-the-fold content. */
  immediate?: boolean;
  /** "fall" drops each letter in from above with a light bounce, instead of a fade-up. */
  variant?: RevealVariant;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (immediate) {
      let innerId = 0;
      // Double rAF: let the browser paint the hidden state first, otherwise
      // the transition has no "before" frame to animate from.
      const outerId = requestAnimationFrame(() => {
        innerId = requestAnimationFrame(() => setVisible(true));
      });
      return () => {
        cancelAnimationFrame(outerId);
        cancelAnimationFrame(innerId);
      };
    }

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

  const topLevel = Array.isArray(children) ? children : [children];

  const output = topLevel.map((child, i) => {
    if (typeof child === "string") {
      return <span key={i}>{renderChars(child, visible, variant)}</span>;
    }

    if (isValidElement<{ children?: ReactNode; className?: string }>(child)) {
      const text = child.props.children;
      if (typeof text === "string") {
        return (
          <span key={i} className={child.props.className}>
            {renderChars(text, visible, variant)}
          </span>
        );
      }
      return <span key={i}>{child}</span>;
    }

    return <span key={i}>{child}</span>;
  });

  return (
    <span ref={ref} className={className}>
      {output}
    </span>
  );
}
