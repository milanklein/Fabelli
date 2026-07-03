"use client";

import { useState } from "react";
import { ArrowCircleUpIcon } from "./icons";

const questions = [
  "V čom ste iný ako ostatní?",
  "Aké presné služby ponúkate?",
  "Ako prebieha spolupráca?",
  "S akými typmi firiem spolupracujete?",
  "Koľko to stojí?",
  "Viete mi garantovať výsledky?",
  "Robíte aj zadarmo?",
  "„Už som mal/a zlú skúsenosť s agentúrou“",
  "Používate AI?",
  "Čo sa stane po odoslaní formulára?",
  "Na čo slúži úvodný hovor?",
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
      <div className="mx-auto flex w-full max-w-[1234px] flex-col items-center gap-[40px] sm:gap-[48px]">
        <h2 className="text-center font-heading text-[24px] font-black uppercase text-white sm:text-[32px]">
          FAQ
        </h2>
        <div className="flex w-full flex-col">
          {questions.map((q, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={q} className="border-t border-white/10 last:border-b">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-[16px] py-[24px] text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans text-[16px] font-medium text-white sm:text-[18px]">
                    {q}
                  </span>
                  <ArrowCircleUpIcon
                    className={`size-[24px] shrink-0 text-accent-blue transition-transform ${
                      isOpen ? "" : "rotate-180"
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="pb-[24px] font-sans text-[15px] leading-[1.5] text-white/70 sm:text-[16px]">
                    Odpoveď čoskoro doplníme.
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
