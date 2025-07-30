import React, { FC } from "react";
import { ItemProduct } from "../../../types";
import CartItem from "./CartItem";
import { useStore } from "../../store/app";

interface ICartItemsListProps {
  cart: ItemProduct[];
}

const CartItemsList: FC<ICartItemsListProps> = ({ cart }) => {

  const { clearCart } = useStore( state => state )

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-2">{cart.length ? 'Моє замовлення' : 'Ваш кошик пустий '}</h1>
        <button className="text-yellow-600" onClick={ () => clearCart() }>Очистити кошик</button>
      </div>
      <div className="flex flex-col gap-4">
        {cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
    </div>
  );
};

export default CartItemsList;
