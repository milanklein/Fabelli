"use client";

import { useEffect, useRef, useState } from "react";
import { BoxIcon, CallIcon, PeopleIcon, TaskIcon, WalletIcon } from "./icons";
import RevealText from "./RevealText";
import Reveal from "./Reveal";

const rows = [
  {
    icon: BoxIcon,
    label: "Model",
    agencies: "masové naberanie klientov",
    hybrid: "komplexné strategické partnerstvá",
    specialists: "špecializácia na úzky segment",
  },
  {
    icon: TaskIcon,
    label: "Rozsah služieb",
    agencies: "všetko čo zarába",
    hybrid: "služby slúžia stratégií",
    specialists: "1 špecializovaná služba",
  },
  {
    icon: CallIcon,
    label: "Komunikácia",
    agencies: "často nedostupní",
    hybrid: "aj po 17:00 + víkendy",
    specialists: "často nedostupní",
  },
  {
    icon: PeopleIcon,
    label: "Počet klientov",
    agencies: "stovky",
    hybrid: "maximálne 5",
    specialists: "desiatky",
  },
  {
    icon: WalletIcon,
    label: "Cenová štruktúra",
    agencies: "všetko vopred",
    hybrid: "zahŕňa výkonnostnú zložku",
    specialists: "platíte za službu",
  },
];

// Poradie zhora nadol na mobile (transponovaná tabuľka): Špecialisti, Môj
// hybridný model, Agentúry — presne podľa dodaného mobilného návrhu.
const plans = [
  { key: "specialists" as const, label: "Špecialisti", highlight: false },
  { key: "hybrid" as const, label: "Môj hybridný model", highlight: true },
  { key: "agencies" as const, label: "Agentúry", highlight: false },
];

