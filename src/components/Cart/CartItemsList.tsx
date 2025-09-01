import React, { FC } from "react";
import { ItemProduct } from "../../../types";
import CartItem from "./CartItem";
import { useCartStore } from "../../store/cart";
import AdedToOrder from "../AdedToOrder";

interface ICartItemsListProps {
  cart: ItemProduct[];
}

const CartItemsList: FC<ICartItemsListProps> = ({ cart }) => {
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <div className="flex flex-col bg-white shadow-xl rounded-2xl p-4 sm:p-6 md:p-8 min-h-full">
      {/* Заголовок и кнопка очистки */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-200 pb-3 sm:pb-4 mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 break-words">
          {cart.length ? "Моє замовлення" : "Ваш кошик пустий"}
        </h1>
        {cart.length > 0 && (
          <button
            className="mt-2 sm:mt-0 text-red-500 hover:text-red-600 font-semibold text-sm transition-colors"
            onClick={() => clearCart()}
          >
            Очистити кошик ✕
          </button>
        )}
      </div>

      {/* Список товаров */}
      <div className="flex flex-col gap-4">
        {cart.map((cartItem) => (
          <div
            key={cartItem.id}
            className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition p-4 sm:p-5"
          >
            <CartItem cartItem={cartItem} />
          </div>
        ))}
      </div>

      {/* Кнопка оформления */}
      {cart.length > 0 && (
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:justify-end gap-3">
          {/* <AdedToOrder className="w-full sm:w-auto" /> */}
             <AdedToOrder  />
        </div>
      )}
    </div>
  );
};

export default CartItemsList;
