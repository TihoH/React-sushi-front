import React, { FC } from "react";
import { ItemProduct } from "../../../types";
import CartItem from "./CartItem";

interface ICartItemsListProps {
  cart: ItemProduct[];
}

const CartItemsList: FC<ICartItemsListProps> = ({ cart }) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-2">Моє замовлення</h1>
        <span className="text-yellow-600">Очистити кошик</span>
      </div>
      <div className="flex flex-col gap-4">
        {cart.map((cartItem) => (
          <CartItem cartItem={cartItem} />
        ))}
      </div>
    </div>
  );
};

export default CartItemsList;
