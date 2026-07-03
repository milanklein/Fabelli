import Button from "./Button";
import {
  ArrowIcon,
  DocumentIcon,
  MapIcon,
  RankingIcon,
  SearchIcon,
} from "./icons";

const steps = [
  { icon: MapIcon, text: "Vytvorenie psychologickej mapy cieľovky" },
  {
    icon: ArrowIcon,
    text: "Odhalenie vzorcov ich rozhodovania cez kvalitatívny prieskum",
  },
  {
    icon: SearchIcon,
    text: "Analýza konkurencie a využitie ich slabín vo váš prospech",
  },
  {
    icon: RankingIcon,
    text: "Pozicioning na trhu podľa unikátnych bodov vašej firmy",
  },
  {
    icon: DocumentIcon,
    text: "Detailná príprava akvizičnej stratégie, ktorú aj vykonám",
  },
];

export default function ProcessIntro() {
  return (
    <section className="mt-[80px] w-full px-[24px] sm:mt-[158px] sm:px-[106px]">
      <div className="mx-auto flex w-full max-w-[1040px] flex-col items-center">
        <h2 className="w-full text-center font-heading text-[24px] font-black uppercase leading-[1.3] text-white sm:text-[32px]">
          Úvodný proces končí tam, kde väčšina marketérov iba začína…
        </h2>

        <p
          aria-hidden
          className="mt-[40px] w-full select-none text-center font-heading text-[80px] font-black uppercase leading-none text-navy-panel/60 sm:mt-[89px] sm:text-[160px]"
        >
          Fáza 0
        </p>

        <div className="-mt-[10px] flex w-full flex-col items-center gap-[24px] sm:-mt-[20px] sm:gap-[20px]">
          <h3 className="w-full max-w-[740px] text-center font-heading text-[22px] font-bold leading-[1.3] text-white sm:text-[30px]">
            2 týždne, kedy spoznám váš trh lepšie ako vy
          </h3>

          <ul className="flex w-full max-w-[736px] flex-col">
            {steps.map((step, i) => (
              <li key={step.text}>
                <div className="flex items-center gap-[24px] py-[20px] sm:gap-[30px]">
                  <step.icon className="size-[28px] shrink-0 text-accent-blue sm:size-[39px]" />
                  <p className="font-sans text-[16px] text-white sm:text-[20px]">
                    {step.text}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <div className="h-px w-full bg-white/15" />
                )}
              </li>
            ))}
          </ul>
        </div>

        <Button href="#kontakt" size="lg" className="mt-[40px] sm:mt-[40px]">
          Výsledky mojich klientov
        </Button>
      </div>
    </section>
  );
}
