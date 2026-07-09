import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlowCircle from "@/components/GlowCircle";
import Reveal from "@/components/Reveal";
import RevealText from "@/components/RevealText";
import CtaBanner from "@/components/CtaBanner";
import Faq from "@/components/Faq";
import OtherProjectsSlider from "@/components/OtherProjectsSlider";
import GallerySlider from "@/components/GallerySlider";
import VideoEmbed from "@/components/VideoEmbed";

const title = "Retro burger Prešov - prípadová štúdia | Fabelli";
const description =
  "Ako sme známemu dineru Retro burger v Prešove pred zatvorením prevádzky vypredali kapacitu už o 17:00 – prípadová štúdia poslednej kampane.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [{ url: "/thumbnails/thumbnail_retro_burger.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/thumbnails/thumbnail_retro_burger.png"],
  },
};

const IMG = "/images/case-studies/retro-burger-presov";

const tripPhotos = [`${IMG}/trip-1.webp`, `${IMG}/trip-2.webp`];

const productionStats = [
  { value: "10 reklám", label: "v profesionálnej produkcii a post-produkcii" },
  { value: "organické videá", label: "ktoré dosiahli státisícové zhliadnutia" },
];

const productionPhotos = [
  `${IMG}/production-1.webp`,
  `${IMG}/production-2.webp`,
  `${IMG}/production-3.webp`,
  `${IMG}/production-4.webp`,
  `${IMG}/production-5.webp`,
  `${IMG}/production-6.webp`,
];

const foodStat = {
  value: "fotky",
  label: "po ktorých sa asi aj vám zbiehajú slinky",
};

const foodPhotos = [
  `${IMG}/food-1.webp`,
  `${IMG}/food-2.webp`,
  `${IMG}/food-3.webp`,
  `${IMG}/food-4.webp`,
  `${IMG}/food-5.webp`,
];

const socialPhotos = [
  { src: `${IMG}/social-1.webp`, aspect: "aspect-[972/424]" },
  { src: `${IMG}/social-2.webp`, aspect: "aspect-[947/642]" },
  { src: `${IMG}/social-3.webp`, aspect: "aspect-[1009/382]" },
];

function TestimonialVideo({
  libraryId,
  videoId,
}: {
  libraryId: string;
  videoId: string;
}) {
  return (
    <div className="relative  shrink-0 overflow-hidden rounded-[26px] shadow-[0px_0px_43px_0px_rgba(219,236,248,0.59)] h-[553px] w-[280px] md:rounded-[40px]">
      <VideoEmbed libraryId={libraryId} videoId={videoId} />
    </div>
  );
}


