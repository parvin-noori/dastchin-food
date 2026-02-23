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
    }),
    {
      name: "cart-storage",
    },
  ),
);
