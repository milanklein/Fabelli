import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import CountUp from "@/components/CountUp";
import GlowCircle from "@/components/GlowCircle";
import Reveal from "@/components/Reveal";
import RevealText from "@/components/RevealText";
import CtaBanner from "@/components/CtaBanner";
import Faq from "@/components/Faq";
import GallerySlider from "@/components/GallerySlider";
import OtherProjectsSlider from "@/components/OtherProjectsSlider";

export const metadata: Metadata = {
  title: "Sparklond - prípadová štúdia | Fabelli",
  description: "60+ nových absolventov po nečakaom jesennom výpadku",
};

const IMG = "/images/case-studies/sparklond";

const solutionSteps = [
  "na úvod prieskumu som absolvoval kvalitatívne hovory s predošlými absolventmi, ktoré som aj nahral a použil ako videorecenzie v kampani",
  "18 neuro-responzívnych videoreklám v profesionálnej produkcii",
  "kompletne nový pristávací web, ktorý tvorí spolu s reklamami jeden akvizičný celok",
  "9-krokový leadový formulár na kvalifikáciu leadov",
  "CRM a prepracovanie predajného procesu",
];

const stats = [
  { value: 1400, suffix: "+", label: "leadov, ktoré vyplnili komplexný formulár" },
  { value: 10, suffix: "%", label: "konverzný pomer webu" },
  { text: "desiatky", label: "nových absolventov" },
];

const gallery = [
  `${IMG}/gallery-1.png`,
  `${IMG}/gallery-2.png`,
  `${IMG}/gallery-3.png`,
  `${IMG}/gallery-4.png`,
  `${IMG}/gallery-5.png`,
];

function VideoCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative h-[280px] w-[142px] shrink-0 overflow-hidden rounded-[26px] shadow-[0px_0px_43px_0px_rgba(219,236,248,0.59)] sm:h-[553px] sm:w-[280px] sm:rounded-[40px] ${className}`}
    >
      <Image
        src={`${IMG}/gallery-1.png`}
        alt=""
        fill
        className="object-cover"
        sizes="(max-width: 640px) 142px, 280px"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/images/play-icon.png"
          alt=""
          width={88}
          height={88}
          className="size-[44px] sm:size-[64px]"
        />
      </div>
    </div>
  );
}

export default function SparklondCaseStudyPage() {
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
                  src="/images/webm/SPARKLOND_LOOP_1080.webm"
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
                      Sparklond
                    </span>
                  </Reveal>
                  <h1 className="w-full bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[28px] font-black uppercase leading-normal text-transparent sm:text-[38px]">
                    <RevealText>
                      60+ nových absolventov
                      <br />
                      po nečakaom jesennom výpadku
                    </RevealText>
                  </h1>
                </div>
                <Reveal immediate delay={250} duration={500}>
                  <ul className="flex w-full list-disc flex-col gap-[16px] pl-[20px] font-sans text-[16px] text-white sm:text-[20px]">
                    <li>
                      Sparklond je najväčšia zváračská akadémia na Slovensku.
                      Absolventom ponúkajú profesionálne kurzy a následne im aj
                      nájdu prácu v zahraničí.
                    </li>
                    <li>
                      Na jeseň 2025 však mali obrovský výpadok, kedy ich
                      dlhšiu dobu trápili neobsadené miesta na kurzoch.
                    </li>
                  </ul>
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
                Úvodné analýzy a prieskum trhu odhalili, že im prestal
                fungovať zisk zákazníkov cez referencie, na ktorý sa dovtedy
                tak veľmi spoliehali. Mimo toho mali veľmi slabo nastavený
                akvizičný systém cez platené reklamy (nevýkonné reklamy,
                chaotický web, neexistujúci sales systém a CRM)
              </p>
            </Reveal>
          </div>
        </section>

        <section className="relative mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
          <GlowCircle className="-left-[300px] top-[100px]" />
          <div className="relative mx-auto flex w-full max-w-[1048px] flex-col items-center gap-[48px]">
            <div className="flex w-full max-w-[848px] flex-col items-center gap-[20px] text-center">
              <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[20px] font-black uppercase text-transparent sm:text-[24px]">
                <RevealText>
                  Ako riešenie som vytvoril kompletne nový akvizičný systém:
                </RevealText>
              </h2>
              <Reveal delay={100} duration={500}>
                <ul className="flex w-full list-disc flex-col gap-[10px] pl-[20px] text-left font-sans text-[16px] text-white sm:text-[20px]">
                  {solutionSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="relative mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
          <div className="relative mx-auto flex w-full max-w-[1048px] flex-col items-center gap-[60px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[20px] font-black uppercase text-transparent sm:text-[24px]">
              <RevealText>Výsledky na seba nenechali dlho čakať:</RevealText>
            </h2>
            <div className="flex w-full flex-wrap items-center justify-center gap-[24px] sm:gap-[43px]">
              {stats.map((stat, i) => (
                <Reveal
                  key={stat.label}
                  delay={i * 100}
                  duration={500}
                  y={16}
                  className="flex h-[163px] w-full max-w-[353px] flex-col items-center justify-center gap-[12px] rounded-[34px] bg-gradient-to-r from-heading-from/20 to-heading-to/20 px-[24px] text-center"
                >
                  <p className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[24px] font-black uppercase leading-[120%] text-transparent sm:text-[32px]">
                    {stat.value !== undefined ? (
                      <>
                        <CountUp value={stat.value} />
                        {stat.suffix}
                      </>
                    ) : (
                      stat.text
                    )}
                  </p>
                  <p className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-sans text-[16px] leading-[120%] text-transparent sm:text-[20px]">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </div>
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

        <section className="mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
          <div className="mx-auto flex w-full max-w-[1234px] flex-wrap items-center justify-center gap-[16px] sm:gap-[24px]">
            {[0, 1, 2, 3, 4].map((i) => (
              <Reveal key={i} delay={i * 80} duration={500} y={16}>
                <VideoCard className="!h-[180px] !w-[92px] sm:!h-[280px] sm:!w-[142px]" />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-[64px] flex w-full justify-center px-[24px] sm:mt-[100px] sm:px-[106px]">
          <Reveal duration={500}>
            <Button href="/kvalifikacny-formular" size="lg">
              Úvodná strategická konzultácia
            </Button>
          </Reveal>
        </section>

        <section className="mt-[64px] w-full sm:mt-[100px]">
          <GallerySlider images={gallery} />
        </section>

        <CtaBanner />

        <section className="mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
          <div className="mx-auto flex w-full max-w-[1234px] flex-col items-center gap-[42px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[22px] font-black uppercase text-transparent sm:text-[29px]">
              <RevealText>Ostatné projekty</RevealText>
            </h2>
            <OtherProjectsSlider currentSlug="sparklond" />
          </div>
        </section>

        <Faq />
      </main>
      <Footer />
    </>
  );
}
