import Image from "next/image";
import AnimatedWebp from "./AnimatedWebp";
import Reveal from "./Reveal";
import RevealText from "./RevealText";

export default function PerformanceSection() {
  return (
    <section className="overflow-hidden mt-[80px] w-full px-[24px] lg:mt-[158px] lg:px-[106px]">
      <div className="relative mx-auto flex w-full max-w-[1234px] flex-col-reverse items-center gap-[32px] overflow-hidden rounded-[60px] bg-navy-panel/20 px-[24px] pt-[48px] lg:flex-row lg:items-end lg:justify-between lg:gap-[40px] lg:rounded-[40px] lg:px-0 lg:py-0 lg:px-[80px]">
      
<Image
          src="/images/logo-black-icon.svg"
          alt=""
          width={248}
          height={163}
          aria-hidden
          className="pointer-events-none absolute -left-6 -top-4  h-auto w-[380px] max-w-none lg:block "
        />
        <div className="relative h-[280px] w-full max-w-[352px] shrink-0 lg:h-[420px] lg:w-[430px] ml-40 lg:ml-0 ">
          <Reveal delay={0} duration={700} className="absolute inset-0">
            <Image
              src="/images/fabian.png"
              alt="Fabián"
              fill
              className="object-contain object-bottom"
            />
          </Reveal>
          {/* Mimo Reveal (bez transform/will-change na predkovi) — Safari inak zamrazí animáciu GIF-u */}
          <div className="pointer-events-none absolute bottom-0 -left-40 h-full w-full lg:left-auto lg:-right-[300px]">
            <AnimatedWebp
              src="/images/fabian_podpis-animation.webp"
              alt=""
              className="object-contain object-bottom"
            />
          </div>
        </div>

        <div className="flex w-full max-w-[500px] flex-col items-start gap-[24px] lg:gap-[28px] lg:py-[64px] z-10">
          <h2 className="w-full bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[32px] font-black uppercase leading-[1.2] text-transparent lg:text-[44px]">
            <RevealText>
              Zarábam,
              <br />
              keď zarábate vy
            </RevealText>
          </h2>
          <Reveal delay={150} duration={500}>
            <p className="w-full font-sans text-[18px] leading-[1.5] text-white/90 lg:text-[22px]">
              Viem sa postaviť za svoje výsledky, a preto mám v projektoch
              výkonnostnú zložku
            </p>
          </Reveal>
          <Reveal delay={250} duration={500}>
            <p className="font-sans text-[15px] italic leading-[1.4] text-white/60 lg:text-[16px]">
              PS: neznamená to, že som lacný a pracujem zadarmo
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
