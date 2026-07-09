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
import CaseStudyTestimonialsSwiper from "@/components/CaseStudyTestimonialsSwiper";

const title = "Apponio - prípadová štúdia | Fabelli";
const description =
  "Ako sme klientovi Apponio, ktorý predtým reklamami len pálil peniaze, priniesli cez nový funnel a videoreklamy 110+ nových registrácií.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [{ url: "/thumbnails/thumbnail_apponio.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/thumbnails/thumbnail_apponio.png"],
  },
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

export default function ApponioCaseStudyPage() {
  return (
    <>
      <main className="flex flex-1 flex-col bg-background">
        <section className="relative w-full overflow-x-hidden bg-background">
          <GlowCircle className="-top-[300px] -right-[200px]" />
          <div className="relative mx-auto flex w-full max-w-[1446px] flex-col gap-[40px] px-[24px] pb-[40px] pt-[40px] md:gap-[60px] md:px-[106px] md:pt-[58px]">
            <Header />

            <div className="flex w-full flex-col items-center justify-center md:items-start  gap-[40px] md:flex-row md:gap-[60px] ">
              <Reveal
                immediate
                delay={0}
                duration={700}
                y={20}
                className="w-full shrink-0 md:w-[421px] flex justify-center items-center"
              >
                <video
                  src="/images/webm/APPONIO_LOOP_1080.webm"
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
                      Apponio
                    </span>
                  </Reveal>
                  <h1 className="w-full bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[24px] font-black uppercase leading-normal text-transparent md:text-[32px]">
                    <RevealText>
                      110+ nových registrácií pre klienta, ktorý predtým
                      reklamami len pálil peniaze
                    </RevealText>
                  </h1>
                </div>
                <Reveal immediate delay={250} duration={500}>
                  <div className="flex w-full flex-col gap-[16px] font-sans text-[16px] text-white md:text-[20px]">
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

        <section className="relative w-full px-[24px] md:px-[106px]">
          <div className="relative mx-auto flex w-full max-w-[1048px] flex-col items-center text-center">
             <p
                                 aria-hidden
                                 className="mt-[80px] w-full select-none bg-gradient-to-t from-[#0c1728] via-[#d9ebf8] to-[#f4fafd] bg-clip-text text-center font-heading text-[76px] font-black uppercase leading-none text-transparent opacity-[0.43] md:mt-[89px] md:text-[223px] md:leading-[1.05] sticky top-60 md:top-20" 
                               >
                                   <RevealText variant="fall">
                                 Fáza0
                                   </RevealText>
                               </p>
            <Reveal
              duration={600}
              className="bg-gradient-to-b from-transparent to-[#0C1728] to-10% -mt-[10px] w-full  font-sans text-[16px] text-white md:-mt-[20px] md:text-[20px] leading-[120%] mt-10"
            >
              <p className="w-full max-w-[621px] mx-auto pt-2 bg-gradient-to-b from-transparent to-[#0C1728] to-10%" >
                Počas dlhej úvodnej prieskumovej fázy som odhalil 7
                špecifických bodov, ktorými sa Apponio líši od konkurencie.
                Nájdete ich aj aplikované priamo v reklame nižšie.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="relative mt-[64px] w-full px-[24px] md:mt-[100px] md:px-[106px]">
          <GlowCircle className="-left-[300px] top-[100px]" />
          <div className="relative mx-auto flex w-full max-w-[1048px] flex-col items-center gap-[27px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[18px] font-black uppercase text-transparent md:text-[24px]">
              <RevealText>
                Tieto body som následne komunikoval v celom funneli:
              </RevealText>
            </h2>
            <div className="flex w-full flex-wrap items-stretch justify-center gap-[24px] md:gap-[43px]">
              {funnelStats.map((stat, i) => (
                <Reveal
                  key={stat.value}
                  delay={i * 100}
                  duration={500}
                  y={16}
                  className="flex h-[163px] w-full max-w-[353px] flex-col items-center justify-center gap-[12px] rounded-[34px] bg-gradient-to-r from-heading-from/20 to-heading-to/20 px-[24px] text-center"
                >
                  <p className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[24px] font-black uppercase text-transparent md:text-[32px] leading-[120%]">
                    {stat.value}
                  </p>
                  <p className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-sans text-[16px] text-transparent md:text-[20px] leading-[120%]">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-[64px] w-full px-[24px] md:mt-[100px] md:px-[106px]">
          <div className="mx-auto flex w-full max-w-[1048px] flex-col items-center gap-[27px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[18px] font-black uppercase text-transparent md:text-[24px]">
              <RevealText>A výsledok?</RevealText>
            </h2>
            <Reveal
              duration={500}
              y={16}
              className="flex h-[163px] w-full max-w-[353px] flex-col items-center justify-center gap-[12px] rounded-[34px] bg-gradient-to-r from-heading-from/20 to-heading-to/20 px-[24px] text-center"
            >
              <p className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[24px] font-black uppercase text-transparent md:text-[32px] leading-[120%]">
                <CountUp value={120} />
              </p>
              <p className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-sans text-[16px] text-transparent md:text-[20px] leading-[120%]">
                nových zákazníkov
              </p>
            </Reveal>
          </div>
        </section>

        <section className="mt-[64px] flex w-full justify-center px-[24px] md:mt-[100px] md:px-[106px]">
          <Reveal
            duration={700}
            className="relative aspect-[622/457] w-full max-w-[622px] overflow-hidden rounded-[24px] md:rounded-[39px]"
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

     

        <section className="mt-[64px] w-full px-[24px] md:mt-[100px] md:px-[106px]">
          <CaseStudyTestimonialsSwiper
            videos={[
              { libraryId: "695141", videoId: "8328df57-a90b-44c6-b7a2-3e81efbb09f1" },
              { libraryId: "695141", videoId: "6dd0e174-9ae6-4786-9610-ebd4f925d484" },
            ]}
          />
        </section>

        <CtaBanner />

        <section className="mt-[64px] w-full px-[24px] md:mt-[100px] md:px-[106px]">
          <div className="mx-auto flex w-full max-w-[1234px] flex-col items-center gap-[42px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[22px] font-black uppercase text-transparent md:text-[29px]">
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
