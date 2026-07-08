import Button from "./Button";
import Reveal from "./Reveal";

export default function CtaBanner() {
  return (
    <section className="overflow-hidden mt-[64px] w-full px-[24px] md:mt-[100px] md:px-[106px]">
      <div className="mx-auto flex w-fit max-w-[1106px] flex-col items-center  gap-[32px] overflow-hidden rounded-[24px] bg-gradient-to-r from-[#D9EBF8] to-[#D9EBF8] px-[24px] py-[40px] md:flex-row md:gap-[60px] md:rounded-[40px] md:px-[60px] md:py-[60px]">
        <Reveal
          delay={0}
          duration={700}
          className="hidden h-[253px] w-full max-w-[470px] shrink-0 rounded-[20px] bg-navy-panel/40 "
        />
        <div className="flex w-full max-w-[476px] flex-col items-center  justify-center  gap-[32px] md:gap-[40px]">
          <Reveal delay={100} duration={500}>
            <p className="w-full font-heading text-[22px] font-black leading-[1.3] text-[#0C1728] md:text-[30px] text-center">
              Máte dobrý produkt a &bdquo;OKEJ&ldquo; výsledky, no chcete sa
              posunúť o level vyššie?
            </p>
          </Reveal>
          <Reveal delay={200} duration={500}>
            <Button href="/kvalifikacny-formular" size="lg">
              Vyplniť kvalifikačný formulár
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
