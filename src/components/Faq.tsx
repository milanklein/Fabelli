"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowCircleUpIcon } from "./icons";
import RevealText from "./RevealText";

export interface FaqItem {
  q: string;
  a: string[];
}

const faqs: FaqItem[] = [
  {
    q: "V čom ste iný ako ostatní?",
    a: [
      "Pred tým, ako napíšem prvé slovo reklamy alebo webu, trávim približne 2 týždne hĺbkovým prieskumom vášho trhu, zákazníkov a konkurencie. Väčšina agentúr a špecialistov tento krok úplne preskočí a ide rovno tvoriť. To je základný dôvod, prečo ich kampane prestanú fungovať po pár týždňoch.",
      "Druhý rozdiel je kapacita. Pracujem naraz maximálne s piatimi klientmi a každému sa venujem osobne. Nemám v tíme žiadnych marketingových juniorov a nebudem si vás prehadzovať ako horúci zemiak.",
    ],
  },
  {
    q: "Aké presné služby ponúkate?",
    a: [
      "Služby ako reklamy, videá alebo webstránky sú samé osebe takmer bezcenné, ak neslúžia premyslenej stratégii. Väčšina agentúr vám ich predáva jednotlivo, pretože je to jednoduchšie účtovať. Výsledkom sú izolované výstupy, ktoré spolu nekomunikujú.",
      "Ja to robím opačne. Najskôr analyzujem vašu cieľovú skupinu, konkurenciu a unikátne prednosti vašej firmy. Až na základe toho pripravím akvizičnú stratégiu a následne ju aj kompletne zrealizujem. Reklamné scenáre, produkcia, webstránky, technické riešenia. Všetko pod jednou stratégiou, nie ako samostatné „služby“.",
    ],
  },
  {
    q: "Ako prebieha spolupráca?",
    a: [
      "Spolupráca má 4 fázy.",
      "Fáza 0: Dva týždne hĺbkového prieskumu vášho trhu, zákazníkov a konkurencie. Výstupom je psychologický profil cieľovky, positioning vašej firmy a presná akvizičná stratégia.",
      "Fáza 1: Implementácia stratégie. Reklamy, weby, produkcia a postprodukcia. Všetko realizované interným tímom špecialistov podľa pripravenej stratégie.",
      "Fáza 2: Analýza dát. Po spustení kampaní vyhodnocujem reakciu trhu a optimalizujem celý systém podľa reálnych čísel.",
      "Fáza 3: Škálovanie. Zvyšovanie cien, rozširovanie služieb, zväčšovanie vášho tímu. Cieľom nie je len získať zákazníkov, ale posunúť celú firmu na vyšší level.",
    ],
  },
  {
    q: "S akými typmi firiem spolupracujete?",
    a: [
      "Spolupracujem s firmami, ktoré majú dobrý produkt alebo službu, mesačný obrat minimálne desaťtisícoch a pocit, že ich marketing nezodpovedá kvalite toho, čo ponúkajú.",
      "Väčšinou ide o služby alebo prémiové produkty, kde je dôležité pochopiť zákazníka a jeho rozhodovanie, nie len optimalizovať čísla v tabuľke.",
      "Nespolupracujem s lacnými vysokoobrátkovými e-shopmi, firmami na úplnom začiatku bez rozpočtu na väčšiu kampaň a s nikým, koho produkt alebo služba neplní to, čo sľubuje. Nie je v mojich hodnotách predávať klamstvá.",
    ],
  },
  {
    q: "Koľko to stojí?",
    a: [
      "Cena závisí od rozsahu a podmienok konkrétneho projektu a vždy ju riešim s klientmi priamo na hovore, aby presne videli, koľko platia a za aké výsledky.",
      "Vstupná investícia však nikdy nie je nižšia ako 2 500 €. Ak to momentálne nie je vo vašich možnostiach, neodporúčam vypĺňať formulár.",
    ],
  },
  {
    q: "Viete mi garantovať výsledky?",
    a: [
      "Spolupráce staviam tak, aby sme boli obe strany motivované dosiahnuť čo najlepšie výsledky. Konkrétne to znamená, že časť mojej odmeny je viazaná na dosiahnutie výsledkov, na ktorých sa vopred dohodneme.",
      "Nie je v mojom záujme projekt „dokončiť“. Je v mojom záujme, aby fungoval.",
    ],
  },
  {
    q: "Robíte aj zadarmo?",
    a: [
      "Nie. Pracoval som na projektoch, kde klient neplatil nič vopred. Výsledkom bolo, že projekt nebral vážne, nemal motiváciu na ňom pracovať a spolupráca skončila bez výsledkov.",
      "Spolupráce staviam tak, aby boli obe strany motivované. Iba vtedy si každý odrobí svoju prácu naplno.",
    ],
  },
  {
    q: "„Už som mal/a zlú skúsenosť s agentúrou“",
    a: [
      "To je v poriadku, pretože ja agentúra nie som.",
      "Agentúry fungujú na princípe masového naberania klientov. Kompetentní ľudia sa venujú tým najväčším a zvyšok dostanú juniori podľa šablóny.",
      "Ja pracujem naraz s maximálne piatimi klientmi. Stratégiu, prieskum a všetky texty robím ja. Špecializovanú prácu vykonáva interný tím ľudí, ktorých som si sám vybral. O všetkom ste informovaní a komunikujete priamo so mnou.",
    ],
  },
  {
    q: "Používate AI?",
    a: [
      "Pri veciach, ktoré priamo ovplyvňujú to, ako sa váš marketing prihovorí zákazníkovi, AI nepoužívam. Celá Fáza 0, tvorba stratégie a písanie textov do reklám a webov je vždy moja práca.",
      "AI má svoje miesto pri automatizáciách, rýchlom testovaní vizuálov alebo analýze dát. Tam, kde zrýchľuje prácu bez toho, aby znížila kvalitu.",
    ],
  },
  {
    q: "Čo sa stane po odoslaní formulára?",
    a: [
      "Počas 48 hodín si prejdem vaše odpovede, web a sociálne siete. Chcem mať jasno v tom, kto ste a čo robíte.",
      "Ak uvidím priestor na spoluprácu, ozvem sa vám telefonicky a dohodneme si termín úvodného hovoru. Ak sa do 72 hodín neozvem, znamená to, že spolupráca by pravdepodobne nedávala zmysel pre obe strany.",
    ],
  },
  {
    q: "Na čo slúži úvodný hovor?",
    a: [
      "Úvodný hovor trvá približne 30 minút a má jediný cieľ: zistiť, či by spolupráca mala zmysel.",
      "Chcem sa dozvedieť viac o tom, čo robíte, čo ste už v minulosti skúšali a ako si celkovo sadneme. Na tomto hovore sa netvorí stratégia, nerieši sa cena a nič sa nepredáva.",
      "Na konci vám na rovinu poviem, či vidím priestor na spoluprácu. Ak áno, navrhneme si ďalšie kroky.",
    ],
  },
];

