"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function Reveal({
  children = null,
  className = "",
  delay = 0,
  duration = 600,
  y = 24,
  immediate = false,
}: {
  children?: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  /** Skip the scroll trigger and animate right after mount — use for above-the-fold content. */
  immediate?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Immediate mode animates in via pure CSS (.animate-reveal-fade-up), so it
    // plays on first paint without waiting for hydration — nothing to do here.
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
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate]);

  if (immediate) {
    return (
      <div
        style={
          {
            "--reveal-y": `${y}px`,
            "--reveal-duration": `${duration}ms`,
            "--reveal-delay": `${delay}ms`,
          } as React.CSSProperties
        }
        className={`animate-reveal-fade-up will-change-transform ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        transform: visible ? "none" : `translateY(${y}px)`,
      }}
      className={`opacity-0 transition-[opacity,transform] ease-out will-change-transform motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:!transform-none ${
        visible ? "opacity-100" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
