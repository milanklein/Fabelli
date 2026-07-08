"use client";

import Link from "next/link";
import { type MouseEvent, type ReactNode } from "react";

interface ButtonArrowProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const MAGNET_STRENGTH = 0.25;
const MAGNET_RADIUS = 80;

export default function ButtonArrow({
  children,
  href = "#",
  onClick,
  className = "",
}: ButtonArrowProps) {
  const handleMouseMove = (
    e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  ) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    const distance = Math.sqrt(offsetX ** 2 + offsetY ** 2);
    const maxDistance = rect.width / 2 + MAGNET_RADIUS;

    if (distance < maxDistance) {
      el.style.transform = `translate(${offsetX * MAGNET_STRENGTH}px, ${offsetY * MAGNET_STRENGTH}px)`;
    }
  };

  const handleMouseLeave = (
    e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  ) => {
    e.currentTarget.style.transform = "";
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <span className="hidden md:block relative h-[48px] w-[104px] shrink-0 overflow-hidden rounded-full border border-white/70 transition-colors duration-300 ease-out group-hover:bg-white sm:h-[52px] sm:w-[110px]">
        <span className=" absolute left-[3px] top-1/2 flex size-[40px] -translate-y-1/2 items-center justify-center rounded-full bg-white transition-[left] duration-300 ease-out group-hover:left-[calc(100%-43px)] sm:size-[44px] sm:group-hover:left-[calc(100%-47px)]">
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            fill="none"
            className="absolute size-[18px] text-purple-to opacity-100 transition-opacity duration-200 group-hover:opacity-0"
          >
            <path
              d="M9 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            fill="none"
            className="absolute size-[18px] text-purple-to opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          >
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>
    </>
  );

  const linkClassName =
    "relative flex max-w-full min-w-0 items-center gap-[24px] overflow-hidden rounded-[76px] bg-gradient-to-r from-purple-from to-purple-to py-[10px] pl-[32px] pr-[32px] md:pr-[10px] font-heading text-[16px] font-normal text-white shadow-[0px_4px_24.4px_3px_rgba(220,204,238,0.45)] transition-transform duration-200 ease-out sm:text-[18px]";

  return (
    <span className={`group relative inline-flex min-w-0 max-w-full ${className}`}>
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-3 -z-10 rounded-[76px] bg-gradient-to-r from-purple-from to-purple-to opacity-0 blur-xl transition-opacity duration-300 ease-out group-hover:opacity-70"
      />
      {onClick ? (
        <button
          type="button"
          onClick={onClick}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={linkClassName}
        >
          {content}
        </button>
      ) : (
        <Link
          href={href}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={linkClassName}
        >
          {content}
        </Link>
      )}
    </span>
  );
}
