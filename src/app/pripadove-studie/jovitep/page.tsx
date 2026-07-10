import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import CountUp from "@/components/CountUp";
import GlowCircle from "@/components/GlowCircle";
import Reveal from "@/components/Reveal";
import RevealText from "@/components/RevealText";
import CtaBanner from "@/components/CtaBanner";
import Faq from "@/components/Faq";
import OtherProjectsSlider from "@/components/OtherProjectsSlider";
import CaseStudyTestimonialsSwiper from "@/components/CaseStudyTestimonialsSwiper";
import VideoEmbed from "@/components/VideoEmbed";

const title = "Vypínanie reklám, lebo toho bolo už moc veľa";
const description =
  "Kompetencia na dosahovanie výsledkov pramení z poznania trhu";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [{ url: "/thumbnails/thumbnail_jovitep.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/thumbnails/thumbnail_jovitep.png"],
  },
};

const stats = [
  { value: 647, label: "vyplnení formuláru, čiže leadov" },
  {
    value: 2,
    suffix: "x",
    label: "predčasné vypínanie kampaní, lebo chlapci z Jovitepu už nestíhali",
  },
  { text: "naberanie", label: "nových zamestnancov do tímu" },
];

function TestimonialVideo({
  videoId,
  libraryId = "695141",
}: {
  videoId: string;
  libraryId?: string;
}) {
  return (
    <div className="relative  shrink-0 overflow-hidden rounded-[26px] shadow-[0px_0px_43px_0px_rgba(219,236,248,0.59)] h-[553px] w-[280px] sm:rounded-[40px]">
      <VideoEmbed libraryId={libraryId} videoId={videoId} />
    </div>
  );
}

