"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ButtonArrow from "./ButtonArrow";
import RevealText from "./RevealText";

const COLLAPSED_HEIGHT = 1270;

const CN = "/images/campaing_numbers";

function parseRatio(ratio: string): { width: number; height: number } {
  const match = ratio.match(/\[(\d+)\/(\d+)\]/);
  return match
    ? { width: Number(match[1]), height: Number(match[2]) }
    : { width: 1600, height: 900 };
}

const cards = [
   {
    image: `${CN}/campaign-15.jpg`,
    ratio: "aspect-[1233/422]",
    caption:
      "Stabilný prílev rezervácií psieho hotela pre centrum Dobrovodský",
  },
  { image: "/images/review1.png", ratio: "aspect-[297/340]" },
   {
    image: `${CN}/campaign-19.jpg`,
    ratio: "aspect-[1222/437]",
    caption: "Výkonnosť Google reklám pre klienta Dobrovodský",
  },

  { image: "/images/review5.png", ratio: "aspect-[297/480]" },
    {
    image: `${CN}/campaign-14.jpg`,
    ratio: "aspect-[297/180]",
    caption: "Stovky website leadov už od 5,48 € za lead",
  },
  
  { image: "/images/review6.png", ratio: "aspect-[297/160]" },

  { video: "8e4c85c8-7338-4f6c-a684-286408fb5b4c", ratio: "aspect-[297/460]" },
   {
    image: `${CN}/campaign-11.jpg`,
    ratio: "aspect-[808/457]",
    caption: "Množstvo reklám, ktoré prinášajú stabilné leady",
  },
  { image: "/images/review7.png", ratio: "aspect-[297/210]" },
  {
    image: `${CN}/campaign-9.jpg`,
    ratio: "aspect-[622/463]",
    caption: "Free trial starts pre Apponio",
  },
  {
    video: "c2ec20de-a271-4515-ae8e-2b833b53a3e1",
    viewMore: true,
    ratio: "aspect-[297/400]",
  },
  

  { image: "/images/review3.png", ratio: "aspect-[297/460]" },
  {
    image: `${CN}/campaign-20.jpg`,
    ratio: "aspect-[808/351]",
    caption: "Výkonnosť reklám Sparklond",
  },
  { image: "/images/review9.png", ratio: "aspect-[297/250]" },
  {
    image: `${CN}/campaign-7.jpg`,
    ratio: "aspect-[1005/295]",
    caption: "CTR 4,52%, keď agentúry výskajú pri 1%",
  },
  
  { image: "/images/review10.png", ratio: "aspect-[297/320]" },

  {
    image: `${CN}/campaign-1.jpg`,
    ratio: "aspect-[1024/269]",
    caption:
      "11 000 leadov, 0,2 € za lead, 5% CTR – nikto iný na Slovensku nemá takéto výsledky",
  },
  {
    image: `${CN}/campaign-2.jpg`,
    ratio: "aspect-[1231/442]",
    caption: "18% pomer prekliku na Google kampaniach pre Sparklond",
  },
  {
    image: `${CN}/campaign-3.jpg`,
    ratio: "aspect-[634/124]",
    caption: "50 leadov z 1 reklamy pre Force8",
  },
  {
    image: `${CN}/campaign-4.jpg`,
    ratio: "aspect-[801/116]",
    caption: "647 leadov pre Jovinečkov Jovitep",
  },
  {
    image: `${CN}/campaign-5.jpg`,
    ratio: "aspect-[1434/315]",
    caption: "650 high ticket leadov pre Matessa s pomerom prekliku 2,99%",
  },
  {
    image: `${CN}/campaign-6.jpg`,
    ratio: "aspect-[504/214]",
    caption: "9,8% konverzný pomer stránky na zisk leadov pre Sparklond",
  },
  
  {
    image: `${CN}/campaign-8.jpg`,
    ratio: "aspect-[972/405]",
    caption: "Desaťtisíce kliknutí s vysokým CTR pre Offlandiu",
  },
  
  {
    image: `${CN}/campaign-10.jpg`,
    ratio: "aspect-[1238/413]",
    caption: "Lacné rezervácie pre autorizovaný servis Auto Pola",
  },
  
 
  {
    image: `${CN}/campaign-12.jpg`,
    ratio: "aspect-[1243/415]",
    caption: "Prílev kvalifikovaných high-intent leadov pre Sparklond",
  },
  {
    image: `${CN}/campaign-13.jpg`,
    ratio: "aspect-[792/147]",
    caption: "11 018 leadov za 0,26 € pre VIP coaching projekt",
  },

 
  {
    image: `${CN}/campaign-16.jpg`,
    ratio: "aspect-[794/292]",
    caption: "Stovky kvalifikovaných leadov z kampaní pre Sparklond",
  },
  {
    image: `${CN}/campaign-17.jpg`,
    ratio: "aspect-[998/401]",
    caption:
      "Séria reklám s pomerom prekliku vyše 4%! Vaša agentúra sa teší z 1%",
  },
  {
    image: `${CN}/campaign-18.jpg`,
    ratio: "aspect-[993/409]",
    caption: "Vysoko nadštandardné pomery prekliknutia pre Offlandiu",
  },
 
  
  {
    image: `${CN}/campaign-21.jpg`,
    ratio: "aspect-[816/400]",
    caption: "Výkonnosť reklám a zisk leadov pre Jovinečkov Jovitep",
  },
  {
    image: `${CN}/campaign-22.jpg`,
    ratio: "aspect-[809/394]",
    caption: "Výkonnosť reklám pre Jovitep",
  },
  {
    image: `${CN}/campaign-23.jpg`,
    ratio: "aspect-[509/164]",
    caption: "Vysoká výkonnosť a pomer prekliku reklám pre Matessa",
  },
];

