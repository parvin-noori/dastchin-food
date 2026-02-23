"use client";

import { useCartStore } from "@/store/cartStore";
import { FaMinus, FaPlus } from "react-icons/fa6";

type ProductButtonProps = {
  quantity: number;
  productId: number;
};

export default function ProductButton({
  quantity,
  productId,
}: ProductButtonProps) {
  const decreaseProduct = useCartStore((state) => state.decreaseQuantity);
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <>
      {quantity > 0 ? (
        <div className="flex items-center gap-x-2 ms-auto">
          <button className="bg-primary text-white rounded-xl size-7 grid place-content-center cursor-pointer">
            <FaMinus onClick={() => decreaseProduct(productId)} />
          </button>
          <input
            value={quantity}
            className="w-5 text-center outline-none shadow-none"
            readOnly
          />
          <button
            onClick={() => addToCart(productId)}
            className="bg-primary text-white rounded-xl size-7 grid place-content-center cursor-pointer"
          >
            <FaPlus />
          </button>
        </div>
      ) : (
        <button
          onClick={() => addToCart(productId)}
          className="bg-primary text-white rounded-xl size-7 grid place-content-center cursor-pointer"
        >
          <FaPlus />
        </button>
      )}
    </>
  );
}
