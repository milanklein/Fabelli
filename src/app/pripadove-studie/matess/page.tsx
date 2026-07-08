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

export const metadata: Metadata = {
  title: "Matess - prípadová štúdia | Fabelli",
  description: "5-ciferný online biznis skoro od nuly",
};

const IMG = "/images/case-studies/matess";

const stats = [
  { value: 21157, label: "leadov cez e-book funnel" },
  { value: 650, label: "leadov, ktoré chceli priamy hovor s Matessom" },
  { value: 7000, label: "nových sledovateľov na Instagrame" },
  {
    text: "Škálovanie podnikania",
    label: "noví ľudia v tíme a vytvorenie prémiovejšieho positioningu",
  },
];

const results = [
  {
    image: `${IMG}/result-1.png`,
    label: "650 high ticket leadov pre Matessa s pomerom prekliku 2.99%",
  },
  {
    image: `${IMG}/result-2.png`,
    label:
      "11 000 leadov, 0.2€ za lead, 5% CTR — nikto iný na Slovensku nemá takéto výsledky",
  },
  {
    image: `${IMG}/result-3.jpg`,
    label: "Vysoká výkonnosť a pomer prekliku reklám pre Matessa",
  },
  {
    image: `${IMG}/result-4.png`,
    label: "CTR 4.52%, keď agentúry výskajú pri 1%",
  },
];

const gallery = [
  `${IMG}/gallery-2.png`,
  `${IMG}/gallery-3.png`,
  `${IMG}/gallery-4.png`,
  `${IMG}/gallery-5.png`,
  `${IMG}/gallery-6.png`,
  `${IMG}/gallery-7.png`,
];

