import React, { FC } from "react";
import { useCartStore } from "../store/cart";
import CustomButton from "../UI/CustomButton";
import { ItemProduct } from "../../types";

interface IAdedToCartProps {
cardItem: ItemProduct ,
widthBtn?: number ,
active?: boolean
}

const AdedToCart:FC<IAdedToCartProps> = ({ cardItem, widthBtn , active }) => {
  const { adedToCart, cart, deleteItemCart } = useCartStore((state) => state);

  const findItemInCart = cart.find((item) => item.id === cardItem.id);

  const addedItemToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    adedToCart({ product: cardItem, active: true });
  };

  const deleteItemInCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    deleteItemCart(cardItem.id);
  };
  return (
    <div className="flex justify-between items-center">
      <CustomButton
        widthBtn={widthBtn}
        active={active}
        onClick={(e) => addedItemToCart(e)}
        className={`${findItemInCart && "border border-gray-300 "} text-center `}
      >
        {!findItemInCart || !findItemInCart.quantity ? (
          "В Кошик"
        ) : (
          <div className="flex gap-2 items-center justify-center">
            <span
              className="text-2xl hover:text-red-600 transition w-[30px] "
              onClick={(e) => deleteItemInCart(e)}
            >
              -
            </span>
            <span> {findItemInCart.quantity} шт </span>
            <span className="text-2xl hover:text-green-600 transition w-[30px] ">
              +
            </span>
          </div>
        )}
      </CustomButton>
    </div>
  );
};

export default AdedToCart;
