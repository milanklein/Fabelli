import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import GlowCircle from "@/components/GlowCircle";
import Reveal from "@/components/Reveal";
import RevealText from "@/components/RevealText";
import CtaBanner from "@/components/CtaBanner";
import Faq from "@/components/Faq";
import GallerySlider from "@/components/GallerySlider";
import OtherProjectsSlider from "@/components/OtherProjectsSlider";
import CaseStudyTestimonialsSwiper from "@/components/CaseStudyTestimonialsSwiper";

const title = "Offlandia - prípadová štúdia | Fabelli";
const description =
  "Ako sme súkromnej škôlke Offlandia v Ružinove zdvihli obsadenosť zo 14 % a pripravili ju na otvorenie novej prevádzky s dvojnásobnou kapacitou.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [{ url: "/thumbnails/thumbnail_offlandia.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/thumbnails/thumbnail_offlandia.png"],
  },
};

const IMG = "/images/case-studies/offlandia";

const beforeShots = [
  `${IMG}/top-1.png`,
  `${IMG}/top-2.png`,
  `${IMG}/top-3.png`,
  `${IMG}/top-4.png`,
  `${IMG}/top-5.png`,
];

const campaignTop = [
  `${IMG}/campaign-1.png`,
  `${IMG}/campaign-2.png`,
  `${IMG}/campaign-3.png`,
];
const campaignBottom = [`${IMG}/campaign-4.png`, `${IMG}/campaign-5.png`];

const gallery = [
  `${IMG}/gallery-1.png`,
  `${IMG}/gallery-2.png`,
  `${IMG}/gallery-3.png`,
  `${IMG}/gallery-4.png`,
  `${IMG}/gallery-5.png`,
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
      <iframe
        src={`https://player.mediadelivery.net/embed/${libraryId}/${videoId}?autoplay=false&loop=false&muted=false&preload=true&responsive=true`}
        loading="lazy"
        className="absolute inset-0 h-full w-full border-0"
        allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen;"
        allowFullScreen
      />
    </div>
  );
}

