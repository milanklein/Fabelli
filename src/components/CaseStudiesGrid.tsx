import Image from "next/image";
import Link from "next/link";
import { caseStudies, caseStudyHref } from "@/lib/case-studies";

export default function CaseStudiesGrid() {
  return (
    <section className="w-full px-[24px] pb-[80px] pt-[40px] sm:px-[106px] sm:pb-[120px] sm:pt-[58px]">
      <div className="mx-auto flex w-full max-w-[1234px] flex-col gap-[48px] sm:gap-[64px]">
        <h1 className="font-heading text-[26px] font-black uppercase leading-[1.3] text-white sm:text-[38px]">
          Prípadové štúdie
        </h1>

        <div className="grid grid-cols-1 gap-x-[32px] gap-y-[40px] sm:grid-cols-2 sm:gap-y-[48px] lg:grid-cols-3">
          {caseStudies.map((item) => (
            <Link
              key={item.name}
              href={caseStudyHref(item.slug)}
              className="flex flex-col gap-[20px]"
            >
              <div className="relative flex aspect-[295/152] w-full items-center justify-center overflow-hidden rounded-[24px] bg-gradient-to-r from-[#D9EBF8] to-[#F4FAFD] p-[28px] shadow-[0px_0px_40px_0px_rgba(219,236,248,0.3)] transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src={`/images/logos/${item.logo}`}
                  alt={item.name}
                  width={item.logoWidth}
                  height={item.logoHeight}
                  className="h-auto max-h-full w-auto max-w-full grayscale opacity-60 bg-transparent"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 320px"
                />
              </div>
              <div className="flex flex-col gap-[6px]">
                <h3 className="bg-gradient-to-r from-purple-from to-purple-to bg-clip-text font-heading text-[18px] font-extrabold text-transparent sm:text-[20px]">
                  {item.name}
                </h3>
                <p className="font-sans text-[15px] leading-[1.2] text-white sm:text-[20px] font-semibold">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
