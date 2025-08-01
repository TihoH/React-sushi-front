import React from "react";
import CartItem from "./Cart/CartItem";
import { useCartStore } from "../store/cart";

const AdedToOrder = () => {
    const {adedToOrderProducts} = useCartStore( store => store )
    
  return (
    <div>
      <div className="mt-4 mb-1 flex flex-1 ">
        <h2 className="text-3xl">Додадково до замовлення</h2>
      </div>
      <div className="flex flex-col gap-4">
        {adedToOrderProducts.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} flagAdedToOrder={true} />
        ))}
      </div>
    </div>
  );
};

export default AdedToOrder;
