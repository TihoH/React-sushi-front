import React from "react";
import { useStore } from "../store/app";
import CustomButton from "../UI/CustomButton";

const AdedToCart = ({ cardItem }) => {
  const { adedToCart, cart, deleteItemCart } = useStore((state) => state);

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
        onClick={(e) => addedItemToCart(e)}
        className={`${findItemInCart && "border-2 border-green-600 "}  `}
      >
        {!findItemInCart || !findItemInCart.quantity ? (
          "В Кошик"
        ) : (
          <div className="flex gap-2 items-center">
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
