"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { caseStudies, caseStudyHref } from "@/lib/case-studies";
import { ArrowCircleUpIcon } from "./icons";

import "swiper/css";

export default function OtherProjectsSlider({
  currentSlug,
}: {
  currentSlug?: string;
}) {
  const swiperRef = useRef<SwiperType | null>(null);
  const projects = caseStudies.filter(
    (project) => project.slug !== currentSlug,
  );

  return (
    <div className="flex w-full flex-col items-center gap-[32px] overflow-hidden py-20 px-4">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        grabCursor
        spaceBetween={24}
        slidesPerView={1.15}
        breakpoints={{
          640: { slidesPerView: 2.2, spaceBetween: 32 },
          1024: { slidesPerView: 3, spaceBetween: 32 },
        }}
        className="w-full !overflow-visible !pb-[8px]"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.slug}>
            <Link
              href={caseStudyHref(project.slug)}
              className="flex flex-col gap-[20px]"
            >
              <div className="relative aspect-[295/152] w-full overflow-hidden rounded-[24px] bg-gradient-to-r from-[#D9EBF8] to-[#F4FAFD] shadow-[0px_0px_20px_0px_rgba(219,236,248,0.6)]">
                <Image
                  src={`/images/logos/${project.logo}`}
                  alt={project.name}
                  fill
                  className="p-[28px] grayscale opacity-60"
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 320px"
                />
              </div>
              <div className="flex flex-col gap-[6px]">
                <h3 className="bg-gradient-to-r from-purple-from to-purple-to bg-clip-text font-heading text-[18px] font-extrabold text-transparent sm:text-[20px]">
                  {project.name}
                </h3>
                <p className="font-sans text-[15px] font-semibold leading-[1.2] text-white sm:text-[18px]">
                  {project.description}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center justify-center gap-[16px]">
        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Predchádzajúci projekt"
          className="cursor-pointer transition-opacity hover:opacity-90"
        >
          <ArrowCircleUpIcon className="size-[40px] rotate-180 opacity-25" />
        </button>
        <button
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Ďalší projekt"
          className="cursor-pointer transition-opacity hover:opacity-90"
        >
          <ArrowCircleUpIcon className="size-[40px]  opacity-25" />
        </button>
      </div>
    </div>
  );
}
