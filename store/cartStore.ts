import { ProductItem } from "@/app/_components/products/product.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  productId: number;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addToCart: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  clearCard: () => void;
  totalQuantity: () => number;
  totalPrice: (products: ProductItem[]) => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (productId) => {
        const items = [...get().items];
        const existing = items.find((item) => item.productId === productId);

        if (existing) {
          //   if (existing.quantity < stock) {
          existing.quantity += 1;
          //   }
        } else {
          //   if (stock > 0)
          items.push({ productId, quantity: 1 });
        }
        set({ items });
      },
      decreaseQuantity: (productId) => {
        const items = [...get().items];
        const existing = items.find((item) => item.productId === productId);

        if (!existing) return;
        if (existing.quantity > 1) {
          existing.quantity -= 1;
        } else {
          const filtered = items.filter((item) => item.productId !== productId);
          set({ items: filtered });
          return;
        }
        set({ items });
      },
      removeFromCart: (productId) => {
        const filtered = get().items.filter((i) => i.productId !== productId);
        set({ items: filtered });
      },
      clearCard: () => set({ items: [] }),
      totalQuantity: () => {
        return get().items.reduce((sum, i) => sum + i.quantity, 0);
      },
      totalPrice: (products) => {
        return get().items.reduce((sum, item) => {
          const product = products.find((p) => p.id === item.productId);
          if (!product) return sum;
          const priceAfterDiscount =
            product.price * (1 - (product.discount || 0) / 100);
          return sum + priceAfterDiscount * item.quantity;
        }, 0);
      },
    }),
    {
      name: "cart-storage",
    },
  ),
);