function TestimonialVideo({
  libraryId,
  videoId,
}: {
  libraryId: string;
  videoId: string;
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

function VideoCard() {
  return (
    <div className="relative h-[280px] w-[142px] shrink-0 overflow-hidden rounded-[26px] shadow-[0px_0px_43px_0px_rgba(219,236,248,0.59)] sm:h-[553px] sm:w-[280px] sm:rounded-[40px]">
      <Image
        src={`${IMG}/gallery-1.png`}
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

export default function MatessCaseStudyPage() {
  return (
    <>
      <main className="flex flex-1 flex-col bg-background">
        <section className="relative w-full overflow-x-hidden bg-background">
          <GlowCircle className="-top-[300px] -right-[200px]" />
          <div className="relative mx-auto flex w-full max-w-[1446px] flex-col gap-[40px] px-[24px] pb-[40px] pt-[40px] sm:gap-[60px] sm:px-[106px] sm:pt-[58px]">
            <Header />

            <div className="flex w-full flex-col items-center justify-center md:items-start  gap-[40px] sm:flex-row sm:gap-[60px] ">
              <Reveal
                immediate
                delay={0}
                duration={700}
                y={20}
                className="w-full shrink-0 sm:w-[421px] flex justify-center items-center "
              >
                <video
                  src="/images/webm/MATES_LOOP_1080.webm"
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
                      Matess
                    </span>
                  </Reveal>
                  <h1 className="w-full bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[28px] font-black uppercase leading-normal text-transparent sm:text-[38px]">
                    <RevealText>
                      5-ciferný online
                      <br />
                      biznis skoro od nuly
                    </RevealText>
                  </h1>
                </div>
                <Reveal immediate delay={250} duration={500}>
                  <ul className="flex md:w-full list-disc flex-col gap-[16px] pl-[20px] font-sans text-[16px] text-white sm:text-[20px]">
                    <li>
                      Matess je fitness coach pre pracovne vyťažených ľudí z
                      vyššej strednej vrstvy.
                    </li>
                    <li>
                      Pred spoluprácou si musel klientov zháňať manuálne cez
                      sociálne siete a silne sa spoliehal aj na referencie. V
                      podstate nemal ani zadefinovanú cieľovú skupinu.
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
                      className="mt-[80px] w-full select-none bg-gradient-to-t from-[#0c1728] via-[#d9ebf8] to-[#f4fafd] bg-clip-text text-center font-heading text-[76px] font-black uppercase leading-none text-transparent opacity-[0.43] sm:mt-[89px] sm:text-[223px] sm:leading-[1.05] sticky top-60 md:top-20" 
                    >
                        <RevealText variant="fall">
                      Fáza0
                        </RevealText>
                    </p>
            <Reveal
              duration={600}
              className="g-gradient-to-b from-transparent to-[#0C1728] to-10% -mt-[10px] w-full max-w-[621px] font-sans text-[16px] text-white sm:-mt-[20px] sm:text-[20px] leading-[120%] mt-10"
            >
              <p>
                Úvodný prieskum trhu (fáza 0 — ktorú vykonávam pred každým
                projektom) ukázal, že fitness trh je mimoriadne saturovaný a
                generické sľuby ako &bdquo;pomôžem vám schudnúť&ldquo; už
                nefungujú. V týchto situáciach treba na trh prísť s novou
                &bdquo;metódou&ldquo; alebo si vytýčiť užšiu cieľovku.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="relative mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
          <GlowCircle className="-left-[300px] top-[100px]" />
          <div className="relative mx-auto flex w-full max-w-[1048px] flex-col items-center gap-[48px]">
            <div className="flex w-full max-w-[621px] flex-col items-center gap-[20px] text-center">
              <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[20px] font-black uppercase text-transparent sm:text-[24px]">
                <RevealText>Mojím riešením bolo:</RevealText>
              </h2>
              <Reveal delay={100} duration={500}>
                <ul className="flex w-full list-disc flex-col gap-[10px] pl-[20px] text-left font-sans text-center text-[16px] text-white sm:text-[20px]">
                  <li className="text-center leading-[120%]">
                    nové postavenie Matessa na trh ako &bdquo;Fitness coacha
                    pre pracujúcich ľudí, ktorí chcú byť fit aj bez
                    extrémov.&ldquo;
                  </li>
                  <li className="text-center leading-[120%]">
                    2 funnely na zisk leadov
                  </li>
                </ul>
              </Reveal>
            </div>

            <div className="flex w-full flex-col items-center gap-[32px] sm:flex-row sm:items-start sm:justify-center sm:gap-[54px]">
              {[
                {
                  src: `${IMG}/funnel-1.png`,
                  caption: "Funnel s e-bookom a následnou e-mailovou sekvenciou",
                },
                {
                  src: `${IMG}/funnel-2.png`,
                  caption:
                    "Priamy funnel cez videoreklamy na Meta, pristávaciu stránku, vyplnenie formuláru a kvalifikačný hovor",
                },
              ].map((funnel, i) => (
                <Reveal
                  key={funnel.src}
                  delay={i * 150}
                  duration={600}
                  className="flex w-full max-w-[297px] flex-col items-center gap-[20px]"
                >
                  <div
                    className="animate-float relative aspect-[297/499] w-full overflow-hidden rounded-[16px] sm:rounded-[24px] py-8"
                    style={{ animationDelay: `${i * 0.6}s` }}
                  >
                    <Image
                      src={funnel.src}
                      alt=""
                      fill
                      className="object-contain"
                      sizes="297px"
                    />
                  </div>
                  <p className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[16px] font-black text-transparent sm:text-[19px] leading-[120%]">
                    {funnel.caption}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
          <div className="mx-auto flex w-full max-w-[1234px] flex-col items-center gap-[40px] sm:flex-row sm:items-start sm:gap-[54px]">
            <Reveal
              duration={700}
              className="relative hidden md:block  w-full max-w-[357px] shrink-0 overflow-hidden rounded-[30px] sm:h-[635px] sm:rounded-[51px]"
            >
              <Image
                src={`${IMG}/portrait.jpg`}
                alt="Matess"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 357px"
              />
            </Reveal>
            <div className="flex w-[320px] md:w-full  flex-col items-start gap-[40px] sm:gap-[60px]">
              <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[20px] font-black uppercase text-transparent sm:text-[24px]">
                <RevealText>Tieto funnely priniesli:</RevealText>
              </h2>
              <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2 sm:gap-[43px]">
                {stats.map((stat, i) => (
                  <Reveal
                    key={stat.label}
                    delay={i * 100}
                    duration={500}
                    y={16}
                    className="flex h-[163px] w-full flex-col items-center justify-center gap-[12px] rounded-[34px] bg-gradient-to-r from-heading-from/20 to-heading-to/20 px-[24px] text-center"
                  >
                    <p className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[24px] font-black uppercase text-transparent sm:text-[32px] leading-[120%]">
                      {stat.value !== undefined ? (
                        <CountUp value={stat.value} />
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
            </div>
          </div>
        </section>

        <section className="mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
          <CaseStudyTestimonialsSwiper
            videos={[
              { libraryId: "695134", videoId: "0b6af2b7-0e09-4e76-b6b5-a77e5419b9f1" },
              { libraryId: "695141", videoId: "5c62dafc-b2fe-49d3-bfcb-5b74cb8445f8" },
            ]}
          />
        </section>

        <section className="mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
          <div className="mx-auto flex w-full max-w-[764px] flex-col items-center gap-[48px] sm:gap-[64px]">
            {results.map((result, i) => (
              <Reveal
                key={result.label}
                delay={i * 80}
                duration={600}
                y={20}
                className="flex w-full flex-col items-center gap-[16px]"
              >
                <p className="w-2/3 bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[13px] font-black uppercase text-transparent sm:text-[16px]">
                  {result.label}
                </p>
                <div className="relative h-auto w-full overflow-hidden rounded-[16px] sm:rounded-[28px]">
                  <Image
                    src={result.image}
                    alt=""
                    width={764}
                    height={230}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
          <div className="mx-auto flex w-full max-w-[952px] flex-col items-center gap-[40px] sm:flex-row sm:items-center sm:justify-center sm:gap-[71px]">
            <Reveal duration={600} y={20}>
            <Reveal delay={150} duration={600} y={20}>
              <TestimonialVideo
                libraryId="695134"
                videoId="0e179b8a-bd00-4fd3-9614-0089e02f92f1"
              />
            </Reveal>
            </Reveal>
            <Reveal delay={150} duration={600} y={20}>
              <div className="flex w-full max-w-[310px] flex-col items-center gap-[24px] text-center">
                <p className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-sans text-[22px] text-transparent sm:text-[35px] leading-[120%]">
                  &bdquo;Mohol som mať viac klientov a aj zvýšiť ceny.&ldquo;
                </p>
                <p className="bg-gradient-to-r from-purple-from to-purple-to bg-clip-text font-sans text-[16px] font-bold uppercase italic text-transparent">
                  -Matess
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

        <section className="mt-[64px] w-full sm:mt-[100px]">
          <GallerySlider images={gallery} />
        </section>

        <CtaBanner />

        <section className="mt-[64px] w-full px-0 md:mt-[100px] md:px-[106px]">
          <div className="mx-auto flex w-full max-w-[1234px] flex-col items-center gap-[42px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[22px] font-black uppercase text-transparent sm:text-[29px]">
              <RevealText>Ostatné projekty</RevealText>
            </h2>
            <OtherProjectsSlider currentSlug="matess" />
          </div>
        </section>

        <Faq />
      </main>
      <Footer />
    </>
  );
}
