"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Reveal from "./Reveal";
import { FaInstagram, FaFacebookF } from "react-icons/fa"; // Predpokladám react-icons, uprav podľa potreby
import { openCookieSettings } from "@/lib/consent";

const links = [
  { label: "Prípadové štúdie", href: "/pripadove-studie" },
 
];

export default function Footer() {
  return (
    <footer className="overflow-hidden mt-[80px] w-full px-[24px] pb-[48px] md:mt-[100px] md:px-[106px] md:pb-[64px]">
      {/* Hlavná biela karta (kapsula) */}
      <Reveal
        delay={0}
        duration={700}
        y={20}
        className="mx-auto w-full max-w-[1234px] rounded-[32px] bg-gradient-to-b from-[#EBF3FA] to-[#F7FAFC] px-[32px] py-[48px] text-[#0A1128] md:rounded-[48px] md:px-[64px] md:py-[64px]"
      >

        {/* Horná sekcia s informáciami */}
        <div className="flex flex-col gap-[40px] md:flex-row md:justify-between md:items-start">
          
          {/* Logo sekcia */}
        
            <Link href="/" className="relative h-[48px] w-[213px] md:h-[72.48px] md:w-[320px]">
        <Image
          src="/images/logos/logo-carne.svg"
          alt="Fabelli"
          fill
          unoptimized
          className="object-contain object-left"
          priority
        />
      </Link>
         

         

          {/* Kontakty sekcia */}
          <div className="flex flex-col gap-[10px]">
            <h3 className="font-sans text-[16px] font-bold text-[#0A1128]">
              Kontakty
            </h3>
            <div className="font-sans text-[14px] leading-[1.6] text-[#2D3748]">
              <p><span className="font-medium text-[#4A5568]">tel. č.:</span> +421 919 170 732</p>
                         <p><span className="font-medium text-[#4A5568]">e-mail:</span> fabiansmriga@gmail.com</p>
            </div>
          </div>

          {/* Odkazy sekcia */}
          <div className="flex flex-col gap-[10px]">
            <h3 className="font-sans text-[16px] font-bold text-[#0A1128]">
              Dôležité odkazy
            </h3>
            <ul className="flex flex-col gap-[6px]">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-[14px] text-[#2D3748] transition-colors hover:text-[#0A1128] hover:font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button href="#vysledky" size="lg" className="max-w-full">
                          Pozrite si výsledky mojich klientov
                        </Button>
          </div>
        </div>

        {/* Stredná sekcia: Sociálne siete */}
        <div className="mt-[48px] flex justify-center gap-[20px] text-[#718096]">
          <a href="#" className="transition-colors hover:text-[#0A1128]">
            <FaInstagram className="size-[22px]" />
          </a>
          <a href="#" className="transition-colors hover:text-[#0A1128]">
            <FaFacebookF className="size-[20px]" />
          </a>
         
        </div>

        {/* Spodná sekcia: Copyright */}
        <div className="mt-[32px] flex flex-col items-center gap-[12px] border-t border-[#0a1128]/10 pt-[24px]">
          <p className="text-center font-sans text-[14px] text-[#4A5568]">
            © 2026 <span className="font-bold text-[#0A1128]">Fabelli s.r.o.</span> Všetky práva vyhradené.
          </p>
          <button
            type="button"
            onClick={openCookieSettings}
            className="font-sans text-[13px] text-[#4A5568] underline transition-colors hover:text-[#0A1128]"
          >
            Nastavenia cookies
          </button>
        </div>

      </Reveal>
    </footer>
  );
}