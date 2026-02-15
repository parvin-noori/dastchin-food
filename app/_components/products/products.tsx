"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Product from "./product";
import { ProductItem } from "./product.types";

type ProductsProps = {
  products: ProductItem[];
  title: string;
};

export default function Products({ products, title }: ProductsProps) {
  return (
    <>
      <div className="flex items-center justify-between py-10">
        <span className="text-2xl font-bold">{title}</span>
      </div>
      <Swiper
        className="w-full !py-20 !overflow-visible"
        spaceBetween={20}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            slidesPerGroup: 1,
          },
          640: {
            slidesPerView: 2.5,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: 3.5,
            slidesPerGroup: 3,
          },
          1280: {
            slidesPerView: 4.5,
            slidesPerGroup: 4,
          },
        }}
      >
        {products.map((item) => (
          <SwiperSlide
            key={item.id}
            className="!h-auto"
          >
            <Product product={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
