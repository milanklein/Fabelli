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
import OtherProjectsSlider from "@/components/OtherProjectsSlider";
import GallerySlider from "@/components/GallerySlider";

const title = "Force8 - Michal Pataky - prípadová štúdia | Fabelli";
const description =
  "Ako sme fitness programu Force8 priniesli 50 high ticket leadov iba z jednej profesionálne natočenej videoreklamy.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [{ url: "/thumbnails/thumbnail_force8.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/thumbnails/thumbnail_force8.png"],
  },
};

export default function Force8CaseStudyPage() {
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
                className="w-full shrink-0 md:w-[421px] flex justify-center items-center "
              >
                <video
                  src="/images/webm/FORCE8_PATAKY_LOOP_1080.webm"
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
                      Force8 - Michal Pataky
                    </span>
                  </Reveal>
                  <h1 className="w-full bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[28px] font-black uppercase leading-normal text-transparent md:text-[38px]">
                    <RevealText>
                      50 high ticket leadov
                      <br />
                      iba z jednej reklamy!
                    </RevealText>
                  </h1>
                </div>
                <Reveal immediate delay={250} duration={500}>
                  <ul className="flex w-full list-disc flex-col gap-[16px] pl-[20px] font-sans text-[16px] text-white md:text-[20px]">
                    <li>
                      Mišo vlastní menší gym v Bratislave. Jeho tréningy sú
                      zamerané na funkčnosť, nie na veľké svaly.
                    </li>
                    <li>
                      V minulosti sme už spolupracovali a teraz ma oslovil
                      kvôli fitness programu &bdquo;Neschudneš
                      Neplatíš&ldquo;, ktorý potreboval dostať do povedomia.
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
              className="mt-[80px] w-full select-none bg-gradient-to-t from-[#0c1728] via-[#d9ebf8] to-[#f4fafd] bg-clip-text text-center font-heading text-[76px] font-black uppercase leading-none text-transparent opacity-[0.43] md:mt-[89px] md:text-[223px] md:leading-[1.05] sticky top-60 md:top-20"
            >
             <RevealText variant="fall">
                                  Fáza0
                                    </RevealText>
            </p>
            <Reveal
              duration={600}
              className="bg-gradient-to-b from-transparent to-[#0C1728] to-10% -mt-[10px] w-full font-sans text-[16px] text-white md:-mt-[20px] md:text-[20px] leading-[120%] mt-10"
            >
              <p className="w-full max-w-[621px] mx-auto pt-2 bg-gradient-to-b from-transparent to-[#0C1728] to-10%"  >
                Pri fáze 0 - čiže analytickom prieskume trhu som zistil, že
                Mišou gym najlepšie osloví ľudí, ktorí mali v minulosti zlú
                skúsenosť s bežným fitkom. V kampaniach sme sa teda voči
                konceptu bežných fitiek vyhranili a ľudí sme &bdquo;lákali&ldquo;
                skôr na silu komunity, funkčnosť tela a zapadnutie
                harmonogramu vedených tréningov do ich života.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="relative mt-[64px] w-full px-[24px] md:mt-[100px] md:px-[106px]">
          <GlowCircle className="-left-[300px] top-[100px]" />
          <div className="relative mx-auto flex w-full max-w-[1048px] flex-col items-center gap-[27px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[20px] font-black uppercase text-transparent md:text-[24px]">
              <RevealText>
                V profesionálnej produkcii a aplikovaním neuro-responzívnych
                marketingových prvkov som mu len z jednej reklamy priniesol
                50 kontaktov, ktoré už Mišo predával na osobných stretnutiach
              </RevealText>
            </h2>
            <Reveal
              duration={600}
              className="w-full max-w-[629px] overflow-hidden  bg-gradient-to-br from-navy-panel/50 to-navy-panel/20 "
            >
              <Image src={"/images/force8-image.png"} width={629} height={121} alt="výsledok"/>
            </Reveal>
          </div>
        </section>

       

        <section className="mt-[64px] w-full md:mt-[100px]">
          <GallerySlider
            images={[
              "/images/case-studies/force8-michal-pataky/gallery-1.png",
              "/images/case-studies/force8-michal-pataky/gallery-2.png",
              "/images/case-studies/force8-michal-pataky/gallery-3.png",
              "/images/case-studies/force8-michal-pataky/gallery-4.png",
            ]}
          />
        </section>

        <section className="mt-[64px] flex w-full justify-center px-[24px] md:mt-[100px] md:px-[106px]">
          <Reveal duration={500}>
            <Button href="/kvalifikacny-formular" size="lg">
              Úvodná strategická konzultácia
            </Button>
          </Reveal>
        </section>

        <CtaBanner />

        <section className="mt-[64px] w-full px-[24px] md:mt-[100px] md:px-[106px]">
          <div className="mx-auto flex w-full max-w-[1234px] flex-col items-center gap-[42px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[22px] font-black uppercase text-transparent md:text-[29px]">
              <RevealText>Ostatné projekty</RevealText>
            </h2>
            <OtherProjectsSlider currentSlug="force8-michal-pataky" />
          </div>
        </section>

        <Faq />
      </main>
      <Footer />
    </>
  );
}