export default function RetroBurgerPresovCaseStudyPage() {
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
                  src="/images/webm/RETRO_BURGER_1080.webm"
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
                      Retro burger Prešov
                    </span>
                  </Reveal>
                  <h1 className="w-full bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[28px] font-black uppercase leading-normal text-transparent md:text-[38px]">
                    <RevealText>Prevádzka vypredaná už o 17:00!</RevealText>
                  </h1>
                </div>
                <Reveal immediate delay={250} duration={500}>
                  <ul className="flex w-full list-disc flex-col gap-[16px] pl-[20px] font-sans text-[16px] text-white md:text-[20px]">
                    <li>
                      Retro burger je známy diner v Prešove, ktorý si
                      otvorili majitelia Dávid a Eva v štýle Ameriky z
                      minulého storočia. Objavili sa aj v televíznej relácii
                      &bdquo;Na nože&ldquo;.
                    </li>
                    <li>
                      Mňa a môj tím si na spoluprácu zavolali, keď sa
                      rozhodli, že o 4 mesiace neskôr budú zatvárať, no
                      chceli to na záver ešte &bdquo;vybombiť&ldquo;.
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
              
                                   Fáza0
                                
            </p>
            <Reveal
              duration={600}
              className="bg-gradient-to-b from-transparent to-[#0C1728] to-10% -mt-[10px] w-full font-sans text-[16px] text-white md:-mt-[20px] md:text-[20px] leading-[120%] mt-10 pt-4 "
            >
              <p className="w-full max-w-[621px] mx-auto">
                Pri biznisoch tohto typu je prístup k prieskumu trošku
                iný…nejde o to nájsť správny marketingový kanál, ale spraviť
                analýzu formátov virálneho kontentu a následne ho upraviť
                pre klientov biznis.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="relative mt-[64px] w-full px-[24px] md:mt-[100px] md:px-[106px]">
          <GlowCircle className="-left-[300px] top-[100px]" />
          <div className="relative mx-auto flex w-full max-w-[1048px] flex-col items-center gap-[27px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[18px] font-black uppercase text-transparent md:text-[24px]">
              <RevealText>
                V Bratislave som spoločne s tímom nasadol na vlak a došiel na
                samotnú prevádzku do Prešova.
              </RevealText>
            </h2>
            <div className="flex w-full items-center justify-center gap-[16px] md:gap-[55px]">
              {tripPhotos.map((src, i) => (
                <Reveal key={src} delay={i * 100} duration={600} y={20}>
                  <div className="relative h-[280px] w-[142px] shrink-0 overflow-hidden rounded-[26px] shadow-[0px_0px_43px_0px_rgba(219,236,248,0.59)] md:h-[553px] md:w-[280px] md:rounded-[40px]">
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
          </div>
        </section>
   <section className="mt-[64px] w-full px-[24px] md:mt-[100px] md:px-[106px]">
          <div className="mx-auto flex w-full max-w-[952px] flex-col items-center gap-[40px] md:flex-row md:items-center md:justify-center md:gap-[71px]">
            <Reveal duration={600} y={20}>
            <Reveal delay={150} duration={600} y={20}>
              <TestimonialVideo
                libraryId="695134"
                videoId="8e4c85c8-7338-4f6c-a684-286408fb5b4c"
              />
            </Reveal>
            </Reveal>
            <Reveal delay={150} duration={600} y={20}>
              <div className="flex w-full max-w-[310px] flex-col items-center gap-[24px] text-center">
                <p className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-sans text-[22px] text-transparent md:text-[35px] leading-[120%]">
                  &bdquo;Fabiánov prístup k práci je veľmi cieľavedomý.&ldquo;
                </p>
                <p className="bg-gradient-to-r from-purple-from to-purple-to bg-clip-text font-sans text-[16px] font-bold uppercase italic text-transparent">
                  -Dávid
                </p>
              </div>
            </Reveal>
          </div>
        </section>
        <section className="mt-[64px] w-full  md:mt-[100px] ">
          <div className="mx-auto flex w-full  flex-col items-center gap-[43px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[18px] font-black uppercase text-transparent md:text-[24px] px-[24px] md:px-[106px] max-w-[1048px]">
              <RevealText>
                S pripraveným scenárom sme zorganizovali obrovskú 2-dňovú
                produkciu.
              </RevealText>
            </h2>

            <div className="flex w-full flex-wrap items-stretch justify-center gap-[24px] md:gap-[43px] px-[24px] md:px-[106px] max-w-[1048px]">
              {productionStats.map((stat, i) => (
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

            <GallerySlider images={productionPhotos} />
<div className="px-4">

            <Reveal
              duration={500}
              y={16}
              className="flex h-[163px] w-full max-w-[353px] flex-col items-center justify-center gap-[12px] rounded-[34px] bg-gradient-to-r from-heading-from/20 to-heading-to/20 px-8 md:px-[24px] text-center   "
              >
              <p className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[24px] font-black uppercase text-transparent md:text-[32px] leading-[120%]">
                {foodStat.value}
              </p>
              <p className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-sans text-[16px] text-transparent md:text-[20px] leading-[120%]">
                {foodStat.label}
              </p>
            </Reveal>
              </div>

            <GallerySlider images={foodPhotos} />
          </div>
        </section>

        <section className="mt-[64px] w-full md:mt-[100px]">
          <div className="mx-auto flex w-full max-w-[947px] flex-col items-center gap-[40px] px-[24px] md:gap-[60px] md:px-[106px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[18px] font-black uppercase text-transparent md:text-[24px]">
              <RevealText>
                Pobočka sa po našich vstupoch viackrát vypredala a správy od
                Davida a Evičky hovoria samé za seba.
              </RevealText>
            </h2>
          
           <div className="flex w-full flex-col items-center gap-[16px] md:flex-row md:items-start md:gap-[26px]">
              {socialPhotos.map((photo, i) => (
                <Reveal
                  key={photo.src}
                  delay={i * 100}
                  duration={500}
                  y={16}
                  className={`relative w-full flex-1 overflow-hidden rounded-[20px] ${photo.aspect}`}
                >
                  <Image
                    src={photo.src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                </Reveal>
              ))}
            </div>
            </div>
        </section>

        <section className="mt-[64px] w-full px-[24px] md:mt-[100px] md:px-[106px]">
          <div className="mx-auto flex w-full max-w-[947px] flex-col items-center gap-[40px] md:gap-[60px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[18px] font-black uppercase text-transparent md:text-[24px]">
              <RevealText>
                Retro burger Prešov mal posledné mesiace plnky, no David a
                Eva sa ho rozhodli aj napriek tomu zo súkromných dôvodov
                zatvoriť.
              </RevealText>
            </h2>
            <Reveal duration={600} y={20}>
              <div className="relative  shrink-0 overflow-hidden rounded-[26px] shadow-[0px_0px_43px_0px_rgba(219,236,248,0.59)] h-[553px] w-[280px] md:rounded-[40px]">
                <VideoEmbed
                  libraryId="695141"
                  videoId="745dee6b-77a6-443d-8577-e99ff1e4368c"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <CtaBanner />

        <section className="mt-[64px] w-full px-[24px] md:mt-[100px] md:px-[106px]">
          <div className="mx-auto flex w-full max-w-[1234px] flex-col items-center gap-[20px] md:gap-[42px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[22px] font-black uppercase text-transparent md:text-[29px]">
              <RevealText>Ostatné projekty</RevealText>
            </h2>
            <OtherProjectsSlider currentSlug="retro-burger" />
          </div>
        </section>

        <Faq />
      </main>
      <Footer />
    </>
  );
}
