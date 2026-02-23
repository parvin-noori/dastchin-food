import { ProductItem } from "../products/product.types";

export interface DetailedCartItem extends ProductItem {
  quantity: number;
}