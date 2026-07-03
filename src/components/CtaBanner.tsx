import Button from "./Button";

export default function CtaBanner() {
  return (
    <section className="mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
      <div className="mx-auto flex w-full max-w-[1106px] flex-col items-center gap-[32px] overflow-hidden rounded-[24px] bg-gradient-to-br from-purple-from/20 to-purple-to/20 px-[24px] py-[40px] sm:flex-row sm:gap-[60px] sm:rounded-[40px] sm:px-[60px] sm:py-[60px]">
        <div className="hidden h-[253px] w-full max-w-[470px] shrink-0 rounded-[20px] bg-navy-panel/40 sm:block" />
        <div className="flex w-full max-w-[476px] flex-col items-start gap-[32px] sm:gap-[40px]">
          <p className="w-full font-heading text-[22px] font-black leading-[1.3] text-white sm:text-[30px]">
            Máte dobrý produkt a &bdquo;OKEJ&ldquo; výsledky, no chcete sa
            posunúť o level vyššie?
          </p>
          <Button href="#kontakt" size="lg">
            Vyplniť kvalifikačný formulár
          </Button>
        </div>
      </div>
    </section>
  );
}