export default function Faq({
  heading = "FAQ",
  items = faqs,
}: {
  heading?: string;
  items?: FaqItem[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [listVisible, setListVisible] = useState(false);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setListVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="overflow-hidden mt-[64px] w-full px-[24px] md:mt-[100px] md:px-[106px]">
      <div className="mx-auto flex w-full max-w-[1234px] flex-col items-center gap-[40px] md:gap-[48px]">
        <h2 className="text-center font-heading text-[24px] font-black uppercase text-white md:text-[32px]">
          <RevealText>{heading}</RevealText>
        </h2>
        <div ref={listRef} className="flex w-full flex-col gap-4">
          {items.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.q}
                style={{ transitionDelay: `${Math.min(i * 60, 480)}ms` }}
                className={`bg-[#1D2839] rounded-[40px] transition-opacity duration-500 ease-out motion-reduce:transition-none motion-reduce:opacity-100 ${
                  listVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-[16px] p-[24px] text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans text-[16px] font-medium text-white md:text-[18px]">
                    {faq.q}
                  </span>
                  <ArrowCircleUpIcon
                    className={` size-[24px] shrink-0 text-accent-blue transition-transform ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="flex flex-col gap-[16px] pb-[24px] px-[24px] font-sans text-[15px] leading-[1.5] text-white/70 md:text-[16px]">
                    {faq.a.map((paragraph, pi) => (
                      <p key={pi}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