export default function JovitepCaseStudyPage() {
  return (
    <>
      <main className="flex flex-1 flex-col bg-background overflow-hidden">
        <section className="relative w-full overflow-x-hidden bg-background">
          <GlowCircle className="-top-[300px] -right-[200px]" />
          <div className="relative mx-auto flex w-full max-w-[1446px] flex-col gap-[40px] px-[24px] pb-[40px] pt-[40px] sm:gap-[60px] sm:px-[106px] sm:pt-[58px]">
            <Header />

            <div className="flex w-full flex-col items-center justify-center md:items-start  gap-[40px] sm:flex-row sm:gap-[60px]">
              <Reveal
                immediate
                delay={0}
                duration={700}
                y={20}
                className="w-full shrink-0 sm:w-[421px] flex justify-center items-center"
              >
                <video
                  src="/images/webm/JOVITEP_HERO_LOOP_1080.webm"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="border-white border-[2px] h-[280px] w-[280px] shrink-0 rounded-[30px] object-cover md:h-[421px] md:w-[421px] sm:rounded-[51px]"
                />
              </Reveal>
              <div className="flex w-full flex-1 flex-col items-start gap-[30px] sm:pt-[51px]">
                <div className="flex w-full flex-col items-start gap-[12px]">
                  <Reveal immediate delay={100} duration={500}>
                    <span className="font-heading text-[18px] font-black uppercase text-purple-from sm:text-[24px]">
                      Jovitep
                    </span>
                  </Reveal>
                  <h1 className="w-full bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[28px] font-black uppercase leading-normal text-transparent sm:text-[38px]">
                    <RevealText>
                      Vypínanie reklám, lebo toho
                      <br />
                      bolo už moc veľa
                    </RevealText>
                  </h1>
                </div>
                <Reveal immediate delay={250} duration={500}>
                  <ul className="flex w-full list-disc flex-col gap-[16px] pl-[20px] font-sans text-[16px] text-white sm:text-[20px]">
                    <li>
                      Jovitep je firma influencera Filipa Jovanoviča, ktorá
                      poskytuje čistiace služby v Bratislave a Košiciach.
                    </li>
                    <li>
                      Práve sa blížila jarná sezóna a Filip ma oslovil s tým,
                      že by potreboval nakopnúť počet zákazok.
                    </li>
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full px-4 sm:px-[106px]">
          <div className="relative mx-auto flex w-full max-w-[1048px] flex-col items-center text-center">
            <p
              aria-hidden
              className="mt-[80px] w-full select-none bg-gradient-to-t from-[#0c1728] via-[#d9ebf8] to-[#f4fafd] bg-clip-text text-center font-heading text-[60px] font-black uppercase leading-none text-transparent opacity-[0.43] sm:mt-[89px] sm:text-[223px] sm:leading-[1.05] sticky top-60 md:top-20"
            >
         Fáza0
            </p>
            <div className="bg-gradient-to-b from-transparent to-[#0C1728] to-10% w-full flex flex-col justify-center items-center ">
              
            <Reveal
              duration={600}
              className="-mt-[10px] w-full max-w-[621px] bg-gradient-to-b from-transparent to-[#0C1728] to-10% font-sans text-[16px] leading-[120%] text-white sm:-mt-[20px] sm:text-[20px] pt-4"
              >
              <p>
                Úvodný prieskum trhu mi dal jasno v tom, podľa akých kritérií
                sa budú jednotlivé subsegmenty (mamičky, páry bez detí, starí
                mládenci,...) cieľovej skupiny rozhodovať a ako ich
                presvedčím, aby si vybrali práve Jovitep.
              </p>
            </Reveal>
              </div>
          </div>
        </section>

        <section className="relative mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
          <GlowCircle className="-left-[300px] top-[100px]" />
          <div className="relative mx-auto flex w-full max-w-[1048px] flex-col items-center gap-[48px]">
            <div className="flex w-full max-w-[848px] flex-col items-center gap-[20px] text-center">
              <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[20px] font-black uppercase text-transparent sm:text-[24px]">
                <RevealText>
                  Ako riešenie som vytvoril funnel cez platené reklamy na
                  sociálnych sieťach a vyplnenie kontaktného formuláru.
                  Pripravil som:
                </RevealText>
              </h2>
              <Reveal delay={100} duration={500}>
                <ul className="flex w-full list-disc flex-col gap-[10px] pl-[20px] text-left font-sans text-[16px] text-white sm:text-[20px]">
                  <li>
                    7 reklám s presným neuro-response scenárom v profesionálnej
                    produkcii
                  </li>
                  <li>nastavenie reklám v Meta reklamnom účte</li>
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="relative mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
          <div className="relative mx-auto flex w-full max-w-[1048px] flex-col items-center gap-[60px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[20px] font-black uppercase text-transparent sm:text-[24px]">
              <RevealText>Výsledkami bolo:</RevealText>
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

        <section className="mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px] ">
          <CaseStudyTestimonialsSwiper
            videos={[
              { libraryId: "695141", videoId: "956e19b9-9ab3-4fbc-b36a-f1683de5ac98" },
              { libraryId: "695141", videoId: "7225b4f4-8ff6-44bb-ad00-623be63988b0" },
              { libraryId: "695141", videoId: "5ffaebfa-0bae-4b67-98fd-9c713c07109a" },
            ]}
          />
        </section>

        <section className="mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
          <div className="mx-auto flex w-full max-w-[952px] flex-col items-center gap-[40px] sm:flex-row sm:items-center sm:justify-center sm:gap-[71px]">
            <Reveal duration={600} y={20}>
               <TestimonialVideo
                libraryId="695134"
                videoId="4ab0e6f9-81f1-4eb3-afa6-8ae3a6ffbbd9"
              />
            </Reveal>
            <Reveal delay={150} duration={600} y={20}>
              <div className="flex w-full max-w-[310px] flex-col items-center gap-[24px] text-center">
                <p className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-sans text-[22px] leading-[120%] text-transparent sm:text-[35px]">
                  &bdquo;Nikomu nezáležalo na projekte viac ako
                  Fabiánovi.&ldquo;
                </p>
                <p className="bg-gradient-to-r from-purple-from to-purple-to bg-clip-text font-sans text-[16px] font-bold uppercase italic text-transparent">
                  -Jovinečko
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        

        <CtaBanner />

        <section className="mt-[64px] w-full px-0 sm:mt-[100px] sm:px-[106px]">
          <div className="mx-auto flex w-full max-w-[1234px] flex-col items-center gap-[20px] md:gap-[42px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[22px] font-black uppercase text-transparent sm:text-[29px]">
              <RevealText>Ostatné projekty</RevealText>
            </h2>
            <OtherProjectsSlider currentSlug="jovitep" />
          </div>
        </section>

        <Faq />
      </main>
      <Footer />
    </>
  );
}