export default function ComparisonTable() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
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

  const reveal = (delay: number) => ({
    style: { transitionDelay: `${delay}ms` },
    className: `transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:!transform-none ${
      visible ? "opacity-100" : "opacity-0 translate-y-[16px]"
    }`,
  });

  return (
    <section className="overflow-hidden mt-[80px] w-full px-[24px] md:mt-[158px] md:px-[106px]">
      <div ref={ref} className="mx-auto w-full max-w-[1006px]">
        <h2 className="w-full bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[22px] font-black uppercase leading-[1.5] text-transparent md:text-[29px] px-4">
                  <RevealText>
                    Nedostatky agentúr a špecialistov som odstránil a vytvoril hybridný model
                  </RevealText>
                </h2>
         <Reveal delay={200} duration={500} immediate className="mt-6">
                        <p className="w-full font-sans text-[16px] text-white lg:text-[20px] leading-[1.2] text-center ">
                          Iba vďaka nemu viem priniesť výsledky všetkým klientom, s ktorými pracujem.
                        </p>
                      </Reveal> 
        {/* MOBILE: transponovaná tabuľka (natívny <table>) — metriky ako stĺpce hore, plány (Špecialisti / Môj hybridný model / Agentúry) ako riadky vľavo. Natívna tabuľka namiesto CSS grid: prvý stĺpec (sticky) tak má garantovanú synchronizáciu výšky riadkov naprieč prehliadačmi. */}
        <div className="overflow-x-auto py-10 md:hidden">
          <table style={{ tableLayout: "fixed" }}>
            <colgroup>
              <col className="ct-mobile-col-label" />
              {rows.map((row) => (
                <col key={row.label} className="ct-mobile-col-value" />
              ))}
            </colgroup>
            <thead>
              <tr>
                <th className="sticky left-0 z-20 bg-background p-0" />
                {rows.map((row, i) => {
                  const r = reveal(i * 40);
                  return (
                    <th
                      key={row.label}
                      scope="col"
                      className={`p-0 align-bottom font-normal ${
                        i > 0 ? "border-l border-dashed border-white/15" : ""
                      }`}
                    >
                      <div
                        style={r.style}
                        className={`flex flex-col items-center justify-end gap-[8px] px-[10px] pb-[16px] text-center ${r.className}`}
                      >
                        <row.icon className="size-[20px] shrink-0 text-purple-from" />
                        <span className="font-sans text-[12px] font-semibold leading-[1.2] text-white">
                          {row.label}
                        </span>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {plans.map((plan, j) => {
                const labelReveal = reveal(150 + j * 60);
                return (
                  <tr key={plan.key}>
                    <td
                      className={`sticky left-0 z-20 p-0 ${plan.highlight ? "bg-navy-panel" : "bg-background"}`}
                    >
                      <div
                        style={labelReveal.style}
                        className={`flex items-center justify-center py-[16px] transition-opacity duration-500 ease-out motion-reduce:transition-none ${
                          visible ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <span
                          className={`[writing-mode:vertical-rl] rotate-180 whitespace-nowrap font-heading uppercase ${
                            plan.highlight
                              ? "text-[15px] font-black text-white"
                              : "text-[13px] font-normal text-white/80"
                          }`}
                        >
                          {plan.label}
                        </span>
                      </div>
                    </td>

                    {rows.map((row, i) => {
                      const cellReveal = reveal(150 + j * 60 + i * 20);
                      return (
                        <td
                          key={row.label}
                          className={`p-0 ${
                            plan.highlight
                              ? "bg-gradient-to-r from-navy-panel/70 via-navy-panel/40 to-navy-panel/70"
                              : ""
                          } ${i > 0 ? "border-l border-dashed border-white/15" : ""}`}
                        >
                          <div
                            style={cellReveal.style}
                            className={`flex items-center justify-center px-[10px] py-[16px] text-center ${cellReveal.className}`}
                          >
                            <span
                              className={`font-sans text-[13px] leading-[1.3] ${
                                plan.highlight ? "font-bold text-white" : "text-white/70"
                              }`}
                            >
                              {row[plan.key]}
                            </span>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* DESKTOP: pôvodná 4-stĺpcová tabuľka */}
        <div className="hidden overflow-x-auto py-16 md:block">
          {/* Kontajner tabuľky: Rozdelený na 4 reálne stĺpce */}
          <div
            className="grid min-w-[720px] items-start gap-x-[16px]"
            style={{
              gridTemplateColumns: "minmax(140px, auto) 1fr 1.3fr 1fr",
            }}
          >
            {/* STĹPEC 1: Ikony a Labely */}
            <div className="flex flex-col pt-10">
              {/* Hlavička (prázdne miesto) */}
              <div className="h-[62px] pb-[32px]" />

              {/* Bunky */}
              <div className="flex flex-col gap-y-[10px]">
                {rows.map((row, index) => (
                  <div
                    key={row.label}
                    className={`flex h-[72px] items-center gap-[12px] py-[20px] ${reveal(100 + index * 50).className}`}
                    style={reveal(100 + index * 50).style}
                  >
                    <row.icon className="size-[26px] shrink-0 text-purple-from" />
                    <span className="font-sans text-[15px] font-semibold text-white">
                      {row.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* STĹPEC 2: Agentúry */}
            <div className="flex flex-col pt-14">
              {/* Hlavička */}
              <div
                className={`h-[62px] pb-[32px] text-center font-heading text-[20px] font-normal text-white/90 ${reveal(0).className}`}
                style={reveal(0).style}
              >
                Agentúry
              </div>

              {/* Bunky */}
              <div className="flex flex-col gap-y-[8px]">
                {rows.map((row, index) => {
                  const isLast = index === rows.length - 1;
                  return (
                    <div
                      key={row.label}
                      className={`flex h-[72px] flex-col items-center justify-center text-center ${reveal(100 + index * 50).className}`}
                      style={reveal(100 + index * 50).style}
                    >
                      <span className="font-sans text-[15px] text-white/70">
                        {row.agencies}
                      </span>
                      {!isLast && (
                        <span className="mt-[30px] h-px w-[80px] border-t border-dashed border-white/20" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* STĹPEC 3: Môj hybridný model (Jeden ucelený element s plynulým gradientom) */}
            <div
              className={`flex flex-col rounded-[40px] bg-gradient-to-b from-navy-panel/70 via-navy-panel/40 to-background pb-[20px] pt-[16px] shadow-[0_0_60px_12px_rgba(107,146,175,0.25)] animate-float border-[0.2px] border-[#D9EBF8] ${reveal(0).className}`}
              style={reveal(0).style}
            >
              {/* Hlavička zakomponovaná vo vnútri kapsule */}
              <div className="pb-[32px] text-center font-heading text-[26px] font-black leading-[1.3] text-white">
                Môj hybridný model
              </div>

              {/* Bunky */}
              <div className="flex flex-col gap-y-[8px] px-[32px]">
                {rows.map((row, index) => {
                  const isLast = index === rows.length - 1;
                  return (
                    <div
                      key={row.label}
                      className={`flex h-[72px] flex-col items-center justify-center text-center ${reveal(120 + index * 50).className}`}
                      style={reveal(120 + index * 50).style}
                    >
                      <span className="font-sans text-[16px] font-bold text-white">
                        {row.hybrid}
                      </span>
                      {!isLast && (
                        <span className="mt-[20px] h-px w-full border-t border-white/10" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* STĹPEC 4: Špecialisti */}
            <div className="flex flex-col pt-14">
              {/* Hlavička */}
              <div
                className={`h-[62px] pb-[32px] text-center font-heading text-[20px] font-normal text-white/90 ${reveal(0).className}`}
                style={reveal(0).style}
              >
                Špecialisti
              </div>

              {/* Bunky */}
              <div className="flex flex-col gap-y-[8px]">
                {rows.map((row, index) => {
                  const isLast = index === rows.length - 1;
                  return (
                    <div
                      key={row.label}
                      className={`flex h-[72px] flex-col items-center justify-center text-center ${reveal(100 + index * 50).className}`}
                      style={reveal(100 + index * 50).style}
                    >
                      <span className="font-sans text-[15px] text-white/70">
                        {row.specialists}
                      </span>
                      {!isLast && (
                        <span className="mt-[30px] h-px w-[80px] border-t border-dashed border-white/20" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
