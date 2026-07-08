import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlowCircle from "@/components/GlowCircle";
import QualificationForm from "@/components/QualificationForm";

export const metadata: Metadata = {
  title: "Kvalifikačný formulár | Fabelli",
  description:
    "Vyplňte kvalifikačný formulár na strategickú konzultáciu s Fabelli.",
};

export default function QualificationFormPage() {
  return (
    <>
      <main className="flex flex-1 flex-col bg-background overflow-hidden ">
        <section className="relative w-full overflow-hidden bg-background">
          <GlowCircle className="-top-[300px] -right-[200px]" />
          <GlowCircle className="-left-[300px] top-[400px]" />
          <div className="relative mx-auto flex w-full max-w-[1446px] flex-col gap-[60px] px-[24px] pb-[80px] pt-[40px] sm:gap-[103px] sm:px-[106px] sm:pt-[58px]">
            <Header />
            <QualificationForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
