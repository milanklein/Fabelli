"use client";

import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import RevealText from "./RevealText";

const phases = [
  {
    label: "Fáza 0",
    title: "Analýza trhu",
    subtitle: "Profilovanie cieľovky, konkurencie a príprava akvizičného systému nových zákazníkov",
  },
  {
    label: "Fáza 1",
    title: "Implementácia stratégie",
    subtitle: "Tvorba konkrétnych funnelov cez platené reklamy, sociálne siete, web stránky a iné kanály",
  },
  {
    label: "Fáza 2",
    title: "Analýza dát",
    subtitle: "Zhodnotenie a optimalizácia kampaní podľa reakcie trhu",
  },
  {
    label: "Fáza 3",
    title: "Škálovanie",
    subtitle: "Expanzia vašej firmy (zvyšovanie cien, rozširovanie služieb,  naberanie zamestnancov, systematizácia)",
  },
];

// Fázy + posledný riadok s tlačidlom (posledný index = phases.length)
const ROW_COUNT = phases.length + 1;

function TimelineDot({ variant = "blue" }: { variant?: "blue" | "purple" }) {
  return (
    <span
      className={`size-[18px] block w-[18px] h-[18px] shrink-0 rounded-full bg-white md:size-[20px] ${
        variant === "purple"
          ? "shadow-[0_0_16px_6px_rgba(168,140,210,0.8)] md:shadow-[0_0_25px_10px_rgba(168,140,210,0.6)]"
          : "shadow-[0_0_16px_6px_rgba(255,255,255,0.65)] md:shadow-[0_0_25px_10px_rgba(255,255,255,0.45)]"
      }`}
    />
  );
}

export default function ProcessTimeline() {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleRows, setVisibleRows] = useState<boolean[]>(() =>
    Array(ROW_COUNT).fill(false),
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number(entry.target.getAttribute("data-row-index"));
          setVisibleRows((prev) => {
            if (prev[index]) return prev;
            const next = [...prev];
            next[index] = true;
            return next;
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.4 },
    );

    rowRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const reveal = (rowIndex: number, extraDelay = 0) => ({
    style: { transitionDelay: `${extraDelay}ms` },
    className: `transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:!transform-none ${
      visibleRows[rowIndex] ? "opacity-100" : "opacity-0 translate-y-[16px]"
    }`,
  });

  return (
    <section className="mt-[80px] w-full px-[24px] md:mt-[158px] md:px-[106px] overflow-hiddenm pb-10">
      <div className="mx-auto w-full max-w-[840px]">
        <h2 className="mb-[48px] text-center font-heading text-[26px] font-black uppercase leading-[1.3] text-white md:mb-[64px] md:text-[32px]">
          <RevealText>Proces spolupráce</RevealText>
        </h2>

        <div className="relative">
          {/* Vertikálna čiara — jeden spojitý prvok, aby nikdy nevznikla medzera pri riadkoch s dlhším textom */}
          <div className="absolute left-[111px] top-[10px] bottom-[10px] w-px bg-white/20 md:left-[170px]" />

          <div className="flex flex-col gap-y-[36px] md:gap-y-[56px] md:pl-40">
            {/* Vykreslenie jednotlivých fáz — každá sa animuje samostatne, keď doscrolluje do viewportu */}
            {phases.map((phase, i) => (
              <div
                key={phase.label}
                ref={(el) => {
                  rowRefs.current[i] = el;
                }}
                data-row-index={i}
              >
                {/* Mobil: štítok fázy vľavo, bod na čiare v strede, obsah vpravo — všetko zarovnané na vrch riadku */}
                <div className="flex items-center gap-x-[12px] md:hidden">
                  <div
                    className={` w-[90px] shrink-0 text-center ${reveal(i, 60).className}`}
                    style={reveal(i, 60).style}
                  >
                    <span className="whitespace-nowrap font-heading text-[18px] font-black uppercase leading-tight tracking-wide text-white/40">
                      {phase.label}
                    </span>
                  </div>
                  <div
                    className={`relative z-10 mt-[4px] w-[18px] shrink-0 ${reveal(i).className}`}
                    style={reveal(i).style}
                  >
                    <TimelineDot variant="blue" />
                  </div>
                  <div
                    className={`flex flex-1 flex-col gap-[4px] rounded-l-[24px] border-l border-white py-[6px] pl-[24px] ${reveal(i, 120).className}`}
                    style={reveal(i, 120).style}
                  >
                    <h3 className="font-sans text-[16px] font-bold text-white">
                      {phase.title}
                    </h3>
                    <p className="font-sans text-[14px] leading-[1.4] text-white/70">
                      {phase.subtitle}
                    </p>
                  </div>
                </div>

                {/* Desktop: pôvodný 3-stĺpcový layout (bod / Fáza / obsah), zarovnaný na vrch riadku */}
                <div className="hidden md:grid md:grid-cols-[auto_auto_1fr] md:items-center md:gap-x-[28px]">
                  <div
                    className={`z-10 flex justify-center pt-[24px] ${reveal(i).className}`}
                    style={reveal(i).style}
                  >
                    <TimelineDot variant="blue" />
                  </div>
                  <div
                    className={`w-[170px] shrink-0 whitespace-nowrap pt-[24px] font-heading text-[36px] font-black uppercase leading-none tracking-wide text-white/40 ${reveal(i, 60).className}`}
                    style={reveal(i, 60).style}
                  >
                    {phase.label}
                  </div>
                  <div
                    className={`flex flex-col gap-[4px] rounded-l-[36px] border-l border-white p-6 ${reveal(i, 120).className}`}
                    style={reveal(i, 120).style}
                  >
                    <h3 className="font-sans text-[18px] font-bold text-white">
                      {phase.title}
                    </h3>
                    <p className="font-sans text-[16px] leading-[1.4] text-white/70">
                      {phase.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Posledný bod (fialový) — na mobile bez tlačidla, to je nižšie pod celou osou */}
            <div
              ref={(el) => {
                rowRefs.current[phases.length] = el;
              }}
              data-row-index={phases.length}
            >
              <div className="flex items-start gap-x-[12px] md:hidden">
                <div className="w-[90px] shrink-0" />
                <div
                  className={`relative z-10 mt-[4px] w-[18px] shrink-0 ${reveal(phases.length).className}`}
                  style={reveal(phases.length).style}
                >
                  <TimelineDot variant="purple" />
                </div>
              </div>

              <div className="hidden md:grid md:grid-cols-[auto_auto_1fr] md:items-center md:gap-x-[28px]">
                <div
                  className={`z-10 flex justify-center ${reveal(phases.length).className}`}
                  style={reveal(phases.length).style}
                >
                  <TimelineDot variant="purple" />
                </div>
                <div
                  className={`col-span-2 flex justify-start pl-[4px] ${reveal(phases.length, 60).className}`}
                  style={reveal(phases.length, 60).style}
                >
                  <div className="shadow-[0_0_30px_5px_rgba(140,110,170,0.3)] rounded-full">
                    <Button href="/kvalifikacny-formular" size="lg">
                      Vyplniť kvalifikačný formulár
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobil: tlačidlo pod celou časovou osou (mimo kontajnera s čiarou) */}
        <div
          className={`mt-[36px] flex justify-center md:hidden ${reveal(phases.length, 60).className}`}
          style={reveal(phases.length, 60).style}
        >
          <div className="shadow-[0_0_30px_5px_rgba(140,110,170,0.3)] rounded-full">
            <Button href="/kvalifikacny-formular" size="lg">
              Vyplniť kvalifikačný formulár
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
