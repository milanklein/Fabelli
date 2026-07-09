import type { Metadata } from "next";
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
import Image from "next/image";

const title = "Auto Pola - prípadová štúdia | Fabelli";
const description =
  "Ako sme autorizovanému servisu Auto Pola znížili cenu za nového zákazníka na 10 € cez nový web, rezervačný proces a vylepšené Google reklamy.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [{ url: "/thumbnails/thumbnail_autopola.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/thumbnails/thumbnail_autopola.png"],
  },
};

export default function AutoPolaCaseStudyPage() {
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
                  src="/images/webm/POLA_LOOP_1080.webm"
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
                      Auto Pola
                    </span>
                  </Reveal>
                  <h1 className="w-full bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[28px] font-black uppercase leading-normal text-transparent md:text-[38px]">
                    <RevealText>10€ za nového zákazníka.</RevealText>
                  </h1>
                </div>
                <Reveal immediate delay={250} duration={500}>
                  <ul className="flex w-full list-disc flex-col gap-[16px] pl-[20px] font-sans text-[16px] text-white md:text-[20px]">
                    <li>
                      Auto Pola je autorizovaný servis vozidiel Hyundai v
                      Bratislave.
                    </li>
                    <li>
                      Už dlhšiu dobu ich marketing stagnoval. Mali síce
                      nastavené Google reklamy, no:
                      <ul className="mt-[12px] flex list-[circle] flex-col gap-[10px] pl-[24px]">
                        <li>
                          ich web bol dizajnovo a funkčne ešte z minulého
                          desaťročia
                        </li>
                        <li>
                          v online priestore nekomunikovali svoje unikátne
                          body tak, aby sa odlíšili od konkurencie
                        </li>
                        <li>
                          nemerali konverzie a nemali žiaden kompaktný
                          rezervačný formulár pre zákazníkov servisu
                        </li>
                      </ul>
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
                                  className="mt-[80px] w-full select-none bg-gradient-to-t from-[#0c1728] via-[#d9ebf8] to-[#f4fafd] bg-clip-text text-center font-heading text-[60px] font-black uppercase leading-none text-transparent opacity-[0.43] md:mt-[89px] md:text-[223px] md:leading-[1.05] sticky top-60 md:top-20 pt-4" 
                                >
                                    
                                  Fáza0
                                
                                </p>
            <Reveal
              duration={600}
              className="bg-gradient-to-b from-transparent to-[#0C1728] to-10% -mt-[10px] w-full font-sans text-[16px] text-white md:-mt-[20px] md:text-[20px] leading-[120%] mt-10"
            >
              <p className="w-full max-w-[621px] mx-auto bg-gradient-to-b from-transparent to-[#0C1728] to-10% pt-2">
                Pri prieskume trhu som zistil, že všetci konkurenti z tohto
                odvetvia používali tie isté generické slová
                (&bdquo;autorizovaný servis&ldquo;, &bdquo;servis
                Bratislava&ldquo;,...), a preto som pri Auto Pole zdôrazňoval
                príbeh vzniku a priateľský prístup zamestnancov - presne tým
                sa viete odlíšiť v saturovaných trhoch.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="relative mt-[64px] w-full px-[24px] md:mt-[100px] md:px-[106px]">
          <GlowCircle className="-left-[300px] top-[100px]" />
          <div className="relative mx-auto flex w-full max-w-[1048px] flex-col items-center gap-[27px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[20px] font-black uppercase text-transparent md:text-[24px]">
              <RevealText>Ako riešenie som pripravil:</RevealText>
            </h2>
            <Reveal delay={100} duration={500}>
              <ul className="flex w-full max-w-[642px] list-disc flex-col gap-[10px] pl-[20px] font-sans text-[16px] text-white md:text-[20px]">
                <li>
                  web stránku s novým dizajnom, textami a presviedčacou
                  štruktúrou, ktorou prejde každý zákazník
                </li>
                <li>vytvorenie hladkého procesu objednávania sa na servis</li>
                <li>vylepšenie Google reklám a merania konverzií</li>
              </ul>
            </Reveal>
            <Reveal
              delay={200}
              duration={600}
              className="relative aspect-[940/311] w-full max-w-[940px] overflow-hidden rounded-[24px] bg-gradient-to-br from-navy-panel/50 to-navy-panel/20 md:rounded-[39px]"
            >
              <Image
                src="/images/autopola-image.png"
                fill
                className="object-contain"
                sizes="(max-width: 940px) 100vw, 940px"
                alt="výsledky"
              />
            </Reveal>
          </div>
        </section>

        <section className="relative mt-[64px] w-full px-[24px] md:mt-[100px] md:px-[106px]">
          <div className="relative mx-auto flex w-full max-w-[1048px] flex-col items-center gap-[24px] text-center">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[20px] font-black uppercase text-transparent md:text-[24px]">
              <RevealText>
                Len za posledných 6 mesiacov sa k nim na servis cez tieto
                reklamy objednalo už 137 ľudí
              </RevealText>
            </h2>
            <Reveal
              duration={600}
              className="w-full max-w-[642px] font-sans text-[16px] text-white md:text-[20px] leading-[120%]"
            >
              <p>
                Navyše som im urobil aj &bdquo;osvetovú&ldquo; kampaň na
                sociálne siete, kedy som absolvoval natáčanie s
                profesionálnym slovenským pretekárom Maťom Homolom. Výstupom
                boli viaceré videoreklamy, ktoré odlíšili servis Auto Pola od
                konkurencie.
              </p>
            </Reveal>
          </div>
        </section>

       

        <section className="mt-[64px] w-full md:mt-[100px]">
          <GallerySlider
            images={[
              "/images/case-studies/auto-pola/gallery-1.png",
              "/images/case-studies/auto-pola/gallery-2.png",
              "/images/case-studies/auto-pola/gallery-3.png",
              "/images/case-studies/auto-pola/gallery-4.png",
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
          <div className="mx-auto flex w-full max-w-[1234px] flex-col items-center gap-[20px] md:gap-[42px]">
            <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[22px] font-black uppercase text-transparent md:text-[29px]">
              <RevealText>Ostatné projekty</RevealText>
            </h2>
            <OtherProjectsSlider currentSlug="auto-pola" />
          </div>
        </section>

        <Faq />
      </main>
      <Footer />
    </>
  );
}
