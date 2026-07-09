"use client";

import { useEffect, useState } from "react";

const WORDS = ["trhu", "konkurencie", "cieľovky", "vašej firmy"];
const TYPE_SPEED_MS = 70;
const HOLD_MS = 2000;

export default function RotatingWord({ className = "" }: { className?: string }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    const currentWord = WORDS[wordIndex];

    if (charCount < currentWord.length) {
      const id = setTimeout(() => setCharCount((c) => c + 1), TYPE_SPEED_MS);
      return () => clearTimeout(id);
    }

    const id = setTimeout(() => {
      setCharCount(0);
      setWordIndex((i) => (i + 1) % WORDS.length);
    }, HOLD_MS);
    return () => clearTimeout(id);
  }, [charCount, wordIndex]);

  return (
    <span className={`inline-block ${className}`}>
      {WORDS[wordIndex].slice(0, charCount)}
      <span className="animate-pulse">|</span>
    </span>
  );
}
