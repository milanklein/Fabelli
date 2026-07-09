import Image from "next/image";
import ButtonArrow from "./ButtonArrow";
import Reveal from "./Reveal";
import RevealText from "./RevealText";
import Button from "./Button";

export default function ClosingCta() {
  return (
    <section className="overflow-hidden mt-[64px] w-full px-[24px] pb-16 md:mt-[100px] md:px-[106px]">
      <div className="mx-auto flex w-full max-w-[957px] flex-col items-center">
        <Reveal delay={0} duration={900}>
          <h2 className="text-center font-sans text-[22px] font-black uppercase leading-[1.4] text-white md:text-[28px]  ">
            <RevealText>Ešte niečo hľadáte? :)</RevealText>
          </h2>
          <p className="text-center w-full font-sans text-[18px] text-white md:text-[20px] pb-4">
            Máte už len 2 možnosti:
          </p>
        </Reveal>

        <Reveal delay={150} duration={900}>
          <Image src="/images/bracket.png" width="561" height="147" alt="bracket" className="hidden md:block "/>
        </Reveal>

        <Reveal
          delay={300}
          duration={900}
          className="flex w-full flex-col items-stretch gap-[16px] md:flex-row md:items-start md:gap-8"
        >
          <div className="flex flex-1 flex-col items-center justify-center rounded-[20px]  px-[24px] py-[40px] rounded-[40px] border-white border-[1px] ">
            <p className="font-sans text-[20px] leading-[1.5] font-black md:text-[18px] bg-gradient-to-r from-heading-from to-heading-to bg-clip-text uppercase relative z-5">
              Budete robiť to, čo doteraz. S rovnakými výsledkami ako doteraz.
            </p>
          </div>
          <div className="flex items-center justify-center px-[16px] py-[16px] font-heading text-[22px] font-bold uppercase text-white ">
            alebo
          </div>
          <div className="flex flex-col gap-8 items-center justify-center  ">

          <div className="relative flex flex-1 flex-col items-start justify-center rounded-[40px] bg-gradient-to-br from-[#D9EBF8] to-[#F4FAFD] px-[24px] py-[48px] h-[100%] w-full lg:w-full">
           <p className="font-sans text-[18px] font-black leading-[1.5] text-black  md:text-[20px] uppercase ">
              Začnete konečne<br /> škálovať.
            </p>
            <Image
              className="absolute -bottom-1 right-0"
              src="/images/logo-black-icon.png"
              alt="logo Fabelli"
              width={129}
              height={84}
              />
              </div>
            <Button href="#vysledky" className="">
            Začnete konečne škálovať.
            </Button>
          </div>
        </Reveal>

        <Reveal
          delay={450}
          duration={900}
          className="flex flex-col items-center gap-[24px] mt-40 "
        >
          <p className="font-sans text-[18px] text-white md:text-[20px] uppercase">
            Stále si nie ste istý?
          </p>
          <ButtonArrow href="#vysledky" className="">
            Pozrite si výsledky mojich klientov
          </ButtonArrow>
        </Reveal>
      </div>
    </section>
  );
}
