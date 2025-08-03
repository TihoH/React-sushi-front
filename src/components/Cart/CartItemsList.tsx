import React, { FC } from "react";
import { ItemProduct } from "../../../types";
import CartItem from "./CartItem";
import { useCartStore } from "../../store/cart";
import AdedToOrder from "../AdedToOrder";

interface ICartItemsListProps {
  cart: ItemProduct[];
}

const CartItemsList: FC<ICartItemsListProps> = ({ cart }) => {
  const { clearCart  } = useCartStore((state) => state);

  return (
    <div className="flex flex-col  md:mt-0  min-h-full">
      <div className=" flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-2xl md:text-3xl md:my-2">
          {cart.length ? "Моє замовлення" : "Ваш кошик пустий "}
        </h1>
        <button className="text-yellow-600 my-1 md:my-0 text-start" onClick={() => clearCart()}>
          Очистити кошик
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
        {cart.length ? <AdedToOrder /> : ''}
    </div>
  );
};

export default CartItemsList;
