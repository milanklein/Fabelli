import Image from "next/image";
import Button from "./Button";
import Header from "./Header";
import GlowCircle from "./GlowCircle";
import Reveal from "./Reveal";
import RevealText from "./RevealText";
import RotatingWord from "./RotatingWord";
import VideoEmbed from "./VideoEmbed";
export default function Hero() {
  return (
    <section className="relative w-full overflow-x-hidden bg-background">
      <Image
        src="/images/hero-logomark.svg"
        alt=""
        width={824}
        height={540}
        aria-hidden
        className="pointer-events-none absolute right-0 top-[112px] hidden h-auto w-[824px] max-w-none lg:block"
      />
      <GlowCircle className="-top-[450px] -right-[250px]" />      <div className="relative mx-auto flex w-full max-w-[1446px] flex-col gap-[60px] px-[16px] pb-[80px] pt-[40px] lg:gap-[103px] lg:px-[106px] lg:pt-[58px]">
        <Reveal delay={0} duration={500} y={12} immediate>
          <Header />
        </Reveal>
        <div className="flex w-full flex-col-reverse items-start gap-[40px] lg:w-1/2 lg:flex-row lg:gap-[60px]">
       {/* <Reveal
  delay={120}
  duration={700}
  y={20}
  immediate
  // ZMENA: Odstránili sme h-auto a pridali w-full spolu s aspect-video
  className="relative w-full aspect-video shrink-0 overflow-hidden rounded-[30px] bg-navy-panel block"
>
  <VideoEmbed
    libraryId="687317"
    videoId="0d4779a0-76f4-42c5-81ce-70c66f06f332"
    overlay={false}
   
  />
</Reveal> */}
          <div className="flex w-full flex-1 flex-col items-start gap-[30px]">
            <div className="flex w-full flex-col items-start gap-[12px]">
              {/* <h1 className="w-full bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[30px] sm:text-[32px] font-black uppercase leading-normal text-transparent lg:text-[38px]">
                <RevealText
                  immediate
                  lines={["Kompetencia pramení", "z poznania"]}
                  lineClassName="block"
                />
                <span className="block">
                  <RotatingWord className="text-accent-blue" />
                </span>
              </h1> */}
              <Reveal delay={200} duration={500} immediate>
                <p className="w-full font-sans text-[16px] text-white lg:text-[20px] leading-[1.2]">
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
