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

const title = "Fabelli - Marketingová stratégia postavená na prieskume trhu";
const description =
  "Marketingový konzultant Fabelli pripravuje a realizuje akvizičné stratégie postavené na hĺbkovom prieskume trhu. Pozrite si prípadové štúdie a výsledky klientov.";

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
