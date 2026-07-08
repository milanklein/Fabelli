import Image from "next/image";
import Reveal from "./Reveal";

const logos = [
  { src: "/images/logos/bod.png", alt: "BOD", w: 162, h: 53 },
  { src: "/images/logos/fc7daa.png", alt: "Klient", w: 122, h: 53 },
  { src: "/images/logos/logo1.png", alt: "Klient", w: 145, h: 53 },
  { src: "/images/logos/offlandia.png", alt: "Offlandia", w: 152, h: 53 },
  { src: "/images/logos/force8.png", alt: "Force8", w: 53, h: 53 },
  { src: "/images/logos/lamarine.png", alt: "La Marine", w: 141, h: 53 },
  { src: "/images/logos/autopola.png", alt: "Auto Pola", w: 178, h: 53 },
  { src: "/images/logos/rgbweb.png", alt: "RGBweb", w: 149, h: 75 },
  { src: "/images/logos/apponio.svg", alt: "Apponio", w: 53, h: 53 },
  { src: "/images/logos/jovitep.svg", alt: "Jovitep", w: 143, h: 53 },
  { src: "/images/logos/matess.svg", alt: "Matess", w: 205, h: 53 },
  { src: "/images/logos/pokojne-plavanie.svg", alt: "Pokojné plávanie", w: 123, h: 53 },
  { src: "/images/logos/retro.svg", alt: "Retro", w: 53, h: 53 },
  { src: "/images/logos/sparklond.svg", alt: "Sparklond", w: 123, h: 53 },
  { src: "/images/logos/vycvikove-centrum.svg", alt: "Výcvikové centrum", w: 106, h: 53 },
];

export default function LogoStrip() {
  const track = [...logos, ...logos];

  return (
    <section className="w-full overflow-hidden bg-background py-[38px]">
      <Reveal duration={500} y={12}>
        <div className="flex w-max animate-marquee items-center gap-[48px]">
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
