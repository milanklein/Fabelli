import Image from "next/image";

export default function PerformanceSection() {
  return (
    <section className="mt-[80px] w-full px-[24px] sm:mt-[158px] sm:px-[106px]">
      <div className="mx-auto flex w-full max-w-[1105px] flex-col items-center gap-[32px] overflow-hidden rounded-[24px] bg-navy-panel/20 px-[24px] py-[48px] sm:flex-row sm:items-center sm:justify-between sm:gap-[40px] sm:rounded-[40px] sm:px-[80px] sm:py-[64px]">
        <div className="relative h-[280px] w-full max-w-[352px] shrink-0 overflow-hidden rounded-[20px] sm:h-[420px]">
          <Image
            src="/images/founder-intro.png"
            alt="Fabián"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex w-full max-w-[426px] flex-col items-start gap-[20px] sm:gap-[24px]">
          <h2 className="w-full font-heading text-[26px] font-black uppercase leading-[1.3] text-white sm:text-[36px]">
            Zarábam, keď zarábate vy
          </h2>
          <p className="w-full font-sans text-[16px] leading-[1.5] text-white/80 sm:text-[20px]">
            Viem sa postaviť za svoje výsledky, a preto mám v projektoch
            výkonnostnú zložku
          </p>
          <p className="font-sans text-[15px] italic leading-[1.4] text-accent-blue sm:text-[16px]">
            PS: neznamená to, že som lacný a pracujem zadarmo
          </p>
        </div>
      </div>
    </section>
  );
}
