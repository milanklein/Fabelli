import Image from "next/image";

export default function IntroStatement() {
  return (
    <section className="mt-[80px] w-full px-[24px] sm:mt-[158px] sm:px-[106px]">
      <div className="mx-auto flex w-full max-w-[1234px] flex-col items-center gap-[24px] overflow-hidden rounded-[24px] bg-gradient-to-r from-heading-from to-heading-to px-[24px] pb-[32px] pt-[32px] sm:flex-row sm:items-end sm:justify-center sm:gap-[19px] sm:rounded-[40px] sm:px-[91px] sm:pt-[71px]">
        <div className="relative h-[280px] w-full max-w-[420px] shrink-0 sm:h-[554px] sm:w-[584px]">
          <Image
            src="/images/founder-intro.png"
            alt="Fabián"
            fill
            className="object-cover object-bottom [mix-blend-mode:luminosity]"
          />
        </div>
        <div className="flex w-full max-w-[539px] flex-col items-start gap-[24px] text-[#0c1728] sm:gap-[40px] sm:pb-[32px]">
          <p className="w-full font-heading text-[20px] font-black uppercase leading-[1.5] sm:text-[27px]">
            Ak marketér nepozná zákazníka a konkurenciu lepšie ako majiteľ
            firmy…robí to zle!
          </p>
          <div className="flex w-full flex-col gap-[20px] font-sans font-bold">
            <p className="text-[16px] leading-normal sm:text-[20px]">
              Všetci sa sústredia na &bdquo;pekné reklamy&ldquo;, &bdquo;moderné
              weby&ldquo; alebo &bdquo;AI riešenia&ldquo;.
            </p>
            <p className="text-[20px] leading-normal sm:text-[26px]">
              Tie fungujú, no iba ak poznáte svojich{" "}
              <span className="font-black">cieľovych zákazníkov.</span>
            </p>
            <p className="text-[16px] leading-normal sm:text-[20px]">
              Ak neviete čo presne musia títo ľudia počuť, vidieť a cítiť, aby
              zakúpili…
            </p>
            <p className="text-[16px] leading-normal sm:text-[20px]">
              Tak vaše kampane budú pri najlepšom priemerné. No vy ste tu, čiže
              priemernými byť nechcete!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
