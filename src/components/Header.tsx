"use client"
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import AnimatedWebp from "./AnimatedWebp";
import Button from "./Button";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        toggleRef.current &&
        !toggleRef.current.contains(target) &&
        panelRef.current &&
        !panelRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="relative flex w-full items-center justify-between">
      <Link href="/" className="relative h-[88px] w-[213px] xl:h-[150.48px]  md:h-[72.48px] xl:w-[450px] md:w-[320px]">
        {/* <AnimatedWebp
          src="/images/logo-animation.webp"
          alt="Fabelli"
          priority
          className="object-contain object-left"
        /> */}
      </Link>

      <div className="hidden items-center gap-[30px] md:flex">
        <Link
          href="/pripadove-studie"
          className="whitespace-nowrap font-sans text-[20px] text-white"
        >
          Výsledky klientov
        </Link>
        <Button href="/kvalifikacny-formular" size="sm">
          Chcem stratégiu
        </Button>
      </div>

      <div ref={toggleRef} className="md:hidden">
        <button
          type="button"
          aria-label={menuOpen ? "Zavrieť menu" : "Otvoriť menu"}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex size-[44px] items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          {menuOpen ? <HiXMark size={24} /> : <HiBars3 size={24} />}
        </button>
      </div>

      <div
        ref={panelRef}
        className={`absolute inset-x-0 top-full z-50 mt-[12px] flex flex-col items-center gap-[16px] rounded-[24px] bg-navy-panel/95 p-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur transition-[opacity,transform] duration-300 ease-out md:hidden ${
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-[8px] opacity-0"
        }`}
      >
        <Link
          href="/pripadove-studie"
          onClick={() => setMenuOpen(false)}
          className="whitespace-nowrap font-sans text-[16px] text-white"
        >
          Prípadové štúdie
        </Link>
        <Button href="/kvalifikacny-formular" size="sm">
          Chcem stratégiu
        </Button>
      </div>
    </header>
  );
}
