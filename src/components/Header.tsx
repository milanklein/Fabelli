"use client"
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";


export default function Header() {
  
  return (
    <header className="flex w-full items-center justify-between">
      <Link href="/" className="relative h-[88px] w-[213px] xl:h-[150.48px]  md:h-[72.48px] xl:w-[450px] md:w-[320px]">
        <Image
          src="/images/logo-animation.webp"
          alt="Fabelli"
          fill
          unoptimized
          priority
          className="object-contain object-left"
          
        />
      </Link>
      <div className="flex items-center gap-[30px]">
        <Link
          href="#vysledky"
          className="hidden whitespace-nowrap font-sans text-[20px] text-white md:inline"
        >
          Výsledky klientov
        </Link>
        <Button href="/kvalifikacny-formular" size="sm">
          Chcem stratégiu
        </Button>
      </div>
    </header>
  );
}
