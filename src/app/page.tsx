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

export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col bg-background">
        <Hero />
        <LogoStrip />
        <IntroStatement />
        <Testimonials />
        <ProcessIntro />
        <ProcessTimeline />
        <ComparisonTable />
        <PortfolioGrid />
        <PerformanceSection />
        <Disqualifiers />
        <CtaBanner />
        <Faq />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}                   
