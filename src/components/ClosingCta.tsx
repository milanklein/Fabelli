import Button from "./Button";
import { ArrowCircleUpIcon } from "./icons";

export default function ClosingCta() {
  return (
    <section className="mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
      <div className="mx-auto flex w-full max-w-[957px] flex-col items-center gap-[48px] sm:gap-[64px]">
        <h2 className="text-center font-sans text-[22px] font-bold leading-[1.4] text-white sm:text-[28px]">
          Ešte niečo hľadáte? :) Máte už len 2 možnosti:
        </h2>

        <div className="flex w-full flex-col items-stretch gap-[16px] sm:flex-row sm:items-center sm:gap-0">
          <div className="flex flex-1 flex-col items-center justify-center rounded-[20px] bg-navy-panel/20 px-[24px] py-[40px] text-center">
            <p className="font-sans text-[16px] leading-[1.5] text-white/70 sm:text-[18px]">
              Budete robiť to, čo doteraz. S rovnakými výsledkami ako doteraz.
            </p>
          </div>
          <div className="flex items-center justify-center px-[16px] py-[16px] font-heading text-[18px] font-bold uppercase text-accent-blue sm:py-0">
            alebo
          </div>
          <div className="flex flex-1 flex-col items-center justify-center rounded-[20px] bg-gradient-to-br from-purple-from/25 to-purple-to/25 px-[24px] py-[40px] text-center">
            <p className="font-sans text-[18px] font-semibold leading-[1.5] text-white sm:text-[20px]">
              Začnete konečne škálovať.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-[24px]">
          <p className="font-sans text-[18px] text-white sm:text-[20px]">
            Stále si nie ste istý?
          </p>
          <div className="flex items-center gap-[12px]">
            <Button href="#vysledky" size="lg">
              Pozrite si výsledky mojich klientov
            </Button>
            <ArrowCircleUpIcon className="size-[36px] rotate-90 text-white/70" />
          </div>
        </div>
      </div>
    </section>
  );
}
