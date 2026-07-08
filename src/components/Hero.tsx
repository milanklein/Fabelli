import Image from "next/image";
import Button from "./Button";
import Header from "./Header";
import GlowCircle from "./GlowCircle";
import Reveal from "./Reveal";
import RevealText from "./RevealText";
export default function Hero() {
  return (
    <section className="relative w-full overflow-x-hidden bg-background">
      <Image
        src="/images/hero-logomark.svg"
        alt=""
        width={824}
        height={540}
        aria-hidden
        className="pointer-events-none absolute right-0 top-[112px] hidden h-auto w-[824px] max-w-none md:block"
      />
      <GlowCircle className="-top-[450px] -right-[250px]" />      <div className="relative mx-auto flex w-full max-w-[1446px] flex-col gap-[60px] px-[24px] pb-[80px] pt-[40px] md:gap-[103px] md:px-[106px] md:pt-[58px]">
        <Reveal delay={0} duration={500} y={12} immediate>
          <Header />
        </Reveal>
        <div className="flex w-full flex-col-reverse items-start gap-[40px] md:flex-row md:gap-[60px]">
          <Reveal
            delay={120}
            duration={700}
            y={20}
            immediate
            className=" h-[368px] w-full shrink-0 rounded-[30px] bg-navy-panel block md:w-[654px]"
          />
          <div className="flex w-full flex-1 flex-col items-start gap-[30px]">
            <div className="flex w-full flex-col items-start gap-[12px]">
              <h1 className="w-full bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[32px] font-black uppercase leading-normal text-transparent md:text-[38px]">
                <RevealText immediate>
                  <span className="block">Kompetencia pramení</span>
                  <span className="block">z poznania</span>
                  <span className="block text-accent-blue">trhu</span>
                </RevealText>
              </h1>
              <Reveal delay={200} duration={500} immediate>
                <p className="w-full font-sans text-[18px] text-white md:text-[20px]">
                  Preto trávim 2 týždne prieskumom predtým, než pripravím prvý výstup
                </p>
              </Reveal>
            </div>
            <Reveal delay={300} duration={500} immediate>
              <Button href="/kvalifikacny-formular" size="lg">
                Chcem stratégiu
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
