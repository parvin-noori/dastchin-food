"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { categoryItem } from "./category.types";

type categoryProps = {
  categories: categoryItem[];
};
export default function Category(props: categoryProps) {
  const { categories } = props;
  const [errorImages, setErrorImages] = useState<Record<string, boolean>>({});

  const handleError = (id: number) => {
    setErrorImages((prev) => ({ ...prev, [id]: true }));
  };
  return (
    <Swiper
      className="w-full !pb-12"
      loop={true}
      modules={[Pagination]}
      spaceBetween={10}
      pagination={{ clickable: true }}
      breakpoints={{
        320: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 6,
          slidesPerGroup: 6,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 8,
          slidesPerGroup: 8,
          spaceBetween: 20,
        },
      }}
    >
      {categories.map((item) => (
        <SwiperSlide
          key={item.id}
          className="!h-auto flex flex-col space-y-3 text-center font-bold"
        >
          <Link href={item.link} className="w-full aspect-square block">
            {errorImages[item.id] ? (
              <div className="w-full h-full bg-gray-300 rounded-2xl animate-pulse"></div>
            ) : (
              <Image
                width={100}
                height={100}
                src={item.imageurl}
                alt={item.title}
                className="w-full rounded-2xl h-full object-cover"
                onError={() => handleError(item.id)}
              />
            )}
          </Link>
          <span>{item.title}</span>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
