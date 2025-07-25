import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set, get) => ({
      currentCategory: "deliveryDnepr",
      activeAdedCartPopup: false,
      cart: [],

      setCurrentCategory: (val) => set({ currentCategory: val }),

      adedToCart: (val) => {
        const cart = get().cart;
        const findItemCart = cart.find((item) => item.id === val.product.id);

        if (!findItemCart) {
          set({ cart: [...cart, { ...val.product, quantity: 1 }] });
        } else {
          set({
            cart: cart.map((item) =>
              item.id === val.product.id
                ? { ...item, quantity: (item.quantity || 1) + 1 }
                : item
            ),
          });
        }

        set({ activeAdedCartPopup: val.active });
        setTimeout(() => set({ activeAdedCartPopup: false }), 4000);
      },

      deleteItemCart: (val) => {
        const cart = get().cart;
        set({
          cart: cart
            .map((item) =>
              item.id === val ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter((item) => item.quantity > 0),
        });
      },
    }),
    {
      name: "cart-storage", // ключ localStorage
      partialize: (state) => ({ cart: state.cart }), // сохраняем только cart
    }
  )
);