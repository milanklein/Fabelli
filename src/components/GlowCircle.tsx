import React from "react";

interface GlowCircleProps {
  className?: string;
}

export default function GlowCircle({ className = "" }: GlowCircleProps) {
  return (
    <div
      className={`absolute pointer-events-none rounded-full shrink-0 select-none mix-blend-screen ${className}`}
      style={{
        width: "915px",
        height: "915px",
        background: "#6B92AF",
        opacity: 0.16, // Opacity 16% z Figmy
        filter: "blur(254px)", // Layer blur z Figmy
      }}
    />
  );
}