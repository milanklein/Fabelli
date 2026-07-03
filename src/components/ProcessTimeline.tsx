import Button from "./Button";

const phases = [
  { label: "Fáza 0", title: "Analýza trhu a príprava akvizičnej stratégie" },
  {
    label: "Fáza 1",
    title: "Implementácia stratégie s interným tímom špecialistov",
  },
  {
    label: "Fáza 2",
    title: "Analýza dát, zhodnotenie a optimalizácia kampaní podľa reakcie trhu",
  },
  {
    label: "Fáza 3",
    title: "Škálovanie, zvyšovanie cien, rozširovanie služieb, zväčšovanie vášho tímu",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="mt-[80px] w-full px-[24px] sm:mt-[158px] sm:px-[106px]">
      <div className="mx-auto flex w-full max-w-[900px] flex-col items-center gap-[48px] sm:gap-[64px]">
        <h2 className="text-center font-heading text-[26px] font-black uppercase leading-[1.3] text-white sm:text-[32px]">
          Proces spolupráce
        </h2>

        <div className="flex w-full gap-[16px] sm:gap-[32px]">
          <div className="relative flex w-[24px] shrink-0 flex-col items-center sm:w-[32px]">
            <div className="absolute top-[16px] bottom-[16px] w-px border-l border-dashed border-white/25" />
            {phases.map((phase) => (
              <div
                key={phase.label}
                className="relative z-10 my-[42px] size-[14px] shrink-0 rounded-full border-2 border-accent-blue bg-background first:mt-0 sm:size-[16px]"
              />
            ))}
          </div>

          <div className="flex flex-1 flex-col gap-[24px] sm:gap-[36px]">
            {phases.map((phase) => (
              <div key={phase.label} className="relative">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -left-[8px] -top-[26px] select-none font-heading text-[56px] font-black uppercase leading-none text-navy-panel/50 sm:-top-[34px] sm:text-[72px]"
                >
                  {phase.label}
                </span>
                <div className="relative rounded-[20px] bg-navy-panel/40 px-[24px] py-[24px] backdrop-blur-sm sm:px-[36px] sm:py-[28px]">
                  <p className="font-sans text-[16px] font-medium leading-[1.4] text-white sm:text-[18px]">
                    {phase.title}
                  </p>
                </div>
              </div>
            ))}
            <Button href="#kontakt" size="lg" className="mt-[16px] self-start">
              Vyplniť kvalifikačný formulár
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
