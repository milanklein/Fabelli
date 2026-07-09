"use client";

import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Reveal from "./Reveal";
import RevealText from "./RevealText";
import { ArrowCircleUpIcon } from "./icons";
import VideoEmbed from "./VideoEmbed";

import "swiper/css";

const testimonials = [
  {
    id: "85220005-4ab1-4d2a-a3e6-d9b772200b1e",
    quote: "Jedna z najlepších spoluprác akú som v živote zažil.",
    name: "Tomáš",
  },
  {
    id: "4ab0e6f9-81f1-4eb3-afa6-8ae3a6ffbbd9",
    quote: "Nikomu nezáležalo na projekte viac ako Fabiánovi.",
    name: "Jovinečko",
  },
  {
    id: "0e179b8a-bd00-4fd3-9614-0089e02f92f1",
    quote: "Mohol som mať viac klientov a aj zvýšiť ceny.",
    name: "Matess",
  },
];

// Swiper's loop mode needs enough real slides to fill the viewport twice over
// to avoid its clone-boundary from running out of content, which the default
// 3 slides don't provide here — so we repeat the set and track the absolute
// (post-repeat) index instead of the logical 0-2 testimonial index.
const REPEATS = 3;
const slides = Array.from({ length: REPEATS }, () => testimonials).flat();
const START_INDEX = testimonials.length + 1;

export default function Testimonials() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(START_INDEX);

  return (
    <section className="mt-[80px] w-full px-0 md:mt-[158px] md:px-[106px] overflow-hidden ">
      <div className="mx-auto flex w-full max-w-[900px] flex-col items-center gap-[20px] sm:gap-[40px] lg:gap-[62px] overflow-hidden">
        <h2 className="w-full bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-center font-heading text-[22px] font-black uppercase leading-[1.5] text-transparent md:text-[29px] px-4">
          <RevealText>
            Keď si marketér urobí <br /> svoju prácu poriadne
          </RevealText>
        </h2>

        <div className="flex w-full flex-col items-center gap-[40px] md:gap-[58px] py-4 md:py-10">
          <Reveal delay={0} duration={600} className="w-full">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              initialSlide={START_INDEX}
              centeredSlides
              loop
              grabCursor
              slidesPerView="auto"
              spaceBetween={16}
              breakpoints={{ 768: { spaceBetween: 48 } }}
              className="w-full !overflow-visible !py-[8px]"
            >
              {slides.map((testimonial, i) => {
                const isActive = i === activeIndex;
                return (
                  <SwiperSlide
                    key={`${testimonial.id}-${i}`}
                    className="!flex !w-[280px] !flex-col !items-center !justify-end"
                  >

                    <p
                      className={`md:hidden block mb-[24px] max-w-[220px] text-center font-sans text-[13px] font-bold uppercase italic leading-[1.4] transition-opacity duration-300 md:max-w-[280px] md:text-[16px]  ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <span className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-transparent block w-full">
                        ,,{testimonial.quote}&rdquo;
                      </span>
                      <br />
                      <span className="bg-gradient-to-r from-purple-from to-purple-to bg-clip-text text-transparent block w-full">
                        -{testimonial.name}
                      </span>
                    </p>
                    <div
                      className={`relative  shrink-0 overflow-hidden rounded-[26px] transition-[transform,filter,opacity] duration-500 ease-out h-[553px] w-[280px] md:rounded-[40px] ${
                        isActive
                          ? "scale-100 opacity-100 shadow-[0px_0px_43px_0px_rgba(219,236,248,0.59)]"
                          : "scale-[0.775] opacity-70 blur-[2px] md:blur-[4px]"
                      }`}
                    >
                      <VideoEmbed
                        libraryId="695134"
                        videoId={testimonial.id}
                        overlay={isActive}
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

                    <p
                      className={`hidden md:block mt-[16px] max-w-[220px] text-center font-sans text-[13px] font-bold uppercase italic leading-[1.4] transition-opacity duration-300 md:max-w-[280px] md:text-[16px] ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <span className="bg-gradient-to-r from-heading-from to-heading-to bg-clip-text text-transparent block w-full">
                        ,,{testimonial.quote}&rdquo;
                      </span>
                      <br />
                      <span className="bg-gradient-to-r from-purple-from to-purple-to bg-clip-text text-transparent block w-full" >
                        -{testimonial.name}
                      </span>
                    </p>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Reveal>

          <div className="flex items-center gap-[16px]">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Predchádzajúce video"
              className="cursor-pointer transition-opacity hover:opacity-90"
            >
              <ArrowCircleUpIcon className="size-[60px] rotate-180 opacity-40" />
            </button>
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Ďalšie video"
              className="cursor-pointer transition-opacity hover:opacity-90"
            >
              <ArrowCircleUpIcon className="size-[60px] opacity-40" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
