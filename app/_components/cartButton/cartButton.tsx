"use client";

import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import ProductButton from "../productButton/productButton";
import { ProductItem } from "../products/product.types";
import { DetailedCartItem } from "./cart.types";

export default function CartButton({ products }: { products: ProductItem[] }) {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggleCollapsed = (): void => {
    setCollapsed(!collapsed);
  };

  const closeCollapsed = (): void => {
    setCollapsed(false);
  };

  const cartItems = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.totalPrice(products));
  const cartQuantity = useCartStore((state) => state.totalQuantity());
  const clearCart = useCartStore((state) => state.clearCard);
  const detailedCart: DetailedCartItem[] = cartItems
    .map((cartItem) => {
      const product = products.find((item) => item.id === cartItem.productId);
      if (!product) return null;

      return { ...product, quantity: cartItem.quantity };
    })
    .filter((item): item is DetailedCartItem => item !== null);

  return (
    <>
      <button onClick={toggleCollapsed} className="cursor-pointer">
        <FiShoppingCart size={23} />
      </button>
      <div
        className={`${collapsed ? "translate-x-0" : "-translate-x-full"} h-full  divide-gray-200  duration-500 transition-all md:w-xs w-full md:rounded-r-2xl bg-white fixed end-0 top-0 z-20`}
      >
        <div className="flex items-center justify-between p-3">
          <button
            onClick={closeCollapsed}
            className=" cursor-pointer  hover:bg-gray-100 rounded-full transiton-color duration-300 p-1.5 border-0"
          >
            <MdClose size={25} />
          </button>
          {cartQuantity > 0 && (
            <button
              onClick={clearCart}
              className=" cursor-pointer hover:bg-gray-100 rounded-full transiton-color duration-300 p-1.5 border-0"
            >
              <BiTrash size={16} />
            </button>
          )}
        </div>

        <ul className="flex flex-col h-[80%] overflow-y-auto divide-y divide-gray-200">
          {detailedCart.map((item) => {
            const discountedPrice = item.price * (1 - item.discount / 100);

            return (
              <li
                key={item.id}
                className="flex items-center gap-x-3 hover:bg-gray-200 p-5 transition-all duration-300"
              >
                <Image
                  src={item.image_url}
                  width={100}
                  height={100}
                  alt={item.title}
                />
                <div className="flex flex-col grow space-y-5">
                  <div className="flex items-center space-x-1">
                    <span>{item.title}</span>
                    <span className="bg-red-600 h-5 p-1 rounded text-white text-xs font-bold">
                      {item.discount}%
                    </span>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <div className="flex flex-col">
                      <span
                        className={`${item.discount > 0 ? "text-red-600 line-through" : "text-green-600"}`}
                      >
                        {item.price.toLocaleString()}
                      </span>
                      {item.discount > 0 && (
                        <span className="text-green-600">
                          {discountedPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <ProductButton
                      quantity={item.quantity}
                      productId={item.id}
                      stock={item.stock}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="fixed bottom-0 w-full p-1 space-y-1">
          <div className="rounded-lg bg-primary text-white p-3 text-center">
            {totalPrice.toLocaleString()} تومان
          </div>
          <button
            type="submit"
            className="rounded-lg cursor-pointer border border-primary text-primary w-full p-2 text-center hover:bg-primary hover:text-white transition-all duration-300 disabled:!border-gray-300 disabled:hover:cursor-not-allowed disabled:bg-gray-300 disabled:text-white"
            disabled={cartQuantity === 0}
          >
            پرداخت نهایی
          </button>
        </div>
      </div>
      {collapsed && (
        <div
          className="overlay bg-black/80 fixed inset-0 z-10"
          onClick={closeCollapsed}
        ></div>
      )}
    </>
  );
}
