"use client";

import { useEffect, useState } from "react";

const WORDS = ["trhu", "konkurencie", "cieľovky", "vašej firmy"];
const INTERVAL_MS = 1400;

export default function RotatingWord({ className = "" }: { className?: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <span key={index} className={`animate-step-fade inline-block ${className}`}>
      {WORDS[index]}
    </span>
  );
}
