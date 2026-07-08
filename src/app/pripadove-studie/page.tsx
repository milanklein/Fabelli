import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudiesGrid from "@/components/CaseStudiesGrid";

export const metadata: Metadata = {
  title: "Prípadové štúdie | Fabelli",
  description: "Prípadové štúdie klientov Fabelli",
};

export default function PripadoveStudiePage() {
  return (
    <>
      <main className="flex flex-1 flex-col bg-background">
        <div className="mx-auto w-full max-w-[1446px] px-[24px] pt-[40px] sm:px-[106px] sm:pt-[58px]">
          <Header />
        </div>
        <CaseStudiesGrid />
      </main>
      <Footer />
    </>
  );
}
