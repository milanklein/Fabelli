import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CountUp from "@/components/CountUp";
import GlowCircle from "@/components/GlowCircle";
import Reveal from "@/components/Reveal";
import RevealText from "@/components/RevealText";
import CtaBanner from "@/components/CtaBanner";
import Faq from "@/components/Faq";
import OtherProjectsSlider from "@/components/OtherProjectsSlider";

export const metadata: Metadata = {
  title: "Apponio - prípadová štúdia | Fabelli",
  description:
    "110+ nových registrácií pre klienta, ktorý predtým reklamami len pálil peniaze",
};

const IMG = "/images/case-studies/apponio";

const problems = [
  "Nevedeli, čo v reklamách povedať a ako vystihnúť to, čím sú unikátni",
  "Nemali možnosti tvoriť reklamy v profesionálnej produkcii",
  "Nedokázali vytvoriť komplexný funnel, ktorý by zákazníka previedol od nepoznania ich firmy až po registráciu",
];

const funnelStats = [
  {
    value: "4",
    label: "videoreklamy s presne pripraveným scenárom v profesionálnej produkcii",
  },
  { value: "neuro", label: "tvorba neuro-responzívneho textu na pristávaciu stránku" },
  { value: "meta", label: "nastavenie platených reklám na platforme Meta" },
];

function VideoCard() {
  return (
    <div className="relative h-[280px] w-[142px] shrink-0 overflow-hidden rounded-[26px] shadow-[0px_0px_43px_0px_rgba(219,236,248,0.59)] sm:h-[553px] sm:w-[280px] sm:rounded-[40px]">
      <Image
        src={`${IMG}/video-thumb.png`}
        alt=""
        fill
        className="object-cover"
        sizes="(max-width: 640px) 142px, 280px"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={`${IMG}/play-icon.png`}
          alt=""
          width={88}
          height={88}
          className="size-[44px] sm:size-[64px]"
        />
      </div>
    </div>
  );
}

