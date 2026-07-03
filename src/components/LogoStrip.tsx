import Image from "next/image";

const logos = [
  { src: "/images/logos/bod.png", alt: "BOD", w: 162, h: 53 },
  { src: "/images/logos/fc7daa.png", alt: "Klient", w: 122, h: 53 },
  { src: "/images/logos/logo1.png", alt: "Klient", w: 145, h: 53 },
  { src: "/images/logos/offlandia.png", alt: "Offlandia", w: 152, h: 53 },
  { src: "/images/logos/force8.png", alt: "Force8", w: 53, h: 53 },
  { src: "/images/logos/lamarine.png", alt: "La Marine", w: 141, h: 53 },
  { src: "/images/logos/autopola.png", alt: "Auto Pola", w: 178, h: 53 },
  { src: "/images/logos/rgbweb.png", alt: "RGBweb", w: 149, h: 75 },
];

export default function LogoStrip() {
  const track = [...logos, ...logos];

  return (
    <section className="w-full overflow-hidden bg-background py-[38px]">
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
              className="object-contain"
              sizes="200px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
