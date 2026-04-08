import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: string;
  name: string;
  price: number; // Toujours en centimes
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  addToCart: (product: Omit<CartItem, "quantity">) => void;
  decreaseQty: (id: string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],

      // Ajoute ou incrémente
      addToCart: (product) =>
        set((state) => {
          const existing = state.items.find((i) => i.id === product.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          }
          return { items: [...state.items, { ...product, quantity: 1 }] };
        }),

      // Décrémente ou supprime si la quantité tombe à zéro
      decreaseQty: (id) =>
        set((state) => ({
          items: state.items
            .map((i) =>
              i.id === id ? { ...i, quantity: i.quantity - 1 } : i
            )
            .filter((i) => i.quantity > 0), // Sécurité absolue
        })),

      // Supprime totalement la ligne
      removeFromCart: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),

      // Vide le panier (utile après le paiement Stripe)
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cogi-cart-storage",
    }
  )
);
