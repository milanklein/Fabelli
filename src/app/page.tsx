import type { Metadata } from "next";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import IntroStatement from "@/components/IntroStatement";
import Testimonials from "@/components/Testimonials";
import ProcessIntro from "@/components/ProcessIntro";
import ProcessTimeline from "@/components/ProcessTimeline";
import ComparisonTable from "@/components/ComparisonTable";
import PortfolioGrid from "@/components/PortfolioGrid";
import PerformanceSection from "@/components/PerformanceSection";
import Disqualifiers from "@/components/Disqualifiers";
import CtaBanner from "@/components/CtaBanner";
import Faq from "@/components/Faq";
import ClosingCta from "@/components/ClosingCta";
import Footer from "@/components/Footer";
import OtherProjectsSlider from "@/components/OtherProjectsSlider";
import RevealText from "@/components/RevealText";

const title = "Fabián Smriga - akvizičné systémy postavené na dvoch týždňoch prieskumu";
const description =
  "Nie som agentúra ani špecialista. Ani jeden z týchto modelov nefunguje na prinášanie výsledkov každému klientovi. Vytvoril som nový, hybridný model. Viac o ňom na tomto webe.";

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

export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col bg-background">
        {/* <Hero /> */}
        {/* <LogoStrip />
        <IntroStatement /> */}
        {/* <Testimonials /> */}
        <ProcessIntro />
        <ProcessTimeline />
        <ComparisonTable /> 
        {/* <PortfolioGrid /> */}
        <PerformanceSection />
        <Disqualifiers />
        <CtaBanner />
        <Faq />
        <ClosingCta /> 
          <section className="mt-[24px] w-full px-0 sm:mt-[100px] sm:px-[106px]">
                  <div className="mx-auto flex w-full max-w-[1234px] flex-col items-center gap-[20px] md:gap-[42px]">
                    <div>

                      <p className="text-center font-sans text-[18px] text-white md:text-[20px] uppercase">
            Stále si nie ste istý?
          </p>
                    <h2 className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[22px] font-black uppercase text-transparent sm:text-[29px]">
                      <RevealText>Prípadové štúdie</RevealText>
                    </h2>
                    </div>
                    <OtherProjectsSlider currentSlug="jovitep" />
                  </div>
                </section> 
      </main>
      <Footer />
    </>
  );
}                   
