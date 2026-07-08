import Image from "next/image";
import Reveal from "./Reveal";

export default function IntroStatement() {
  return (
    <section className="mt-[80px] w-full md:mt-[158px] px-4">
      <div
        className="mx-auto flex w-full max-w-[1234px] flex-col items-center gap-[24px] rounded-[24px] bg-gradient-to-r from-heading-from to-heading-to px-[24px] pt-[40px] md:grid md:items-end md:justify-center md:gap-x-[19px] md:gap-y-[40px] md:rounded-[40px] md:px-0 md:pl-[91px] md:pr-[139px] md:pt-[71px] pb-10 md:pb-0"
        style={{ gridTemplateColumns: "584px 1fr" }}
      >
        {/* Nadpis + prvý odsek — na mobile nad obrázkom, na desktope v pravom stĺpci hore */}
        <Reveal
          delay={150}
          duration={700}
          className="flex w-full max-w-[539px] flex-col items-start gap-[20px] text-[#0c1728] md:[grid-column:2] md:[grid-row:1]"
        >
          <p className="w-full font-heading text-[20px] font-black uppercase leading-[1.5] md:text-[27px]">
            Ak marketér nepozná zákazníka a konkurenciu lepšie ako majiteľ
            firmy…robí to zle!
          </p>
          <p className="font-sans text-[16px] font-bold leading-normal md:text-[20px]">
            Všetci sa sústredia na &bdquo;pekné reklamy&ldquo;, &bdquo;moderné
            weby&ldquo; alebo &bdquo;AI riešenia&ldquo;.
          </p>
        </Reveal>

        {/* Obrázok — na mobile v strede, na desktope vľavo cez celú výšku */}
        <Reveal
          delay={0}
          duration={700}
          y={20}
          className="relative md:[grid-column:1] md:[grid-row:1/3]"
        >
          <Image
            src="/images/founder-intro.png"
            alt="Fabián"
            width={584}
            height={554}
            className=" h-[300px]  w-[326px] md:h-[554px] md:w-[584px] [mix-blend-mode:luminosity] border-black border-1 md:border-0 rounded-[30px]"
          />
        </Reveal>

        {/* Zvyšné odseky — na mobile pod obrázkom, na desktope v pravom stĺpci dole */}
        <Reveal
          delay={250}
          duration={700}
          className="flex w-full max-w-[539px] flex-col gap-[20px] font-sans font-bold text-[#0c1728] md:[grid-column:2] md:[grid-row:2] md:pb-[32px]"
        >
          <p className="text-[20px] leading-normal md:text-[26px]">
            Tie fungujú, no iba ak poznáte svojich{" "}
            <span className="font-black">cieľovych zákazníkov.</span>
          </p>
          <p className="text-[16px] leading-normal md:text-[20px]">
            Ak neviete čo presne musia títo ľudia počuť, vidieť a cítiť, aby
            zakúpili…
          </p>
          <p className="text-[16px] leading-normal md:text-[20px]">
            Tak vaše kampane budú pri najlepšom priemerné. No vy ste tu, čiže
            priemernými byť nechcete!
          </p>
        </Reveal>
      </div>
    </section>
  );
}
