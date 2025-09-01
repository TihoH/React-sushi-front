import React from "react";
import { useCartStore } from "../store/cart";
import CartItemsList from "../components/Cart/CartItemsList";
import CartIssue from "../components/Cart/CartIssue";
import { useLocation, useNavigate } from "react-router-dom";

const Cart = () => {
 const cart = useCartStore(state => state.cart);
const adedToOrderProducts = useCartStore(state => state.adedToOrderProducts);
const navigate = useNavigate()

const pushOrder = () => {
  const newOrder = [...cart ,   ...adedToOrderProducts]
  navigate('/ChekoutOrder' , {
    state: newOrder
  })
}

// console.log(cart)
// console.log(adedToOrderProducts)

  return (
      <div className="flex flex-col md:flex-row justify-between gap-10   mt-14 md:mt-4 mb-2">
        <div className="w-full">
          <CartItemsList cart={cart} />
        </div>
        <div className="w-full md:max-w-[500px]   ">
            <div className=" md:fixed top-[200px] w-full md:w-[500px]">
              <CartIssue cart={cart} adedToOrderProducts={adedToOrderProducts} pushOrder={pushOrder} />
            </div>
        </div>
      </div>
  );
};

export default Cart;
