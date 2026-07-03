import Image from "next/image";
import Button from "./Button";
import Header from "./Header";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      <Image
        src="/images/hero-logomark.svg"
        alt=""
        width={824}
        height={540}
        aria-hidden
        className="pointer-events-none absolute right-0 top-[112px] hidden h-auto w-[824px] max-w-none lg:block"
      />
      <div className="relative mx-auto flex w-full max-w-[1446px] flex-col gap-[60px] px-[24px] pb-[80px] pt-[40px] sm:gap-[103px] sm:px-[106px] sm:pt-[58px]">
        <Header />
        <div className="flex w-full flex-col items-start gap-[40px] lg:flex-row lg:gap-[60px]">
          <div className="hidden h-[368px] w-full shrink-0 rounded-[30px] bg-navy-panel lg:block lg:w-[654px]" />
          <div className="flex w-full flex-1 flex-col items-start gap-[30px]">
            <div className="flex w-full flex-col items-start gap-[12px]">
              <h1 className="w-full bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[32px] font-black uppercase leading-normal text-transparent sm:text-[38px]">
                <span className="block">Kompetencia pramení</span>
                <span className="block">z poznania</span>
                <span className="block text-accent-blue">trhu</span>
              </h1>
              <p className="w-full font-sans text-[18px] text-white sm:text-[20px]">
                Preto trávim 2 týždne prieskumom predtým, než pripravím prvý výstup
              </p>
            </div>
            <Button href="#kontakt" size="lg">
              Chcem stratégiu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
