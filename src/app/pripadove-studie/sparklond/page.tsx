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
import CaseStudyTestimonialsSwiper from "@/components/CaseStudyTestimonialsSwiper";

const title = "Sparklond - prípadová štúdia | Fabelli";
const description =
  "Ako sme najväčšej zváračskej akadémii na Slovensku po jesennom výpadku priniesli 60+ nových absolventov cez nový akvizičný systém a videoreklamy.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [{ url: "/thumbnails/thumbnail_sparklond.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/thumbnails/thumbnail_sparklond.png"],
  },
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

const CN = "/images/campaing_numbers";

const campaignShots = [
  {
    image: `${CN}/campaign-20.jpg`,
    ratio: "aspect-[808/351]",
    caption: "Výkonnosť reklám Sparklond",
  },
  {
    image: `${CN}/campaign-11.jpg`,
    ratio: "aspect-[808/457]",
    caption: "Množstvo reklám, ktoré prinášajú stabilné leady",
  },
  {
    image: `${CN}/campaign-16.jpg`,
    ratio: "aspect-[794/292]",
    caption: "Stovky kvalifikovaných leadov z kampaní pre Sparklond",
  },
  {
    image: `${CN}/campaign-12.jpg`,
    ratio: "aspect-[1243/415]",
    caption: "Prílev kvalifikovaných high-intent leadov pre Sparklond",
  },
  {
    image: `${CN}/campaign-2.jpg`,
    ratio: "aspect-[1231/442]",
    caption: "18% pomer prekliku na Google kampaniach pre Sparklond",
  },
  {
    image: `${CN}/campaign-6.jpg`,
    ratio: "aspect-[504/214]",
    caption: "9,8% konverzný pomer stránky na zisk leadov pre Sparklond",
  },
];

export default function SparklondCaseStudyPage() {
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
                className="w-full shrink-0 md:w-[421px] flex justify-center items-center "
              >
                <video
                  src="/images/webm/SPARKLOND_LOOP_1080.webm"
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
                      Sparklond
                    </span>
                  </Reveal>
                  <h1 className="w-full bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[28px] font-black uppercase leading-normal text-transparent md:text-[38px]">
                    <RevealText>
                      60+ nových absolventov
                      <br />
                      po nečakaom jesennom výpadku
                    </RevealText>
                  </h1>
                </div>
                <Reveal immediate delay={250} duration={500}>
                  <ul className="flex w-full list-disc flex-col gap-[16px] pl-[20px] font-sans text-[16px] text-white md:text-[20px]">
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
              className="bg-gradient-to-b from-transparent to-[#0C1728] to-10% -mt-[10px] w-full  font-sans text-[16px] text-white md:-mt-[20px] md:text-[20px] leading-[120%] mt-10 pt-4"
            >
              <p className="w-full max-w-[621px] mx-auto pt-2">
                Úvodné analýzy a prieskum trhu odhalili, že im prestal
                fungovať zisk zákazníkov cez referencie, na ktorý sa dovtedy
                tak veľmi spoliehali. Mimo toho mali veľmi slabo nastavený
                akvizičný systém cez platené reklamy (nevýkonné reklamy,
                chaotický web, neexistujúci sales systém a CRM)
              </p>
            </Reveal>
          </div>
        </section>

        <section className="relative mt-[64px] w-full px-[24px] md:mt-[100px] md:px-[106px]">
          <GlowCircle className="-left-[300px] top-[100px]" />
          <div className="relative mx-auto flex w-full max-w-[1048px] flex-col items-center gap-[48px]">
            <div className="flex w-full max-w-[848px] flex-col items-center gap-[20px] text-center">
              <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[20px] font-black uppercase text-transparent md:text-[24px]">
                <RevealText>
                  Ako riešenie som vytvoril kompletne nový akvizičný systém:
                </RevealText>
              </h2>
              <Reveal delay={100} duration={500}>
                <ul className="flex w-full list-disc flex-col gap-[10px] pl-[20px] text-left font-sans text-[16px] text-white md:text-[20px]">
                  {solutionSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="relative mt-[64px] w-full px-[24px] md:mt-[100px] md:px-[106px]">
          <div className="relative mx-auto flex w-full max-w-[1048px] flex-col items-center gap-[60px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[20px] font-black uppercase text-transparent md:text-[24px]">
              <RevealText>Výsledky na seba nenechali dlho čakať:</RevealText>
            </h2>
            <div className="flex w-full flex-wrap items-center justify-center gap-[24px] md:gap-[43px]">
              {stats.map((stat, i) => (
                <Reveal
                  key={stat.label}
                  delay={i * 100}
                  duration={500}
                  y={16}
                  className="flex h-[163px] w-full max-w-[353px] flex-col items-center justify-center gap-[12px] rounded-[34px] bg-gradient-to-r from-heading-from/20 to-heading-to/20 px-[24px] text-center"
                >
                  <p className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[24px] font-black uppercase leading-[120%] text-transparent md:text-[32px]">
                    {stat.value !== undefined ? (
                      <>
                        <CountUp value={stat.value} />
                        {stat.suffix}
                      </>
                    ) : (
                      stat.text
                    )}
                  </p>
                  <p className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-sans text-[16px] leading-[120%] text-transparent md:text-[20px]">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-[64px] w-full px-[24px] md:mt-[100px] md:px-[106px]">
          <div className="mx-auto flex w-full max-w-[810px] flex-col items-center gap-[64px] md:gap-[93px]">
            {campaignShots.map((shot, i) => (
              <Reveal
                key={shot.image}
                delay={Math.min(i * 80, 320)}
                duration={600}
                y={20}
                className="flex w-full flex-col items-center gap-[16px]"
              >
                <p className="w-full bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[16px] font-black uppercase text-transparent md:text-[20px]">
                  {shot.caption}
                </p>
                <div
                  className={`relative w-full overflow-hidden rounded-[16px] md:rounded-[24px] ${shot.ratio}`}
                >
                  <Image
                    src={shot.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 810px"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-[64px] w-full px-[24px] md:mt-[100px] md:px-[106px]">
          <CaseStudyTestimonialsSwiper
            videos={[
              { libraryId: "695141", videoId: "af4b6b9d-f6b0-43e6-b246-91bb9116e9b3" },
              { libraryId: "695141", videoId: "f1b32158-5576-4abe-b0a9-3e7b90f800ba" },
            ]}
          />
        </section>


        <section className="mt-[64px] w-full md:mt-[100px]">
          <GallerySlider images={gallery} />
        </section>

        <CtaBanner />

        <section className="mt-[64px] w-full px-[24px] md:mt-[100px] md:px-[106px]">
          <div className="mx-auto flex w-full max-w-[1234px] flex-col items-center gap-[20px] md:gap-[42px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[22px] font-black uppercase text-transparent md:text-[29px]">
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
