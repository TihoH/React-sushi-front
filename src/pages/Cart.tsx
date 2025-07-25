import React from "react";
import { useStore } from "../store/app";
import CartItemsList from "../components/Cart/CartItemsList";
import CartIssue from "../components/Cart/CartIssue";

const Cart = () => {
  const { cart } = useStore((state) => state);
  return (
      <div className="flex justify-between gap-10 my-4">
        <div className="w-full">
          <CartItemsList cart={cart} />
        </div>
        <div className="max-w-[400px] w-full ">
            <CartIssue />
        </div>
      </div>
  );
};

export default Cart;
