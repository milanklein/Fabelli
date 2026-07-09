import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudiesGrid from "@/components/CaseStudiesGrid";

const title = "Prípadové štúdie | Fabelli";
const description =
  "Prípadové štúdie klientov Fabelli – reálne výsledky marketingových stratégií naprieč rôznymi odvetviami, od gastra až po servisy a školy.";

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
