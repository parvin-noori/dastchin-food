"use client";

import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import ProductButton from "../productButton/productButton";
import { ProductItem } from "./product.types";

type ProductsProps = {
  product: ProductItem;
  // showModal: boolean;
  openModal: (product: ProductItem) => void;
};

export default function Product({ product, openModal }: ProductsProps) {
  const discountedPrice = product.price * (1 - product.discount / 100);
  const cartItems = useCartStore((state) => state.items);
  const productInCart = cartItems.find((item) => item.productId === product.id);
  const productQuantity = productInCart ? productInCart.quantity : 0;

  //     const toggleCollapsed = ():void => {
  //     setCollapsed(!collapsed);
  //   };

  return (
    <>
      <div className="bg-white text-center rounded-3xl relative p-4 rounded-2xl hover:shadow-xl transition-all duration-200  group">
        <Image
          width={500}
          height={500}
          src={product.image_url}
          alt={product.title}
          className="aspect-square drop-shadow-xl group-hover:rotate-10 transition-all duration-500 absolute top-0 -translate-y-1/2 translate-x-1/2 start-1/2 md:w-2/3 w-1/2"
        />
        <div className="flex flex-col space-y-2 mt-22">
          <div
            className="flex flex-col space-y-2 cursor-pointer"
            onClick={() => openModal(product)}
          >
            <span className="text-xl font-semibold">{product.title}</span>
            <p>{product.description}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <span
                className={`${product.discount > 0 ? "text-red-600 line-through" : "text-green-600"}`}
              >
                {product.price.toLocaleString()}
              </span>
              {product.discount > 0 && (
                <span className="text-green-600">
                  {discountedPrice.toLocaleString()}
                </span>
              )}
            </div>
            <ProductButton
              quantity={productQuantity}
              productId={product.id}
              stock={product.stock}
            />
          </div>
        </div>
      </div>
    </>
  );
}
