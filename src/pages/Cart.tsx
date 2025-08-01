import React from "react";
import { useCartStore } from "../store/cart";
import CartItemsList from "../components/Cart/CartItemsList";
import CartIssue from "../components/Cart/CartIssue";

const Cart = () => {
  const { cart , adedToOrderProducts } = useCartStore((state) => state);
  return (
      <div className="flex justify-between gap-10 my-4">
        <div className="w-full">
          <CartItemsList cart={cart} />
        </div>
        <div className="max-w-[500px] w-full  ">
            <div className="fixed top-[200px] w-[500px]">
              <CartIssue cart={cart} adedToOrderProducts={adedToOrderProducts} />
            </div>
        </div>
      </div>
  );
};

export default Cart;
