"use client";

import Image from "next/image";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { ProductItem } from "./product.types";

type ProductsProps = {
  product: ProductItem;
};

export default function Product({ product }: ProductsProps) {
  const discountedPrice = product.price * (1 - 5 / 100);

  const [showModal, setShowModal] = useState<boolean>(false);
  //     const toggleCollapsed = ():void => {
  //     setCollapsed(!collapsed);
  //   };

  const closeModal = (): void => {
    setShowModal(false);
  };

  return (
    <>
      <div
        className="bg-white text-center rounded-3xl relative p-4 rounded-2xl hover:shadow-xl transition-all duration-200 cursor-pointer group"
        onClick={() => setShowModal(true)}
      >
        <Image
          width={500}
          height={500}
          src={product.image_url}
          alt={product.title}
          className="aspect-square drop-shadow-xl group-hover:rotate-10 transition-all duration-500 absolute top-0 -translate-y-1/2 translate-x-1/2 start-1/2 w-2/3"
        />
        <div className="flex flex-col space-y-2 mt-22">
          <span className="text-xl font-semibold">{product.title}</span>
          <p>{product.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex space-x-3">
              <span className="text-red-600 line-through">
                {product.price.toLocaleString()}
              </span>
              <span className="text-green-600">
                {discountedPrice.toLocaleString()}
              </span>
            </div>
            <button className="bg-primary text-white rounded-xl size-7 grid place-content-center">
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <div
          className="overlay bg-black/80 fixed inset-0 z-10"
          onClick={closeModal}
        ></div>
      )}
    </>
  );
}
