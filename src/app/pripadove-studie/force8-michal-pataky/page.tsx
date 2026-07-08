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

export const metadata: Metadata = {
  title: "Force8 - Michal Pataky - prípadová štúdia | Fabelli",
  description: "50 high ticket leadov iba z jednej reklamy!",
};

function VideoCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative flex h-[280px] w-[142px] shrink-0 items-center justify-center overflow-hidden rounded-[26px] bg-gradient-to-br from-navy-panel/60 to-navy-panel/20 shadow-[0px_0px_43px_0px_rgba(219,236,248,0.59)] sm:h-[553px] sm:w-[280px] sm:rounded-[40px] ${className}`}
    >
      <Image
        src="/images/play-icon.png"
        alt=""
        width={88}
        height={88}
        className="size-[44px] sm:size-[64px]"
      />
    </div>
  );
}

export default function Force8CaseStudyPage() {
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
                  src="/images/webm/FORCE8_PATAKY_LOOP_1080.webm"
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
                      Force8 - Michal Pataky
                    </span>
                  </Reveal>
                  <h1 className="w-full bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[28px] font-black uppercase leading-normal text-transparent sm:text-[38px]">
                    <RevealText>
                      50 high ticket leadov
                      <br />
                      iba z jednej reklamy!
                    </RevealText>
                  </h1>
                </div>
                <Reveal immediate delay={250} duration={500}>
                  <ul className="flex w-full list-disc flex-col gap-[16px] pl-[20px] font-sans text-[16px] text-white sm:text-[20px]">
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

        <section className="relative mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
          <GlowCircle className="-left-[300px] top-[100px]" />
          <div className="relative mx-auto flex w-full max-w-[1048px] flex-col items-center gap-[27px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[20px] font-black uppercase text-transparent sm:text-[24px]">
              <RevealText>
                V profesionálnej produkcii a aplikovaním neuro-responzívnych
                marketingových prvkov som mu len z jednej reklamy priniesol
                50 kontaktov, ktoré už Mišo predával na osobných stretnutiach
              </RevealText>
            </h2>
            <Reveal
              duration={600}
              className="w-full max-w-[629px] overflow-hidden rounded-[16px] bg-gradient-to-br from-navy-panel/50 to-navy-panel/20 sm:rounded-[24px]"
            >
              <div className="aspect-[629/121] w-full" />
            </Reveal>
          </div>
        </section>

        <section className="mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
          <div className="mx-auto flex w-full max-w-[952px] flex-col items-center gap-[40px] sm:flex-row sm:items-center sm:justify-center sm:gap-[71px]">
            <Reveal duration={600} y={20}>
              <VideoCard />
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

        <section className="mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
          <div className="mx-auto flex w-full max-w-[1234px] flex-wrap items-center justify-center gap-[16px] sm:gap-[24px]">
            {[0, 1, 2, 3].map((i) => (
              <Reveal key={i} delay={i * 80} duration={500} y={16}>
                <VideoCard />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-[64px] flex w-full justify-center px-[24px] sm:mt-[100px] sm:px-[106px]">
          <Reveal duration={500}>
            <Button href="/kvalifikacny-formular" size="lg">
              Úvodná strategická konzultácia
            </Button>
          </Reveal>
        </section>

        <CtaBanner />

        <section className="mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
          <div className="mx-auto flex w-full max-w-[1234px] flex-col items-center gap-[42px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[22px] font-black uppercase text-transparent sm:text-[29px]">
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
