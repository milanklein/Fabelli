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

export const metadata: Metadata = {
  title: "Retro burger Prešov - prípadová štúdia | Fabelli",
  description: "Prevádzka vypredaná už o 17:00!",
};

const IMG = "/images/case-studies/retro-burger-presov";

const tripPhotos = [`${IMG}/trip-1.png`, `${IMG}/trip-2.png`];

const productionStats = [
  { value: "10 reklám", label: "v profesionálnej produkcii a post-produkcii" },
  { value: "organické videá", label: "ktoré dosiahli státisícové zhliadnutia" },
];

const productionPhotos = [
  `${IMG}/production-1.png`,
  `${IMG}/production-2.png`,
  `${IMG}/production-3.png`,
  `${IMG}/production-4.png`,
  `${IMG}/production-5.png`,
  `${IMG}/production-6.png`,
];

const foodStat = {
  value: "fotky",
  label: "po ktorých sa asi aj vám zbiehajú slinky",
};

const foodPhotos = [
  `${IMG}/food-1.png`,
  `${IMG}/food-2.png`,
  `${IMG}/food-3.png`,
  `${IMG}/food-4.png`,
  `${IMG}/food-5.png`,
];

const socialPhotos = [
  { src: `${IMG}/social-1.png`, aspect: "aspect-[972/424]" },
  { src: `${IMG}/social-2.png`, aspect: "aspect-[947/642]" },
  { src: `${IMG}/social-3.png`, aspect: "aspect-[1009/382]" },
];

function PhotoRow({ photos }: { photos: string[] }) {
  return (
    <div className="flex w-full gap-[16px] overflow-x-auto pb-[8px] sm:gap-[24px] [&::-webkit-scrollbar]:hidden">
      {photos.map((src) => (
        <div
          key={src}
          className="relative aspect-[289/503] h-[280px] shrink-0 overflow-hidden rounded-[20px] sm:h-[503px]"
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 640px) 160px, 289px"
          />
        </div>
      ))}
    </div>
  );
}

export default function RetroBurgerPresovCaseStudyPage() {
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
                  src="/images/webm/RETRO_BURGER_1080.webm"
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
                      Retro burger Prešov
                    </span>
                  </Reveal>
                  <h1 className="w-full bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[28px] font-black uppercase leading-normal text-transparent sm:text-[38px]">
                    <RevealText>Prevádzka vypredaná už o 17:00!</RevealText>
                  </h1>
                </div>
                <Reveal immediate delay={250} duration={500}>
                  <ul className="flex w-full list-disc flex-col gap-[16px] pl-[20px] font-sans text-[16px] text-white sm:text-[20px]">
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
                Pri biznisoch tohto typu je prístup k prieskumu trošku
                iný…nejde o to nájsť správny marketingový kanál, ale spraviť
                analýzu formátov virálneho kontentu a následne ho upraviť
                pre klientov biznis.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="relative mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
          <GlowCircle className="-left-[300px] top-[100px]" />
          <div className="relative mx-auto flex w-full max-w-[1048px] flex-col items-center gap-[27px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[18px] font-black uppercase text-transparent sm:text-[24px]">
              <RevealText>
                V Bratislave som spoločne s tímom nasadol na vlak a došiel na
                samotnú prevádzku do Prešova.
              </RevealText>
            </h2>
            <div className="flex w-full items-center justify-center gap-[16px] sm:gap-[55px]">
              {tripPhotos.map((src, i) => (
                <Reveal key={src} delay={i * 100} duration={600} y={20}>
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
          </div>
        </section>

        <section className="mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
          <div className="mx-auto flex w-full max-w-[1048px] flex-col items-center gap-[43px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[18px] font-black uppercase text-transparent sm:text-[24px]">
              <RevealText>
                S pripraveným scenárom sme zorganizovali obrovskú 2-dňovú
                produkciu.
              </RevealText>
            </h2>

            <div className="flex w-full flex-wrap items-stretch justify-center gap-[24px] sm:gap-[43px]">
              {productionStats.map((stat, i) => (
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

            <Reveal duration={600} className="w-full">
              <PhotoRow photos={productionPhotos} />
            </Reveal>

            <Reveal
              duration={500}
              y={16}
              className="flex h-[163px] w-full max-w-[353px] flex-col items-center justify-center gap-[12px] rounded-[34px] bg-gradient-to-r from-heading-from/20 to-heading-to/20 px-[24px] text-center"
            >
              <p className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[24px] font-black uppercase text-transparent sm:text-[32px] leading-[120%]">
                {foodStat.value}
              </p>
              <p className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-sans text-[16px] text-transparent sm:text-[20px] leading-[120%]">
                {foodStat.label}
              </p>
            </Reveal>

            <Reveal duration={600} className="w-full">
              <PhotoRow photos={foodPhotos} />
            </Reveal>
          </div>
        </section>

        <section className="mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
          <div className="mx-auto flex w-full max-w-[947px] flex-col items-center gap-[40px] sm:gap-[60px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[18px] font-black uppercase text-transparent sm:text-[24px]">
              <RevealText>
                Pobočka sa po našich vstupoch viackrát vypredala a správy od
                Davida a Evičky hovoria samé za seba.
              </RevealText>
            </h2>
            <div className="flex w-full flex-col items-center gap-[16px] sm:flex-row sm:items-start sm:gap-[26px]">
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

        <section className="mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
          <div className="mx-auto flex w-full max-w-[947px] flex-col items-center gap-[40px] sm:gap-[60px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[18px] font-black uppercase text-transparent sm:text-[24px]">
              <RevealText>
                Retro burger Prešov mal posledné mesiace plnky, no David a
                Eva sa ho rozhodli aj napriek tomu zo súkromných dôvodov
                zatvoriť.
              </RevealText>
            </h2>
            <Reveal duration={600} y={20}>
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
            </Reveal>
          </div>
        </section>

        <CtaBanner />

        <section className="mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
          <div className="mx-auto flex w-full max-w-[1234px] flex-col items-center gap-[42px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[22px] font-black uppercase text-transparent sm:text-[29px]">
              <RevealText>Ostatné projekty</RevealText>
            </h2>
            <OtherProjectsSlider currentSlug="retro-burger-presov" />
          </div>
        </section>

        <Faq />
      </main>
      <Footer />
    </>
  );
}
