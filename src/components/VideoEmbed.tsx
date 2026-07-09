"use client";

import { useState } from "react";

export default function VideoEmbed({
  libraryId,
  videoId,
  muted = false,
  loop = false,
  overlay = true,
  preload,
  className = "",
}: {
  libraryId: string | number;
  videoId: string;
  muted?: boolean;
  loop?: boolean;
  /** Set false to hide the custom play button (e.g. inactive slider slides). */
  overlay?: boolean;
  /** Force preloading before the visitor clicks play (e.g. the hero video). Defaults to only preloading once playing. */
  preload?: boolean;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const shouldPreload = preload ?? playing;

  return (
    <>
      <iframe
        key={playing ? "playing" : "idle"}
        src={`https://player.mediadelivery.net/embed/${libraryId}/${videoId}?autoplay=${playing}&loop=${loop}&muted=${muted}&preload=${shouldPreload}&responsive=true`}
        loading="lazy"
        className={`absolute inset-0 h-full w-full border-0 ${className}`}
        allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen;"
        allowFullScreen
      />
      {overlay && !playing && (
        <button
          type="button"
          aria-label="Prehrať video"
          onClick={() => setPlaying(true)}
          className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors hover:bg-black/25"
        >
          <svg
            viewBox="0 0 100 100"
            className="h-[52px] w-[52px] drop-shadow-[0_6px_16px_rgba(0,0,0,0.45)] transition-transform hover:scale-110 md:h-[72px] md:w-[72px]"
          >
            <defs>
              <linearGradient id="video-play-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e2e2e2" />
                <stop offset="100%" stopColor="#8a8a8a" />
              </linearGradient>
            </defs>
            <path
              d="M22 12 L86 50 L22 88 Z"
              fill="url(#video-play-gradient)"
              stroke="url(#video-play-gradient)"
              strokeWidth="14"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </>
  );
}
