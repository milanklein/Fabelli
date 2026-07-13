"use client";

import Image from "next/image";
import Reveal from "./Reveal";

const logos = [
  { src: "/images/new-logo/bod.png", alt: "BODY STATION", w: 162, h: 54 },
  { src: "/images/new-logo/jovitep.png", alt: "Jovitep", w: 146, h: 54 },
  { src: "/images/new-logo/offlandia.png", alt: "Offlandia", w: 153, h: 54 },
  { src: "/images/new-logo/force8.png", alt: "Force8", w: 54, h: 54 },
  { src: "/images/new-logo/lamarine.png", alt: "La Marine", w: 142, h: 54 },
  { src: "/images/new-logo/autopola.png", alt: "Auto Pola", w: 179, h: 54 },
  { src: "/images/new-logo/dobrovodsky.png", alt: "Výcvikové centrum Dobrovodský", w: 150, h: 75 },
  { src: "/images/new-logo/pokojne-plavanie.png", alt: "Pokojné plávanie", w: 125, h: 54 },
  { src: "/images/new-logo/tarani.png", alt: "Tarani", w: 175, h: 54 },
  { src: "/images/new-logo/client-badge.png", alt: "Klient", w: 54, h: 54 },
  { src: "/images/new-logo/sparklond.png", alt: "Sparklond", w: 124, h: 54 },
  { src: "/images/new-logo/pivne-kupele-babkovci.png", alt: "Pivné kúpele Babkovci", w: 66, h: 54 },
  { src: "/images/new-logo/awesome-lifestyle-academy.png", alt: "The Awesome Lifestyle Academy", w: 242, h: 64 },
  { src: "/images/new-logo/varadys-apartments.png", alt: "Varady's Apartments", w: 54, h: 54 },
  { src: "/images/new-logo/retro.png", alt: "Retro burger Prešov", w: 54, h: 54 },
  { src: "/images/new-logo/unimar.png", alt: "Unimar", w: 187, h: 61 },
];

export default function LogoStrip() {
  const track = [...logos, ...logos];

  return (
    <section className="w-full overflow-hidden bg-background py-[24px] md:py-[38px]">
      <Reveal duration={500} y={12}>
        <div className="flex w-max bg-white py-4 animate-marquee items-center gap-[28px] md:py-6 md:gap-[48px]">
          {track.map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className="relative h-[38px] w-[calc(var(--logo-w)*0.7)] shrink-0 md:h-[53px] md:w-[var(--logo-w)]"
              style={{ "--logo-w": `${logo.w}px` } as React.CSSProperties}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                loading="eager"
                className="object-contain opacity-0 transition-opacity duration-500"
                sizes="200px"
                onLoad={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
              />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
