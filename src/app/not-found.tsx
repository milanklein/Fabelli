import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import GlowCircle from "@/components/GlowCircle";

export const metadata: Metadata = {
  title: "Stránka nenájdená | Fabelli",
  description: "Táto stránka neexistuje.",
};

export default function NotFound() {
  return (
    <>
      <main className="flex flex-1 flex-col bg-background">
        <section className="relative w-full overflow-x-hidden bg-background">
          <GlowCircle className="-top-[300px] -right-[200px]" />
          <GlowCircle className="-left-[300px] top-[400px]" />
          <div className="relative mx-auto flex w-full max-w-[1446px] flex-col gap-[40px] px-[24px] pb-[80px] pt-[40px] sm:gap-[60px] sm:px-[106px] sm:pt-[58px]">
            <Header />

            <div className="flex w-full flex-col items-center py-[40px] text-center sm:py-[80px]">
              <p
                aria-hidden
                className="w-full select-none bg-gradient-to-t from-[#0c1728] via-[#d9ebf8] to-[#f4fafd] bg-clip-text text-center font-heading text-[120px] font-black uppercase leading-none text-transparent opacity-[0.43] sm:text-[280px] sm:leading-[1.05]"
              >
                404
              </p>
              <h1 className="-mt-[16px] w-full max-w-[621px] bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[24px] font-black uppercase leading-normal text-transparent sm:-mt-[32px] sm:text-[38px]">
                Stránka nenájdená
              </h1>
              <p className="mt-[16px] w-full max-w-[500px] font-sans text-[16px] text-white sm:mt-[20px] sm:text-[20px]">
                Stránka, ktorú hľadáte, neexistuje alebo bola presunutá.
              </p>
              <Button href="/" size="lg" className="mt-[40px] sm:mt-[48px]">
                Späť na domovskú stránku
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
