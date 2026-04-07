import { create } from "zustand"
import { persist } from "zustand/middleware"

export type CartItem = {
  id: string
  name: string
  price: number
  quantity: number
}

type CartStore = {
  items: CartItem[]
  total: number

  addToCart: (product: Omit<CartItem, "quantity">) => void
  removeFromCart: (id: string) => void
  decreaseQty: (id: string) => void
  clearCart: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,

      addToCart: (product) =>
        set((state) => {
          const existing = state.items.find((i) => i.id === product.id)

          let updatedItems

          if (existing) {
            updatedItems = state.items.map((i) =>
              i.id === product.id
                ? { ...i, quantity: i.quantity + 1 }
                : i
            )
          } else {
            updatedItems = [...state.items, { ...product, quantity: 1 }]
          }

          return {
            items: updatedItems,
            total: updatedItems.reduce(
              (acc, item) => acc + item.price * item.quantity,
              0
            ),
          }
        }),

      decreaseQty: (id) =>
        set((state) => {
          const updatedItems = state.items
            .map((i) =>
              i.id === id
                ? { ...i, quantity: i.quantity - 1 }
                : i
            )
            .filter((i) => i.quantity > 0)

          return {
            items: updatedItems,
            total: updatedItems.reduce(
              (acc, item) => acc + item.price * item.quantity,
              0
            ),
          }
        }),

      removeFromCart: (id) =>
        set((state) => {
          const updatedItems = state.items.filter((i) => i.id !== id)

          return {
            items: updatedItems,
            total: updatedItems.reduce(
              (acc, item) => acc + item.price * item.quantity,
              0
            ),
          }
        }),

      clearCart: () => set({ items: [], total: 0 }),
    }),
    {
      name: "cogi-cart-storage",
    }
  )
)
