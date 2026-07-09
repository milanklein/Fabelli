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
import GallerySlider from "@/components/GallerySlider";

const title = "Výcvikové centrum Dobrovodský - prípadová štúdia | Fabelli";
const description =
  "Ako sme psiemu centru Dobrovodský vylepšili Google kampane a dosiahli 27-násobnú návratnosť investície do reklamy.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [{ url: "/thumbnails/thumbnail_dobrovodsky.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/thumbnails/thumbnail_dobrovodsky.png"],
  },
};

const IMG = "/images/case-studies/vycvikove-centrum-dobrovodsky";

const stats = [
  { value: 315, label: "rezervácií" },
  { text: "iba 1600€", label: "do reklamy" },
  { text: "140€", label: "priemerná hodnota zákazníka" },
  { value: 2700, suffix: "%", label: "návratnosť" },
];

const photos = [
  `${IMG}/photo-1.webp`,
  `${IMG}/photo-2.webp`,
  `${IMG}/photo-3.webp`,
  `${IMG}/photo-4.webp`,
];

export default function VycvikoveCentrumDobrovodskyCaseStudyPage() {
  return (
    <>
      <main className="flex flex-1 flex-col bg-background overflow-hidden">
        <section className="relative w-full overflow-x-hidden bg-background">
          <GlowCircle className="-top-[300px] -right-[200px]" />
          <div className="relative mx-auto flex w-full max-w-[1446px] flex-col gap-[40px] px-[24px] pb-[40px] pt-[40px] md:gap-[60px] md:px-[106px] md:pt-[58px]">
            <Header />

            <div className="flex w-full flex-col items-center justify-center md:items-start  gap-[40px] md:flex-row md:gap-[60px]">
              <Reveal
                immediate
                delay={0}
                duration={700}
                y={20}
                className="ww-full shrink-0 md:w-[421px] flex justify-center items-center"
              >
                <video
                  src="/images/webm/DUBROVSKY_LOOP_1080.webm"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="border-white border-[2px] h-[280px] w-[280px] shrink-0 rounded-[30px] object-cover md:h-[421px] md:w-[421px] md:rounded-[51px]"
                />
              </Reveal>
              <div className="flex w-full flex-1 flex-col items-start gap-[30px] md:pt-[51px]">
                <div className="flex w-full flex-col items-start gap-[12px]">
                  <Reveal immediate delay={100} duration={500}>
                    <span className="font-heading text-[18px] font-black uppercase text-purple-from md:text-[24px]">
                      Výcvikové centrum Dobrovodský
                    </span>
                  </Reveal>
                  <h1 className="w-full bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[28px] font-black uppercase leading-normal text-transparent md:text-[38px]">
                    <RevealText>27x návratnosť na Google kampani</RevealText>
                  </h1>
                </div>
                <Reveal immediate delay={250} duration={500}>
                  <ul className="flex w-full list-disc flex-col gap-[16px] pl-[20px] font-sans text-[16px] text-white md:text-[20px]">
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

        <section className="relative w-full px-[24px] md:px-[106px]">
          <div className="relative mx-auto flex w-full max-w-[1048px] flex-col items-center text-center">
            <p
                                 aria-hidden
                                 className="mt-[80px] w-full select-none bg-gradient-to-t from-[#0c1728] via-[#d9ebf8] to-[#f4fafd] bg-clip-text text-center font-heading text-[60px] font-black uppercase leading-none text-transparent opacity-[0.43] md:mt-[89px] md:text-[223px] md:leading-[1.05] sticky top-60 md:top-20" 
                               >
                                   <RevealText variant="fall">
                                 Fáza0
                                   </RevealText>
                               </p>
            <Reveal
              duration={600}
              className="bg-gradient-to-b from-transparent to-[#0C1728] to-10% -mt-[10px] w-full  font-sans text-[16px] text-white md:-mt-[20px] md:text-[20px] leading-[120%] mt-10 "
            >
              <div className="w-full max-w-[621px] mx-auto pt-4 bg-gradient-to-b from-transparent to-[#0C1728] to-10%">

              <p >
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
              </div>
            </Reveal>
          </div>
        </section>

        <section className="relative mt-[64px] w-full px-[24px] md:mt-[100px] md:px-[106px]">
          <GlowCircle className="-left-[300px] top-[100px]" />
          <div className="relative mx-auto flex w-full max-w-[1048px] flex-col items-center gap-[48px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[18px] font-black uppercase text-transparent md:text-[24px]">
              <RevealText>
                Keď sa to spojí so správnym technickým nastavením a novou
                konvertujúcou webstránkou, ktorá na reklamy nadväzuje, tak
                vzniknú takéto výsledky:
              </RevealText>
            </h2>
            <div className="flex w-full flex-wrap items-stretch justify-center gap-[24px] md:gap-[43px]">
              {stats.map((stat, i) => (
                <Reveal
                  key={stat.label}
                  delay={i * 100}
                  duration={500}
                  y={16}
                  className="flex h-[163px] w-full max-w-[353px] flex-col items-center justify-center gap-[12px] rounded-[34px] bg-gradient-to-r from-heading-from/20 to-heading-to/20 px-[24px] text-center"
                >
                  <p className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[24px] font-black uppercase text-transparent md:text-[32px] leading-[120%]">
                    {stat.value !== undefined ? (
                      <>
                        <CountUp value={stat.value} />
                        {stat.suffix}
                      </>
                    ) : (
                      stat.text
                    )}
                  </p>
                  <p className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-sans text-[16px] text-transparent md:text-[20px] leading-[120%]">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal
              duration={700}
              className="relative aspect-[1020/363] w-full max-w-[1020px] overflow-hidden rounded-[24px] md:rounded-[43px]"
            >
              <Image
                src={`${IMG}/results-chart.webp`}
                alt=""
                fill
                className="object-cover"
                sizes="1020px"
              />
            </Reveal>
          </div>
        </section>

        <section className="mt-[64px] w-full md:mt-[100px]">
          <GallerySlider images={photos} />
        </section>

        <CtaBanner />

        <section className="mt-[64px] w-full px-[24px] md:mt-[100px] md:px-[106px]">
          <div className="mx-auto flex w-full max-w-[1234px] flex-col items-center gap-[20px] md:gap-[42px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[22px] font-black uppercase text-transparent md:text-[29px]">
              <RevealText>Ostatné projekty</RevealText>
            </h2>
            <OtherProjectsSlider currentSlug="dobrovodsky" />
          </div>
        </section>

        <Faq />
      </main>
      <Footer />
    </>
  );
}
