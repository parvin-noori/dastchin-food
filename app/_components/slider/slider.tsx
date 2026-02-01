"use client";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Slider() {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      <SwiperSlide>
        <img
          src="/assets/imgs/slider/slider_1.jpg"
          alt="slider image 1"
          className="w-full h-auto rounded-2xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/assets/imgs/slider/slider_2.jpg"
          alt="slider image 2"
          className="w-full h-auto rounded-2xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/assets/imgs/slider/slider_3.jpg"
          alt="slider image 3"
          className="w-full h-auto rounded-2xl"
        />
      </SwiperSlide>
    </Swiper>
  );
}
