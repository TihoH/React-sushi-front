import React, { FC } from "react";
import { ItemProduct } from "../../../types";
import CartItem from "./CartItem";
import { useCartStore } from "../../store/cart";
import AdedToOrder from "../AdedToOrder";

interface ICartItemsListProps {
  cart: ItemProduct[];
}

const CartItemsList: FC<ICartItemsListProps> = ({ cart }) => {
  const { clearCart } = useCartStore((state) => state);

  return (
    <div className="flex flex-col bg-white shadow-lg rounded-xl p-1 sm:p-4 md:p-6 min-h-full">
      {/* Заголовок и кнопка очистки */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b pb-2 sm:pb-3 md:pb-4 mb-3 sm:mb-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
          {cart.length ? "Моє замовлення" : "Ваш кошик пустий"}
        </h1>
        {cart.length > 0 && (
          <button
            className="text-red-500 hover:text-red-600 font-medium text-sm mt-1 md:mt-0 transition"
            onClick={() => clearCart()}
          >
            Очистити кошик ✕
          </button>
        )}
      </div>

      {/* Список товаров */}
      <div className="flex flex-col gap-3 sm:gap-4">
        {cart.map((cartItem) => (
          <div
            key={cartItem.id}
            className="bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition p-3 sm:p-4"
          >
            <CartItem cartItem={cartItem} />
          </div>
        ))}
      </div>

      {/* Кнопка оформления */}
      {cart.length > 0 && (
        <div className="mt-4 sm:mt-6 flex justify-end">
          <AdedToOrder />
        </div>
      )}
    </div>
  );
};

export default CartItemsList;
