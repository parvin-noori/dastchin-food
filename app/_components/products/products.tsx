"use client";

import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductModal from "./Modal";
import Product from "./product";
import { ProductItem, ProductReview } from "./product.types";

type ProductsProps = {
  products: ProductItem[];
  reviews:ProductReview[];
  title: string;
};

export default function Products({ products, title ,reviews}: ProductsProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(
    null,
  );

  const openModal = (product: ProductItem) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = (): void => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="flex items-center justify-between md:py-10 py-5">
        <span className="text-2xl font-bold">{title}</span>
      </div>
      <Swiper
        className="w-full md:!py-20 !pt-24 !overflow-visible"
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
          <SwiperSlide key={item.id} className="!h-auto">
            <Product product={item} openModal={openModal} />
          </SwiperSlide>
        ))}
      </Swiper>
      {showModal && selectedProduct && (
        <ProductModal product={selectedProduct} reviews={reviews} closeModal={closeModal}/>
      )}
      {showModal && (
        <>
          <div
            className="overlay bg-black/80 fixed inset-0 z-10"
            onClick={closeModal}
          ></div>
        </>
      )}
    </>
  );
}
