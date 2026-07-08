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
  title: "Výcvikové centrum Dobrovodský - prípadová štúdia | Fabelli",
  description: "27x návratnosť na Google kampani",
};

const IMG = "/images/case-studies/vycvikove-centrum-dobrovodsky";

const stats = [
  { value: 315, label: "rezervácií" },
  { text: "iba 1600€", label: "do reklamy" },
  { text: "140€", label: "priemerná hodnota zákazníka" },
  { value: 2700, suffix: "%", label: "návratnosť" },
];

const photos = [
  `${IMG}/photo-1.png`,
  `${IMG}/photo-2.png`,
  `${IMG}/photo-3.png`,
  `${IMG}/photo-4.png`,
];

export default function VycvikoveCentrumDobrovodskyCaseStudyPage() {
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
                  src="/images/webm/DUBROVSKY_LOOP_1080.webm"
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
                      Výcvikové centrum Dobrovodský
                    </span>
                  </Reveal>
                  <h1 className="w-full bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[28px] font-black uppercase leading-normal text-transparent sm:text-[38px]">
                    <RevealText>27x návratnosť na Google kampani</RevealText>
                  </h1>
                </div>
                <Reveal immediate delay={250} duration={500}>
                  <ul className="flex w-full list-disc flex-col gap-[16px] pl-[20px] font-sans text-[16px] text-white sm:text-[20px]">
                    <li>
                      Psie centrum Dobrovodský poskytuje okrem iného aj
                      služby ubytovania psov v psiom hoteli.
                    </li>
                    <li>
                      Kampaň už &bdquo;nejako&ldquo; nastavenú v minulosti
                      mali, no chceli lepšie výsledky.
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
              className="-mt-[10px] flex w-full max-w-[642px] flex-col gap-[16px] font-sans text-[16px] text-white sm:-mt-[20px] sm:text-[20px] leading-[120%]"
            >
              <p>
                V hĺbkovom psychoanalytickom prieskume cieľovky som našiel 6
                bodov, podľa ktorých sa ľudia rozhodujú pre psí hotel.
                Zároveň som zistil, že ich web stránka nebola pripravená na
                novú kampaň (veľa textu, dizajn z 2010 a problémy so
                zobrazovaním na telefóne)
              </p>
              <p>
                Mať psychologický zanalyzovanú cieľovú skupinu a vedieť ako
                s nimi komunikovať je obzvlášť dôležité pri Google
                reklamách. Pretože tam je za konverzie často zodpovedný iba
                text.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="relative mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
          <GlowCircle className="-left-[300px] top-[100px]" />
          <div className="relative mx-auto flex w-full max-w-[1048px] flex-col items-center gap-[48px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[18px] font-black uppercase text-transparent sm:text-[24px]">
              <RevealText>
                Keď sa to spojí so správnym technickým nastavením a novou
                konvertujúcou webstránkou, ktorá na reklamy nadväzuje, tak
                vzniknú takéto výsledky:
              </RevealText>
            </h2>
            <div className="flex w-full flex-wrap items-stretch justify-center gap-[24px] sm:gap-[43px]">
              {stats.map((stat, i) => (
                <Reveal
                  key={stat.label}
                  delay={i * 100}
                  duration={500}
                  y={16}
                  className="flex h-[163px] w-full max-w-[353px] flex-col items-center justify-center gap-[12px] rounded-[34px] bg-gradient-to-r from-heading-from/20 to-heading-to/20 px-[24px] text-center"
                >
                  <p className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[24px] font-black uppercase text-transparent sm:text-[32px] leading-[120%]">
                    {stat.value !== undefined ? (
                      <>
                        <CountUp value={stat.value} />
                        {stat.suffix}
                      </>
                    ) : (
                      stat.text
                    )}
                  </p>
                  <p className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-sans text-[16px] text-transparent sm:text-[20px] leading-[120%]">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal
              duration={700}
              className="relative aspect-[1020/363] w-full max-w-[1020px] overflow-hidden rounded-[24px] sm:rounded-[43px]"
            >
              <Image
                src={`${IMG}/results-chart.png`}
                alt=""
                fill
                className="object-cover"
                sizes="1020px"
              />
            </Reveal>
          </div>
        </section>

        <section className="mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
          <div className="mx-auto flex w-full max-w-[1234px] flex-wrap items-center justify-center gap-[16px] sm:gap-[24px]">
            {photos.map((src, i) => (
              <Reveal key={src} delay={i * 80} duration={600} y={20}>
                <div className="relative h-[280px] w-[142px] shrink-0 overflow-hidden rounded-[26px] shadow-[0px_0px_43px_0px_rgba(219,236,248,0.59)] sm:h-[553px] sm:w-[280px] sm:rounded-[40px]">
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 142px, 280px"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <CtaBanner />

        <section className="mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
          <div className="mx-auto flex w-full max-w-[1234px] flex-col items-center gap-[42px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[22px] font-black uppercase text-transparent sm:text-[29px]">
              <RevealText>Ostatné projekty</RevealText>
            </h2>
            <OtherProjectsSlider currentSlug="vycvikove-centrum-dobrovodsky" />
          </div>
        </section>

        <Faq />
      </main>
      <Footer />
    </>
  );
}
