import React, { FC } from "react";
import { useCartStore } from "../../store/cart";
import { ItemProduct } from "../../../types";
import WrappToButtonOrder from "../WrappToButtonOrder";
import { X } from "lucide-react";
import CustomButton from "../../UI/CustomButton";

interface ICartItemDescriptionProps {
  cartItem: ItemProduct;
  flagAdedToOrder: boolean;
}

const CartItemDescription: FC<ICartItemDescriptionProps> = ({
  cartItem,
  flagAdedToOrder,
}) => {
  const { deleteItemInCart, adedToOrderProdut, deletaToOrderProdut } =
    useCartStore((state) => state);
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full ">
      <div className="flex items-center md:items-start justify-between md:flex-col gap-2 w-full my-1">
        <h2 className="hidden md:block text-xl font-semibold">
          {cartItem.name}
        </h2>
        <span className="text-myTextGray hidden md:block">
          {cartItem.weight} г /{" "}
          <span className="text-green-600 font-bold">{cartItem.price} грн</span>
        </span>
      </div>
      <div className="flex justify-between w-full items-center md:pl-10 ">
        <div className="text-xl text-myTextGray">
          {cartItem.quantity && (
            <span className="text-green-600 font-bold">
              {flagAdedToOrder && cartItem.quantity < 2 ? (
                <span className="text-green-700">безкоштовно</span>
              ) : (
                cartItem.quantity * cartItem.price + "грн "
              )}
            </span>
          )}
        </div>
        {/* START Отрисовка кнопки добавления или удаления */}
        {!flagAdedToOrder ? (
          <div className="flex items-center gap-4 relative ">
            <WrappToButtonOrder cardItem={cartItem} active={false} />
            <div className="absolute md:static -top-[110px] -right-2 ">
              <X
                className="opacity-20 hover:opacity-100 transition border border-gray-400 rounded-lg mr-2 hover:bg-black hover:text-white duration-300 p-1 h-[30px] w-[30px]"
                onClick={() => deleteItemInCart(cartItem.id)}
              />
            </div>
          </div>
        ) : (
          <CustomButton active={false} className="mt-2 md:mt-0 flex gap-2 items-center">
            <span
              className="text-2xl hover:text-red-600 transition w-[30px] "
              onClick={
                cartItem.quantity != 0
                  ? () => deletaToOrderProdut(cartItem.id)
                  : undefined
              }
            >
              -
            </span>
            <div className="flex">
              <span>{cartItem.quantity}</span> <span>шт</span>
            </div>
            <span
              className="text-2xl hover:text-green-600 transition w-[30px]"
              onClick={() => adedToOrderProdut(cartItem.id)}
            >
              +
            </span>
          </CustomButton>
        )}

        {/* END Отрисовка кнопки добавления или удаления */}
      </div>
    </div>
  );
};

export default CartItemDescription;