export default function ApponioCaseStudyPage() {
  return (
    <>
      <main className="flex flex-1 flex-col bg-background">
        <section className="relative w-full overflow-x-hidden bg-background">
          <GlowCircle className="-top-[300px] -right-[200px]" />
          <div className="relative mx-auto flex w-full max-w-[1446px] flex-col gap-[40px] px-[24px] pb-[40px] pt-[40px] sm:gap-[60px] sm:px-[106px] sm:pt-[58px]">
            <Header />

            <div className="flex w-full flex-col items-start gap-[40px] sm:flex-row sm:gap-[60px]">
              <Reveal
                immediate
                delay={0}
                duration={700}
                y={20}
                className="w-full shrink-0 sm:w-[357px]"
              >
                <video
                  src="/images/webm/APPONIO_LOOP_1080.webm"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-[280px] w-full rounded-[30px] object-cover sm:h-[421px] sm:w-[357px] sm:rounded-[51px]"
                />
              </Reveal>
              <div className="flex w-full flex-1 flex-col items-start gap-[30px] sm:pt-[51px]">
                <div className="flex w-full flex-col items-start gap-[12px]">
                  <Reveal immediate delay={100} duration={500}>
                    <span className="font-heading text-[18px] font-black uppercase text-purple-from sm:text-[24px]">
                      Apponio
                    </span>
                  </Reveal>
                  <h1 className="w-full bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[24px] font-black uppercase leading-normal text-transparent sm:text-[32px]">
                    <RevealText>
                      110+ nových registrácií pre klienta, ktorý predtým
                      reklamami len pálil peniaze
                    </RevealText>
                  </h1>
                </div>
                <Reveal immediate delay={250} duration={500}>
                  <div className="flex w-full flex-col gap-[16px] font-sans text-[16px] text-white sm:text-[20px]">
                    <p>
                      Apponio ako jediné na trhu ponúka firmám v službách
                      rezervačný systém a web v jednom.
                    </p>
                    <p>
                      Pred spoluprácou so mnou sa častokrát snažili spustiť
                      kampane a pritiahnuť na seba viac očí. No stretávali
                      sa s týmito problémami:
                    </p>
                    <ul className="flex list-disc flex-col gap-[10px] pl-[20px]">
                      {problems.map((problem) => (
                        <li key={problem}>{problem}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full px-[24px] sm:px-[106px]">
          <div className="relative mx-auto flex w-full max-w-[1048px] flex-col items-center text-center">
            <p
              aria-hidden
              className="mt-[40px] w-full select-none bg-gradient-to-t from-[#0c1728] via-[#d9ebf8] to-[#f4fafd] bg-clip-text text-center font-heading text-[76px] font-black uppercase leading-none text-transparent opacity-[0.43] sm:mt-[89px] sm:text-[223px] sm:leading-[1.05]"
            >
              Fáza 0
            </p>
            <Reveal
              duration={600}
              className="-mt-[10px] w-full max-w-[642px] font-sans text-[16px] text-white sm:-mt-[20px] sm:text-[20px] leading-[120%]"
            >
              <p>
                Počas dlhej úvodnej prieskumovej fázy som odhalil 7
                špecifických bodov, ktorými sa Apponio líši od konkurencie.
                Nájdete ich aj aplikované priamo v reklame nižšie.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="relative mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
          <GlowCircle className="-left-[300px] top-[100px]" />
          <div className="relative mx-auto flex w-full max-w-[1048px] flex-col items-center gap-[27px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[18px] font-black uppercase text-transparent sm:text-[24px]">
              <RevealText>
                Tieto body som následne komunikoval v celom funneli:
              </RevealText>
            </h2>
            <div className="flex w-full flex-wrap items-stretch justify-center gap-[24px] sm:gap-[43px]">
              {funnelStats.map((stat, i) => (
                <Reveal
                  key={stat.value}
                  delay={i * 100}
                  duration={500}
                  y={16}
                  className="flex h-[163px] w-full max-w-[353px] flex-col items-center justify-center gap-[12px] rounded-[34px] bg-gradient-to-r from-heading-from/20 to-heading-to/20 px-[24px] text-center"
                >
                  <p className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[24px] font-black uppercase text-transparent sm:text-[32px] leading-[120%]">
                    {stat.value}
                  </p>
                  <p className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-sans text-[16px] text-transparent sm:text-[20px] leading-[120%]">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
          <div className="mx-auto flex w-full max-w-[1048px] flex-col items-center gap-[27px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[18px] font-black uppercase text-transparent sm:text-[24px]">
              <RevealText>A výsledok?</RevealText>
            </h2>
            <Reveal
              duration={500}
              y={16}
              className="flex h-[163px] w-full max-w-[353px] flex-col items-center justify-center gap-[12px] rounded-[34px] bg-gradient-to-r from-heading-from/20 to-heading-to/20 px-[24px] text-center"
            >
              <p className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[24px] font-black uppercase text-transparent sm:text-[32px] leading-[120%]">
                <CountUp value={120} />
              </p>
              <p className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-sans text-[16px] text-transparent sm:text-[20px] leading-[120%]">
                nových zákazníkov
              </p>
            </Reveal>
          </div>
        </section>

        <section className="mt-[64px] flex w-full justify-center px-[24px] sm:mt-[100px] sm:px-[106px]">
          <Reveal
            duration={700}
            className="relative aspect-[622/457] w-full max-w-[622px] overflow-hidden rounded-[24px] sm:rounded-[39px]"
          >
            <Image
              src={`${IMG}/funnel-screenshot.png`}
              alt=""
              fill
              className="object-cover"
              sizes="622px"
            />
          </Reveal>
        </section>

        <section className="mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
          <div className="mx-auto flex w-full max-w-[952px] flex-col items-center gap-[40px] sm:flex-row sm:items-center sm:justify-center sm:gap-[71px]">
            <Reveal duration={600} y={20}>
              <VideoCard />
            </Reveal>
            <Reveal delay={150} duration={600} y={20}>
              <div className="flex w-full max-w-[310px] flex-col items-center gap-[24px] text-center">
                <p className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-sans text-[22px] text-transparent sm:text-[35px] leading-[120%]">
                  &bdquo;Nikomu nezáležalo <br /> na projekte viac ako
                  Fabiánovi.&ldquo;
                </p>
                <p className="bg-gradient-to-r from-purple-from to-purple-to bg-clip-text font-sans text-[16px] font-bold uppercase italic text-transparent">
                  -Jovinečko
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
          <div className="mx-auto flex w-full max-w-[952px] items-center justify-center gap-[16px] sm:gap-[54px]">
            <Reveal delay={0} duration={600} y={20}>
              <VideoCard />
            </Reveal>
            <Reveal delay={150} duration={600} y={20}>
              <VideoCard />
            </Reveal>
          </div>
        </section>

        <CtaBanner />

        <section className="mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
          <div className="mx-auto flex w-full max-w-[1234px] flex-col items-center gap-[42px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[22px] font-black uppercase text-transparent sm:text-[29px]">
              <RevealText>Ostatné projekty</RevealText>
            </h2>
            <OtherProjectsSlider currentSlug="apponio" />
          </div>
        </section>

        <Faq />
      </main>
      <Footer />
    </>
  );
}
