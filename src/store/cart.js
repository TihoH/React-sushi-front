import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
          activeAdedCartPopup: false,
      cart: [],
      adedToOrderProducts: [
    {
      name: "Пакет",
      id: 111,
      imageUrl:
        "https://cdn.wesushi.com.ua/ws-uk/products/0001-paket-we.png?&w=280&h=280&format=auto&mode=fit&q=80",
      weight: "-",
      price: 3,
      quantity: 1,
    },
    {
      name: "Палички для їжі",
      id: 112,
      imageUrl:
        "https://cdn.wesushi.com.ua/ws-uk/products/0001-palichki-dlya-yizhi-bezk-we.png?&w=280&h=280&format=auto&mode=fit&q=80",
      weight: "-",
      price: 5,
      quantity: 1,
    },
    {
      name: "Соєвий соус 40 мл",
      id: 113,
      imageUrl:
        "https://cdn.wesushi.com.ua/ws-uk/products/0001-soyevij-sous-50-ml-bezk-we.png?&w=280&h=280&format=auto&mode=fit&q=80",
      weight: "40",
      price: 15,
      quantity: 1,
    },
    {
      name: "Набір імбир васабі 1 порція",
      id: 114,
      imageUrl:
        "https://cdn.wesushi.com.ua/ws-uk/products/0001-nabir-imbir-vasabi-1-porciya-bezk-we.png?&w=280&h=280&format=auto&mode=fit&q=80",
      weight: "15",
      price: 15,
      quantity: 1,
    },
      ] ,

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
      deleteItemInCart: (val) => {
       set( {cart:  get().cart.filter( item => item.id != val )} )
      } ,
      clearCart: () => {
        set({ cart: [] })
      },
      adedToOrderProdut: (val) => {
        const adedToOrderProducts = get().adedToOrderProducts ;
        set({ adedToOrderProducts: adedToOrderProducts.map( item => item.id === val ? {...item , quantity: item.quantity + 1} : item ) })
        console.log(get().cart , get().adedToOrderProducts)
      },
           deletaToOrderProdut: (val) => {
        const adedToOrderProducts = get().adedToOrderProducts ;
        set({ adedToOrderProducts: adedToOrderProducts.map( item => item.id === val ? {...item , quantity: item.quantity - 1} : item ) })
        console.log(get().cart , get().adedToOrderProducts)
      }

    }),
    {
      name: "cart-storage", // ключ localStorage
      partialize: (state) => ({ cart: state.cart }), // сохраняем только cart
    }
  )
);