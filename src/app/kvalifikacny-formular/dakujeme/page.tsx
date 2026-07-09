import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlowCircle from "@/components/GlowCircle";
import Faq from "@/components/Faq";
import PortfolioGrid from "@/components/PortfolioGrid";
import ComparisonTable from "@/components/ComparisonTable";
import Testimonials from "@/components/Testimonials";
import TestimonialsTY from "@/components/TestimonialsTY";
import VideoEmbed from "@/components/VideoEmbed";

export const metadata: Metadata = {
  title: "Ďakujem za vyplnenie | Fabelli",
  description: "Vyplnili ste kvalifikačný formulár na strategický hovor.",
};



export default function ThankYouPage() {
  return (
    <>
      <main className="flex flex-1 flex-col bg-background">
        <section className="relative w-full overflow-x-hidden bg-background">
          <GlowCircle className="-top-[300px] -right-[200px]" />
          <GlowCircle className="-left-[300px] top-[400px]" />
          <div className="relative mx-auto flex w-full max-w-[1446px] flex-col gap-[60px] px-[24px] pb-[80px] pt-[40px] md:gap-[70px] md:px-[106px] md:pt-[58px]">
            <Header />

            <div className="relative mx-auto w-full max-w-[1105px] overflow-hidden rounded-[30px] bg-gradient-to-br from-navy-panel/40 to-navy-panel/10 px-[24px] py-[48px] sm:rounded-[51px] md:px-[80px] md:py-[64px]">
              <Image
                src="/images/hero-logomark.svg"
                alt=""
                width={400}
                height={260}
                aria-hidden
                className="pointer-events-none absolute -left-[80px] -top-[60px] hidden h-auto w-[320px] opacity-[0.08] sm:block"
              />
              <div className="relative flex w-full text-center  flex-col items-start gap-[20px]">
                <h1 className="w-full bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[24px] font-black uppercase leading-normal text-transparent sm:text-[38px] leading-[1.2]">
                  Vyplnili ste kvalifikačný formulár na strategický hovor
                </h1>
                <p className="w-full font-sans text-[16px] text-white sm:text-[20px]">
                  Počas najbližších 48 hodín si prejdem vašu firmu a
                  odpovede. Ak sa kvalifikujete, ozvem sa vám.
                </p>
              </div>
            </div>

            <div className="flex w-full justify-center">
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                fill="none"
                className="size-[32px] animate-bounce sm:size-[40px]"
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="flex w-full flex-col items-center gap-[40px] sm:gap-[60px]">
              <p className="w-full text-center font-sans text-[18px] font-bold text-white sm:text-[20px]">
                Pozrite si toto video!
              </p>
              <div className="relative aspect-video w-full max-w-[900px] overflow-hidden rounded-[24px] shadow-[0px_0px_43px_0px_rgba(219,236,248,0.59)] sm:rounded-[40px]">
                <VideoEmbed
                overlay={false}
                  libraryId="695141"
                  videoId="c425154e-ad41-444d-a88b-b09586ce7503"
                />
              </div>
              <p className="w-full max-w-[900px] bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[18px] font-black uppercase leading-[1.4] text-transparent sm:text-[20px]">
                Ak sa kvalifikujete, tieto informácie by ste mali vedieť
                pred našim úvodným hovorom
              </p>
              <div className=" w-full max-w-[900px]">
                
              <p className="w-full text-center font-sans text-[18px] text-white sm:text-[20px] mb-6 ">
                Čo sa deje na úvodnom hovore?
              </p>
              <div className="relative aspect-video w-full max-w-[900px] overflow-hidden rounded-[24px] shadow-[0px_0px_43px_0px_rgba(219,236,248,0.59)] sm:rounded-[40px]">
                <VideoEmbed
                overlay={false}
                  libraryId="695141"
                  videoId="762ebcee-8a32-4cd6-9432-099b3f7ae1b6"
                />
                  </div>
              </div>
            </div>
          </div>
        </section>
<TestimonialsTY />
        <PortfolioGrid />
      <ComparisonTable />
        <Faq />

      </main>
      <Footer />
    </>
  );
}
