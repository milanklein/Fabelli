import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  size?: "sm" | "lg";
  className?: string;
}

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-[15px] py-[15px] text-[18px]",
  lg: "px-[40px] py-[14px] text-[18px]",
};

export default function Button({
  children,
  href = "#",
  size = "lg",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-[76px] bg-gradient-to-r from-purple-from to-purple-to font-heading font-normal text-white shadow-[0px_4px_24.4px_3px_rgba(220,204,238,0.45)] transition-opacity hover:opacity-90 ${sizeClasses[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
