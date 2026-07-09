import Image from "next/image";
import Reveal from "./Reveal";

const logos = [
  { src: "/images/logos/bod.png", alt: "BODY STATION", w: 162, h: 53 },
  { src: "/images/logos/fc7daa.png", alt: "Rehab & Relax", w: 122, h: 53 },
  { src: "/images/logos/jovitep.svg", alt: "Jovitep", w: 143, h: 53 },
  { src: "/images/logos/offlandia.png", alt: "Offlandia", w: 152, h: 53 },
  { src: "/images/logos/force8.png", alt: "Force8", w: 53, h: 53 },
  { src: "/images/logos/lamarine.png", alt: "La Marine", w: 141, h: 53 },
  { src: "/images/logos/autopola.png", alt: "Auto Pola", w: 178, h: 53 },
  { src: "/images/logos/dobrovodsky.png", alt: "Výcvikové centrum Dobrovodský", w: 149, h: 75 },
  { src: "/images/logos/pokojne-plavanie.svg", alt: "Pokojné plávanie", w: 123, h: 53 },
  { src: "/images/logos/tarani.png", alt: "Tarani", w: 174, h: 53 },
  { src: "/images/logos/client-badge.png", alt: "Klient", w: 53, h: 53 },
  { src: "/images/logos/sparklond.svg", alt: "Sparklond", w: 123, h: 53 },
  { src: "/images/logos/pivne-kupele-babkovci.png", alt: "Pivné kúpele Babkovci", w: 65, h: 53 },
  { src: "/images/logos/awesome-lifestyle-academy.png", alt: "The Awesome Lifestyle Academy", w: 242, h: 64 },
  { src: "/images/logos/varadys-apartments.png", alt: "Varady's Apartments", w: 53, h: 53 },
  { src: "/images/logos/retro.svg", alt: "Retro burger Prešov", w: 53, h: 53 },
  { src: "/images/logos/pettax.png", alt: "Pettax Accounting", w: 239, h: 65 },
  { src: "/images/logos/profi-rehab.png", alt: "Profi Rehab", w: 203, h: 61 },
  { src: "/images/logos/kontenzy.png", alt: "Kontenzy", w: 84, h: 61 },
  { src: "/images/logos/chalan-z-burzy.png", alt: "Chalan z Burzy", w: 245, h: 49 },
  { src: "/images/logos/unimar.png", alt: "Unimar", w: 187, h: 61 },
];

export default function LogoStrip() {
  const track = [...logos, ...logos];

  return (
    <section className="w-full overflow-hidden bg-background py-[38px]">
      <Reveal duration={500} y={12}>
        <div className="flex w-max bg-white py-6 animate-marquee items-center gap-[48px]">
          {track.map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className="relative h-[53px] shrink-0"
              style={{ width: logo.w }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain grayscale opacity-60"
                sizes="200px"
              />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
