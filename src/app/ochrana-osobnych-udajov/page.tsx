import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlowCircle from "@/components/GlowCircle";

const title = "Ochrana osobných údajov | Fabelli";
const description =
  "Informácie o spracúvaní osobných údajov a súhlas so spracovaním osobných údajov na stránke Fabelli s. r. o.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [{ url: "/thumbnails/thumbnail_main.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/thumbnails/thumbnail_main.png"],
  },
};

function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col gap-[12px]">
      <h2 className="font-heading text-[18px] font-black uppercase text-white md:text-[22px]">
        {heading}
      </h2>
      <div className="flex flex-col gap-[12px] font-sans text-[15px] leading-[1.6] text-white/70 md:text-[16px]">
        {children}
      </div>
    </div>
  );
}

export default function OchranaOsobnychUdajovPage() {
  return (
    <>
      <main className="flex flex-1 flex-col bg-background overflow-hidden">
        <section className="relative w-full overflow-x-hidden bg-background">
          <GlowCircle className="-top-[300px] -right-[200px]" />
          <div className="relative mx-auto flex w-full max-w-[1446px] flex-col gap-[40px] px-[24px] pb-[40px] pt-[40px] md:gap-[60px] md:px-[106px] md:pt-[58px]">
            <Header />

            <div className="flex w-full flex-col items-start gap-[16px]">
              <span className="font-heading text-[18px] font-black uppercase text-purple-from md:text-[24px]">
                Súhlas so spracovaním osobných údajov
              </span>
              <h1 className="w-full bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[26px] font-black uppercase leading-normal text-transparent md:text-[38px]">
                Ochrana osobných údajov
              </h1>
              <p className="font-sans text-[14px] text-white/50">
                Platné od 23. januára 2026
              </p>
            </div>
          </div>
        </section>

        <section className="relative mt-[24px] w-full px-[24px] md:mt-[40px] md:px-[106px]">
          <div className="relative mx-auto flex w-full max-w-[900px] flex-col gap-[40px] md:gap-[48px]">
            <Section heading="1. Prevádzkovateľ">
              <p>
                Prevádzkovateľom osobných údajov je spoločnosť{" "}
                <strong className="text-white">Fabelli s. r. o.</strong>, so
                sídlom Slnečná 1028/17A, 900 28 Zálesie, IČO: 57427186, DIČ:
                2122726540, IČ DPH: SK2122726540, zapísaná v Obchodnom
                registri Mestského súdu Bratislava III, oddiel: Sro, vložka
                č. 195587/B (ďalej len „prevádzkovateľ“).
              </p>
              <p>
                Kontaktovať prevádzkovateľa vo veciach ochrany osobných
                údajov môžete na e-maile{" "}
                <a
                  href="mailto:fabiansmriga@gmail.com"
                  className="text-white underline hover:no-underline"
                >
                  fabiansmriga@gmail.com
                </a>{" "}
                alebo telefonicky na čísle{" "}
                <a
                  href="tel:+421919170732"
                  className="text-white underline hover:no-underline"
                >
                  +421 919 170 732
                </a>
                .
              </p>
            </Section>

            <Section heading="2. Aké osobné údaje spracúvame">
              <p>
                Pri vyplnení kvalifikačného formulára na strategickú
                konzultáciu spracúvame tieto údaje, ktoré nám sami
                poskytnete: meno a priezvisko, telefónne číslo, e-mailová
                adresa, odkaz na vašu webstránku/sociálne siete, informácie o
                vašom podnikaní (spôsob správy marketingu, priemerný mesačný
                obrat, cieľ spolupráce) a vaša odpoveď na otázku o dostupnosti
                pre kontaktovanie.
              </p>
              <p>
                Pri prehliadaní stránky ďalej spracúvame technické
                identifikátory (napr. cookies <code>_fbp</code>,{" "}
                <code>_fbc</code>) v prípade, že ste na to udelili súhlas v
                cookie lište.
              </p>
              <p>
                Videá na stránke sú vkladané prostredníctvom služby Bunny.net
                (video hosting). Pri ich zobrazení sa vaša požiadavka
                spracúva priamo serverom tejto služby, nezávisle od vášho
                súhlasu s cookies — ide o technicky nevyhnutnú súčasť
                zobrazenia obsahu stránky.
              </p>
            </Section>

            <Section heading="3. Účel a právny základ spracovania">
              <p>
                Osobné údaje z kvalifikačného formulára spracúvame na účel
                vyhodnotenia vhodnosti spolupráce a následného kontaktovania
                za účelom ponuky strategickej konzultácie. Právnym základom
                je váš súhlas so spracovaním osobných údajov udelený pri
                odoslaní formulára (čl. 6 ods. 1 písm. a) Nariadenia GDPR) a
                vykonanie opatrení pred uzatvorením zmluvy na vašu žiadosť
                (čl. 6 ods. 1 písm. b) Nariadenia GDPR).
              </p>
              <p>
                Údaje z cookies spracúvame na účel merania výkonnosti
                marketingových kampaní (Meta Pixel) na základe vášho súhlasu
                udeleného v cookie lište, ktorý môžete kedykoľvek odvolať v
                pätičke stránky.
              </p>
            </Section>

            <Section heading="4. Príjemcovia osobných údajov">
              <p>
                Osobné údaje z formulára spracúvame prostredníctvom týchto
                nástrojov (sprostredkovateľov):
              </p>
              <ul className="flex list-disc flex-col gap-[6px] pl-[20px]">
                <li>
                  <strong className="text-white">Google (Google Sheets)</strong>{" "}
                  — na uloženie a spracovanie odpovedí z formulára.
                </li>
                <li>
                  <strong className="text-white">Make (Celonis s.r.o.)</strong>{" "}
                  — na automatizované spracovanie a prepojenie dát medzi
                  nástrojmi.
                </li>
                <li>
                  <strong className="text-white">
                    Meta Platforms Ireland Limited
                  </strong>{" "}
                  — na meranie výkonnosti reklamných kampaní (Meta Pixel),
                  len ak ste udelili súhlas s marketingovými cookies.
                </li>
                <li>
                  <strong className="text-white">Bunny.net</strong> — na
                  hosting a prehrávanie videí umiestnených na stránke.
                </li>
              </ul>
              <p>
                Vaše údaje neposkytujeme žiadnym iným tretím stranám okrem
                prípadov, keď nám to ukladá zákon.
              </p>
            </Section>

            <Section heading="5. Doba uchovávania">
              <p>
                Osobné údaje z kvalifikačného formulára uchovávame po dobu
                nevyhnutnú na vyhodnotenie a prípadnú realizáciu spolupráce,
                najdlhšie však 24 mesiacov od ich poskytnutia, pokiaľ váš
                súhlas neodvoláte skôr.
              </p>
            </Section>

            <Section heading="6. Vaše práva">
              <p>Ako dotknutá osoba máte najmä právo:</p>
              <ul className="flex list-disc flex-col gap-[6px] pl-[20px]">
                <li>na prístup k svojim osobným údajom,</li>
                <li>na opravu nesprávnych alebo neúplných údajov,</li>
                <li>na vymazanie osobných údajov („právo na zabudnutie“),</li>
                <li>na obmedzenie spracúvania,</li>
                <li>na prenosnosť údajov,</li>
                <li>
                  kedykoľvek odvolať svoj súhlas so spracovaním osobných
                  údajov, a to bez toho, aby to malo vplyv na zákonnosť
                  spracúvania založeného na súhlase pred jeho odvolaním,
                </li>
                <li>
                  podať sťažnosť na Úrad na ochranu osobných údajov Slovenskej
                  republiky (
                  <a
                    href="https://dataprotection.gov.sk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline hover:no-underline"
                  >
                    dataprotection.gov.sk
                  </a>
                  ), ak sa domnievate, že spracúvaním vašich osobných údajov
                  boli porušené vaše práva.
                </li>
              </ul>
              <p>
                Svoje práva môžete uplatniť na kontaktných údajoch uvedených
                v bode 1. Súhlas s marketingovými cookies môžete kedykoľvek
                zmeniť aj priamo v pätičke stránky.
              </p>
            </Section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
