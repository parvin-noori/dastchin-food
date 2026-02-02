"use client";

import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderItem } from "./slider.types";

type sliderProps = {
  slides: sliderItem[];
};

export default function Slider({ slides }: sliderProps) {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} className="h-auto">
          <Link href={slide.link ?? "#"} className="h-full">
            <Image
              width={800}
              height={400}
              src={slide.image_url}
              alt={slide.title ?? "image slide"}
              className="w-full rounded-2xl h-full object-cover"
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
