"use client";

import Link from "next/link";
import { type MouseEvent, type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  size?: "sm" | "lg";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit";
}

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-[15px] py-[15px] text-[18px]",
  lg: "px-[40px] py-[14px] text-[18px]",
};

const MAGNET_STRENGTH = 0.3;
const MAGNET_RADIUS = 70;

export default function Button({
  children,
  href = "#",
  onClick,
  size = "lg",
  className = "",
  disabled = false,
  type = "button",
}: ButtonProps) {
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
      el.style.transform = `translate(${offsetX * MAGNET_STRENGTH}px, ${offsetY * MAGNET_STRENGTH}px) scale(1.06)`;
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
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 animate-button-shine bg-gradient-to-r from-transparent via-white/50 to-transparent"
      />
    </>
  );

  const linkClassName = `relative inline-flex max-w-full min-w-0 items-center justify-center overflow-hidden text-center rounded-[76px] bg-gradient-to-r from-purple-from to-purple-to bg-[length:200%_100%] bg-[position:0%_0] font-heading font-normal text-white shadow-[0px_4px_24.4px_3px_rgba(220,204,238,0.45)] transition-[transform,box-shadow,background-position,filter] duration-300 ease-out hover:bg-[position:100%_0] hover:shadow-[0px_8px_36px_8px_rgba(220,204,238,0.7)] hover:brightness-110 disabled:pointer-events-none disabled:opacity-40 disabled:shadow-none disabled:hover:bg-[position:0%_0] disabled:hover:brightness-100 ${sizeClasses[size]}`;

  return (
    <span className={`group relative inline-flex min-w-0 max-w-full ${className}`}>
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-3 -z-10 rounded-[76px] bg-gradient-to-r from-purple-from to-purple-to opacity-0 blur-xl transition-opacity duration-300 ease-out group-hover:opacity-70"
      />
      {onClick || type === "submit" ? (
        <button
          type={type}
          onClick={onClick}
          disabled={disabled}
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
