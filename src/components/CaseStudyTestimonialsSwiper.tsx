"use client";

import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowCircleUpIcon } from "./icons";

import "swiper/css";

interface TestimonialVideoConfig {
  libraryId: string;
  videoId: string;
}

interface CaseStudyTestimonialsSwiperProps {
  videos: TestimonialVideoConfig[];
  className?: string;
}

// Swiper's loop mode needs enough real slides to fill the viewport twice over
// to avoid its clone-boundary from running out of content — see Testimonials.tsx.
const REPEATS = 3;

export default function CaseStudyTestimonialsSwiper({
  videos,
  className = "",
}: CaseStudyTestimonialsSwiperProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const slides = Array.from({ length: REPEATS }, () => videos).flat();
  const startIndex = videos.length + 1;
  const [activeIndex, setActiveIndex] = useState(startIndex);

  return (
    <div className={`mx-auto flex w-full max-w-[1040px] flex-col items-center gap-[24px] overflow-hidden py-4 ${className}`}>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        initialSlide={startIndex}
        centeredSlides
        loop
        grabCursor
        slidesPerView="auto"
        spaceBetween={16}
        breakpoints={{ 640: { spaceBetween: 48 } }}
        className="w-full !overflow-visible !py-[8px]"
      >
        {slides.map((video, i) => {
          const isActive = i === activeIndex;
          return (
            <SwiperSlide
              key={`${video.videoId}-${i}`}
              className="!flex !w-[183px] !items-end !justify-center sm:!w-[280px]"
            >
              <div
                className={`relative h-[360px] w-[183px] shrink-0 overflow-hidden rounded-[26px] transition-[transform,filter,opacity] duration-500 ease-out sm:h-[553px] sm:w-[280px] sm:rounded-[40px] ${
                  isActive
                    ? "scale-100 opacity-100 shadow-[0px_0px_43px_0px_rgba(219,236,248,0.59)]"
                    : "scale-[0.775] opacity-70 blur-[2px] sm:blur-[4px]"
                }`}
              >
                <iframe
                  src={`https://player.mediadelivery.net/embed/${video.libraryId}/${video.videoId}?autoplay=false&loop=false&muted=false&preload=true&responsive=true`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full border-0"
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen;"
                  allowFullScreen
                />
                {!isActive && (
                  <button
                    type="button"
                    aria-label="Zobraziť toto video"
                    onClick={() => swiperRef.current?.slideTo(i)}
                    className="absolute inset-0 cursor-pointer"
                  />
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex items-center gap-[16px]">
        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Predchádzajúce video"
          className="cursor-pointer transition-opacity hover:opacity-90"
        >
          <ArrowCircleUpIcon className="size-[48px] rotate-180 opacity-40" />
        </button>
        <button
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Ďalšie video"
          className="cursor-pointer transition-opacity hover:opacity-90"
        >
          <ArrowCircleUpIcon className="size-[48px] opacity-40" />
        </button>
      </div>
    </div>
  );
}
