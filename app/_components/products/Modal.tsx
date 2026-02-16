import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { ProductItem, ProductReview } from "./product.types";
import { Reviews } from "./reviews";

type ProductModalProps = {
  product: ProductItem;
  reviews: ProductReview[];
  closeModal: () => void;
};

export default function ProductModal({
  product,
  reviews,
  closeModal,
}: ProductModalProps) {
  const discountedPrice = product.price * (1 - 5 / 100);
  const productComment = reviews.filter(
    (review) => review.product_id === product.id,
  );

  return (
    <div className="bg-white rounded-2xl xl:w-1/2 lg:w-8/12 md:w-9/12 w-11/12 p-5 z-30 fixed top-1/2 start-1/2 overflow-hidden translate-x-1/2 -translate-y-1/2 max-h-content">
      <button className="cursor-pointer" onClick={closeModal}>
        <MdClose className="text-gray-600" size={24} />
      </button>
      <div className="flex items-center space-x-2">
        <Image
          width={500}
          height={500}
          src={product.image_url}
          alt={product.title}
          className="aspect-square drop-shadow-xl w-44"
        />
        <div className="flex flex-col space-y-2 grow">
          <span className="text-xl font-semibold">{product.title}</span>
          <p>{product.description}</p>
          <div className="flex items-center justify-between py-2">
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
          <div className="space-x-2 flex items-center">
            <TbTruckDelivery size={26} />
            <span className="text-green-600">تحویل در ۳۰ دقیقه</span>
          </div>
        </div>
      </div>
      {productComment.length > 0 && (
        <div className="mt-5 flex-1 overflow-auto">
          <Reviews reviews={productComment} />
        </div>
      )}
    </div>
  );
}
