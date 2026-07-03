import Button from "./Button";
import { ArrowCircleUpIcon } from "./icons";

const cards = [
  { ratio: "aspect-[297/339]" },
  { ratio: "aspect-[297/152]" },
  { ratio: "aspect-[297/468]", video: true },
  { ratio: "aspect-[297/176]" },
  { ratio: "aspect-[297/468]" },
  {
    ratio: "aspect-[297/468]",
    video: true,
    caption: "Lacné rezervácie pre autorizovaný servis Auto Pola",
  },
  { ratio: "aspect-[297/270]" },
  { ratio: "aspect-[297/203]" },
  { ratio: "aspect-[297/157]" },
  { ratio: "aspect-[297/152]" },
];

export default function PortfolioGrid() {
  return (
    <section className="mt-[80px] w-full px-[24px] sm:mt-[158px] sm:px-[106px]">
      <div className="mx-auto flex w-full max-w-[952px] flex-col items-center gap-[48px] sm:gap-[64px]">
        <h2 className="text-center font-heading text-[24px] font-black uppercase leading-[1.3] text-white sm:text-[32px]">
          Spolupráca, kde vítazia obe strany!
        </h2>

        <div className="w-full columns-2 gap-[16px] sm:columns-3 sm:gap-[30px]">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`relative mb-[16px] w-full break-inside-avoid overflow-hidden rounded-[16px] bg-gradient-to-br from-navy-panel/50 to-navy-panel/20 sm:mb-[30px] sm:rounded-[24px] ${card.ratio}`}
            >
              {card.video && (
                <div className="absolute left-1/2 top-1/2 flex size-[48px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 sm:size-[64px]">
                  <div className="ml-[3px] size-0 border-y-[8px] border-l-[14px] border-y-transparent border-l-navy-panel sm:border-y-[10px] sm:border-l-[18px]" />
                </div>
              )}
              {card.caption && (
                <p className="absolute bottom-[16px] left-[16px] right-[16px] font-sans text-[14px] font-semibold leading-[1.3] text-white sm:bottom-[24px] sm:left-[24px] sm:right-[24px] sm:text-[16px]">
                  {card.caption}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-[12px]">
          <Button href="#vysledky" size="lg">
            Pozrieť viac
          </Button>
          <ArrowCircleUpIcon className="size-[24px] rotate-90 text-white/60" />
        </div>
      </div>
    </section>
  );
}