export default function OfflandiaCaseStudyPage() {
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
                  src="/images/webm/OFFLANDIA_LOOP_1080.webm"
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
                      Offlandia
                    </span>
                  </Reveal>
                  <h1 className="w-full bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[28px] font-black uppercase leading-normal text-transparent sm:text-[38px]">
                    <RevealText>
                      Otváranie novej prevádzky
                      <br />
                      s 2-násobnou kapacitou
                    </RevealText>
                  </h1>
                </div>
                <Reveal immediate delay={250} duration={500}>
                  <ul className="flex w-full list-disc flex-col gap-[16px] pl-[20px] font-sans text-[16px] text-white sm:text-[20px]">
                    <li>Offlandia je súkromná materská škola v Ružinove.</li>
                    <li>
                      V novembri 2024 mali kapacitu naplnenú len na 14% a
                      rozmýšľali nad tým, či sa im vôbec oplatí pokračovať.
                    </li>
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-[64px] w-full  sm:mt-[100px] ">
          <div className="mx-auto flex w-full  flex-col items-center gap-[48px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[18px] font-black uppercase text-transparent sm:text-[24px] max-w-[1048px] px-[24px]">
              <RevealText>
                Mali, zhliadnutia, lajky, sledovateľov, kontent, peknú
                webstránku
              </RevealText>
            </h2>
            <GallerySlider images={beforeShots} />
            <Reveal duration={500}>
              <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[18px] font-black uppercase text-transparent sm:text-[24px]">
                No nemali výsledky!
              </h2>
            </Reveal>
          </div>
        </section>

        <section className="relative w-full px-[24px] sm:px-[106px]">
          <div className="relative mx-auto flex w-full max-w-[1048px] flex-col items-center text-center">
            <p
              aria-hidden
              className="mt-[80px] w-full select-none bg-gradient-to-t from-[#0c1728] via-[#d9ebf8] to-[#f4fafd] bg-clip-text text-center font-heading text-[60px] font-black uppercase leading-none text-transparent opacity-[0.43] sm:mt-[89px] sm:text-[223px] sm:leading-[1.05] sticky top-60 md:top-20"
            >
              Fáza 0
            </p>
            <Reveal
              duration={600}
              className="bg-gradient-to-b from-transparent to-[#0C1728] to-10%  -mt-[10px] w-full font-sans text-[16px] text-white sm:-mt-[20px] sm:text-[20px] leading-[120%] flex flex-col justify-center items-center pt-4"
            >
          
             
              <p className=" w-full max-w-[642px] font-extrabold text-left">
                Po analýze trhu a cieľovej skupiny som zistil, že:
              </p>
              <ul className="flex list-disc flex-col gap-[8px] pl-[30px] pt-[8px] text-left">
                <li>ich obsah nezasahoval emočne silné body rodičov</li>
                <li>Offlandia sa obsahom neodlišovala od konkurencie</li>
                <li>
                  kontent mal zhliadnutia, no videli ho hlavne irelevantní
                  ľudia
                </li>
              </ul>
     
            </Reveal>
          </div>
        </section>


        <section className="relative mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
          <GlowCircle className="-left-[300px] top-[100px]" />
          <div className="relative mx-auto flex w-full max-w-[1048px] flex-col items-center gap-[48px]">
            <div className="flex w-full max-w-[760px] flex-col items-center gap-[10px] text-center">
              <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[18px] font-black uppercase text-transparent sm:text-[24px]">
                <RevealText>Mojím riešením bola 2-fázová kampaň</RevealText>
              </h2>
              <p className="font-sans text-[16px] text-white sm:text-[20px]">
                (&bdquo;optimalizácia a edukácia&ldquo; + &bdquo;predajná
                kampaň&ldquo;)
              </p>
            </div>

            <div className="flex w-full max-w-[900px] flex-col gap-[16px] sm:gap-[20px]">
              <div className="flex w-full gap-[16px] sm:gap-[20px]">
                {campaignTop.map((src, i) => (
                  <Reveal
                    key={src}
                    delay={i * 100}
                    duration={500}
                    y={16}
                    className="relative aspect-[357/344] flex-1 overflow-hidden rounded-[20px]"
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="300px"
                    />
                  </Reveal>
                ))}
              </div>
              <div className="flex w-full gap-[16px] sm:gap-[20px]">
                {campaignBottom.map((src, i) => (
                  <Reveal
                    key={src}
                    delay={300 + i * 100}
                    duration={500}
                    y={16}
                    className="relative aspect-[546/223] flex-1 overflow-hidden rounded-[20px]"
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="450px"
                    />
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal
              delay={200}
              duration={600}
              className="w-full max-w-[760px] text-center font-sans text-[16px] text-white sm:text-[20px]"
            >
              <p>
                Kapacitu Offlandie som do apríla 2025 naplnil na 100%, čo
                priviedlo súrodencov Jovanovičových (majiteľov škôlky) k{" "}
                <span className="font-bold">
                  expanzii a otváraniu novej prevádzky s 2-násobnou kapacitou
                </span>
              </p>
            </Reveal>
          </div>
        </section>

        <section className="mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
          <div className="mx-auto flex w-full max-w-[1234px] flex-col items-center gap-[40px] sm:gap-[60px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[18px] font-black uppercase text-transparent sm:text-[24px]">
              <RevealText>
                Za 12 mesiacov prešli od prežívania k expanzii!
              </RevealText>
            </h2>
            <div className="flex w-full items-start justify-center gap-[12px] sm:gap-[18px]">
              <Reveal
                delay={0}
                duration={600}
                className="relative aspect-[383/249] w-full max-w-[280px] overflow-hidden rounded-[24px] sm:max-w-[383px]"
              >
                <Image
                  src={`${IMG}/expansion-1.png`}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="383px"
                />
              </Reveal>
              <Reveal
                delay={100}
                duration={600}
                className="relative aspect-[415/358] w-full max-w-[300px] overflow-hidden rounded-[24px] sm:max-w-[415px]"
              >
                <Image
                  src={`${IMG}/expansion-2.png`}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="415px"
                />
              </Reveal>
              <Reveal
                delay={200}
                duration={600}
                className="relative aspect-[383/249] w-full max-w-[280px] overflow-hidden rounded-[24px] sm:max-w-[383px]"
              >
                <Image
                  src={`${IMG}/expansion-3.png`}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="383px"
                />
              </Reveal>
            </div>
          </div>
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

        <section className="mt-[64px] flex w-full justify-center px-[24px] sm:mt-[100px] sm:px-[106px]">
          <Reveal duration={500}>
            <Button href="/kvalifikacny-formular" size="lg">
              Úvodná strategická konzultácia
            </Button>
          </Reveal>
        </section>

        <section className="mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
          <CaseStudyTestimonialsSwiper
            videos={[
              { libraryId: "695141", videoId: "fd56198e-bba8-45ba-a886-8cfa8006b971" },
              { libraryId: "695141", videoId: "a2009728-adc8-427a-8602-c768b907e9f9" },
            ]}
          />
        </section>

        <section className="mt-[64px] w-full sm:mt-[100px]">
          <GallerySlider images={gallery} />
        </section>

        <CtaBanner />

        <section className="mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
          <div className="mx-auto flex w-full max-w-[1234px] flex-col items-center gap-[20px] md:gap-[42px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[22px] font-black uppercase text-transparent sm:text-[29px]">
              <RevealText>Ostatné projekty</RevealText>
            </h2>
            <OtherProjectsSlider currentSlug="offlandia" />
          </div>
        </section>

        <Faq />
      </main>
      <Footer />
    </>
  );
}
