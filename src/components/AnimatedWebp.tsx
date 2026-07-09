"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Renders a single-play animated WebP (fill + unoptimized) with a cache-busting
 * query param. Safari's CachedImage resource cache otherwise keeps serving the
 * already-finished animation on reload instead of restarting it — a fresh URL
 * per mount forces a real re-fetch and re-decode.
 */
export default function AnimatedWebp({
  src,
  alt,
  className,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const [cacheBust, setCacheBust] = useState("");

  useEffect(() => {
    setCacheBust(`?v=${Date.now()}`);
  }, []);

  return (
    <Image
      src={`${src}${cacheBust}`}
      alt={alt}
      fill
      unoptimized
      priority={priority}
      className={className}
    />
  );
}
