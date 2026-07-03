import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="mt-[80px] w-full px-[24px] sm:mt-[158px] sm:px-[106px]">
      <div className="mx-auto flex w-full max-w-[1040px] flex-col items-center gap-[40px] sm:gap-[62px]">
        <h2 className="w-full bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[22px] font-black uppercase leading-[1.5] text-transparent sm:text-[29px]">
          Keď si marketér urobí
          <br />
          svoju prácu poriadne
        </h2>

        <div className="flex w-full flex-col items-center gap-[40px] sm:gap-[58px]">
          <div className="flex items-end justify-center gap-[16px] sm:gap-[48px]">
            <div className="relative h-[280px] w-[142px] shrink-0 overflow-hidden rounded-[20px] opacity-70 blur-[1px] sm:h-[429px] sm:w-[217px] sm:rounded-[31px] sm:blur-[3px]">
              <Image
                src="/images/testimonial-left.png"
                alt="Klient"
                fill
                className="object-cover"
              />
              <Image
                src="/images/play-icon.png"
                alt=""
                width={44}
                height={44}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div className="relative h-[360px] w-[183px] shrink-0 overflow-hidden rounded-[26px] shadow-[0px_0px_43px_0px_rgba(219,236,248,0.59)] sm:h-[553px] sm:w-[280px] sm:rounded-[40px]">
              <Image
                src="/images/testimonial-center.png"
                alt="Jovinečko"
                fill
                className="object-cover"
              />
              <Image
                src="/images/play-icon.png"
                alt=""
                width={56}
                height={56}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div className="relative h-[280px] w-[142px] shrink-0 overflow-hidden rounded-[20px] opacity-70 blur-[1px] sm:h-[429px] sm:w-[217px] sm:rounded-[31px] sm:blur-[3px]">
              <Image
                src="/images/testimonial-right.png"
                alt="Klient"
                fill
                className="object-cover"
              />
              <Image
                src="/images/play-icon.png"
                alt=""
                width={44}
                height={44}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>

          <p className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-sans text-[14px] font-bold uppercase leading-[1.5] text-transparent sm:text-[16px]">
            ,,Nikomu nezáležalo na projekte viac ako Fabiánovi.&rdquo;
            <br />
            <span className="bg-gradient-to-r from-purple-from to-purple-to bg-clip-text italic text-transparent">
              -Jovinečko
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
