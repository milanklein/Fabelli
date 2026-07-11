import Button from "./Button";
import Reveal from "./Reveal";
import RevealText from "./RevealText";
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
    <section className="mt-[80px] w-full px-[24px] md:mt-[158px] md:px-[106px] overflow-hidden pb-10 md:pb-16">
      <div className="mx-auto flex w-full max-w-[1048px] flex-col items-center">
        <h2 className="w-full text-center font-heading text-[24px] font-black uppercase leading-[1.5] text-white md:text-[32px] ">
          <RevealText>
            Úvodný proces končí tam,<br /> kde väčšina marketérov iba začína…
          </RevealText>
        </h2>
<div className="relative max-w-full">
        <div className="relative left-1/2 w-screen -translate-x-1/2">
        <p
          aria-hidden
          className="mt-[40px] w-full select-none bg-gradient-to-t from-[#0c1728] via-[#d9ebf8] to-[#f4fafd] bg-clip-text text-center font-heading text-[clamp(32px,13vw,223px)] font-black uppercase whitespace-nowrap leading-none text-transparent opacity-[0.43] md:mt-[89px] md:leading-[1.05] sticky top-20 sm:top-80 md:top-40 mb-10 md:mb-0"
        >
          Fáza 0
        </p>
        </div>

        <div className="relative bg-gradient-to-b from-transparent to-[#0C1728] to-40% -mt-[10px] flex w-full flex-col items-center gap-[24px] md:-mt-[20px] md:gap-[20px]">
          <h3 className="w-full max-w-[740px] bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[22px] font-black uppercase text-transparent md:text-[29px]">
            <RevealText>
              2 týždne, kedy spoznám<br />váš trh lepšie ako vy
            </RevealText>
          </h3>

          <ul className="flex w-full max-w-full md:max-w-[736px] flex-col">
            {steps.map((step, i) => (
              <li key={step.text}>
                <Reveal delay={i * 90} duration={500} y={16}>
                  <div className="flex items-center gap-[16px] py-[20px] md:gap-[20px] md:py-[27px]">
                    <step.icon className="size-[28px] shrink-0 text-accent-blue md:size-[39px]" />
                    <p className="font-sans text-[16px] text-white md:text-[20px] font-bold leading-[1.5]">
                      {step.text}
                    </p>
                  </div>
                </Reveal>
                {i < steps.length - 1 && (
                  <div className="h-px w-full bg-white/15" />
                )}
              </li>
            ))}
          </ul>
        </div>
</div>
        <Reveal delay={0} duration={500}>
          <Button href="/pripadove-studie" size="lg" variant="secondary" className="mt-[40px] md:mt-[40px]">
            Výsledky mojich klientov
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