export default function PortfolioGrid() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [expandedHeight, setExpandedHeight] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const [lightbox, setLightbox] = useState<{
    src: string;
    caption?: string;
    width: number;
    height: number;
  } | null>(null);

  const handleExpand = () => {
    if (contentRef.current) {
      setExpandedHeight(contentRef.current.scrollHeight);
    }
    setExpanded(true);
  };

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!lightbox) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [lightbox]);

  return (
    <section className="mt-[80px] w-full px-[24px] md:mt-[158px] md:px-[106px]">
      <div className="mx-auto flex w-full max-w-[952px] flex-col items-center gap-[48px] md:gap-[64px]">
        <h2 className="text-center font-heading text-[24px] font-black uppercase leading-[1.3] text-white md:text-[32px]">
          <RevealText>Spolupráca, <br/> Kde víťazia obe strany!</RevealText>
        </h2>

        <div
          className="relative w-full overflow-hidden transition-[max-height] duration-700 ease-in-out"
          style={{
            maxHeight: expanded
              ? (expandedHeight ?? undefined)
              : COLLAPSED_HEIGHT,
          }}
        >
          <div
            ref={contentRef}
            className="w-full columns-2 gap-[16px] md:columns-3 md:gap-[30px]"
          >
            {cards.map((card, i) => {
              const delay = Math.min(i * 40, 400);
              return (
                <div
                  key={i}
                  style={{ transitionDelay: `${delay}ms` }}
                  onClick={
                    card.image
                      ? () =>
                          setLightbox({
                            src: card.image!,
                            caption: card.caption,
                            ...parseRatio(card.ratio),
                          })
                      : undefined
                  }
                  className={`group relative mb-[16px] w-full break-inside-avoid overflow-hidden rounded-[16px] bg-gradient-to-br from-navy-panel/50 to-navy-panel/20 transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:!transform-none md:mb-[30px] md:rounded-[24px] ${card.ratio} ${
                    card.image ? "cursor-pointer" : ""
                  } ${visible ? "opacity-100" : "opacity-0 translate-y-[16px]"}`}
                >
                  {card.image && (
                    <Image
                      src={card.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, 320px"
                    />
                  )}
                  {card.image && (
                    <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-[#0C1728] to-[#0C1728]/0 p-[16px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {card.caption && (
                        <p className="font-sans text-[13px] font-semibold leading-[1.3] text-white md:text-[15px]">
                          {card.caption}
                        </p>
                      )}
                    </div>
                  )}
                  {card.video && (
                    <iframe
                      src={`https://player.mediadelivery.net/embed/695134/${card.video}?autoplay=false&loop=false&muted=false&preload=true&responsive=true`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full border-0"
                      allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen;"
                      allowFullScreen
                    />
                  )}
                </div>
              );
            })}
          </div>

          {!expanded && (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[220px] bg-gradient-to-t from-background to-transparent"
            />
          )}
        </div>

        {!expanded && (
          <ButtonArrow onClick={handleExpand}>Pozrieť viac</ButtonArrow>
        )}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-[24px]"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Zavrieť"
            onClick={() => setLightbox(null)}
            className="absolute right-[24px] top-[24px] flex size-[44px] items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
          <div
            className="relative flex max-h-full max-w-full flex-col items-center gap-[16px]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt=""
              width={lightbox.width}
              height={lightbox.height}
              className="h-auto w-auto max-h-[85vh] max-w-[90vw] rounded-[16px] object-contain"
              sizes="90vw"
            />
            {lightbox.caption && (
              <p className="max-w-[90vw] text-center font-sans text-[15px] font-semibold text-white md:text-[18px]">
                {lightbox.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
