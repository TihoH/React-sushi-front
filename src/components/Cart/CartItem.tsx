import React, { FC } from "react";
import { ItemProduct } from "../../../types";
import CustomButton from "../../UI/CustomButton";
import AdedToCart from "../AdedToCart";

interface ICartItemProps {
  cartItem: ItemProduct;
}

const CartItem: FC<ICartItemProps> = ({ cartItem }) => {
  return (
    <div className="flex gap-2 shadow-md p-2 hover:shadow-2xl transition cursor-pointer">
      <img
        src={cartItem.imageUrl}
        className="max-w-[150px]  rounded-md "
        alt="cart item image"
      />
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">{cartItem.name}</h2>
          <span className="text-myTextGray">{cartItem.weight} г / <span className="text-black">{cartItem.price} грн</span></span>
          
        </div>
        <div className="flex  items-center gap-10">
          <div className="text-xl text-myTextGray">
            <span>
              {" "}
              {cartItem.quantity
                ? cartItem.quantity * cartItem.price
                : cartItem.price}{" "}
              грн
            </span>
            {cartItem.quantity && cartItem.quantity > 1 ? <span> ( {cartItem.quantity} шт ) </span> : '' }
          </div>
          <AdedToCart cardItem={cartItem} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
