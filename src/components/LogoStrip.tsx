import Image from "next/image";
import Reveal from "./Reveal";

const logos = [
  { src: "/images/new-logo/bod.png", alt: "BODY STATION", w: 162, h: 54 },
  { src: "/images/new-logo/rehab-relax.png", alt: "Rehab & Relax", w: 169, h: 74 },
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
  { src: "/images/new-logo/pettax.png", alt: "Pettax Accounting", w: 239, h: 65 },
  { src: "/images/new-logo/profi-rehab.png", alt: "Profi Rehab", w: 203, h: 61 },
  { src: "/images/new-logo/kontenzy.png", alt: "Kontenzy", w: 84, h: 61 },
  { src: "/images/new-logo/chalan-z-burzy.png", alt: "Chalan z Burzy", w: 245, h: 49 },
  { src: "/images/new-logo/unimar.png", alt: "Unimar", w: 187, h: 61 },
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
                className="object-contain  "
                sizes="200px"
              />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
