import React from "react";
import { useCartStore } from "../store/cart";
import CartItemsList from "../components/Cart/CartItemsList";
import CartIssue from "../components/Cart/CartIssue";

const Cart = () => {
  const { cart , adedToOrderProducts } = useCartStore((state) => state);
  return (
      <div className="flex flex-col md:flex-row justify-between gap-10  md:my-4">
        <div className="w-full">
          <CartItemsList cart={cart} />
        </div>
        <div className="w-full md:max-w-[500px]   ">
            <div className=" md:fixed top-[200px] w-full md:w-[500px]">
              <CartIssue cart={cart} adedToOrderProducts={adedToOrderProducts} />
            </div>
        </div>
      </div>
  );
};

export default Cart;
