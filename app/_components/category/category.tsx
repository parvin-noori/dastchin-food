"use client";

import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { categoryItem } from "./category.types";

type categoryProps = {
  categories: categoryItem[];
};
export default function Category(props: categoryProps) {
  const { categories } = props;
  return (
    <Swiper
      spaceBetween={20}
      loop={true}
      breakpoints={{
        320: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 6,
        },
        1280: {
          slidesPerView: 8,
        },
      }}
      className="w-full"
    >
      {categories.map((item) => (
        <SwiperSlide
          key={item.id}
          className="!h-auto flex flex-col space-y-3 text-center font-bold"
        >
          <Link href={item.link} className="h-[80%] block">
            <Image
              width={100}
              height={100}
              src={item.imageurl}
              alt={item.title}
              className="w-full rounded-2xl h-full object-cover"
            />
          </Link>
          <span>{item.title}</span>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
