import React, { FC } from "react";
import { useCartStore } from "../../store/cart";
import { ItemProduct } from "../../../types";
import WrappToButtonOrder from "../WrappToButtonOrder";
import { X } from "lucide-react";

interface ICartItemDescriptionProps {
  cartItem: ItemProduct;
  flagAdedToOrder: boolean;
}

const CartItemDescription: FC<ICartItemDescriptionProps> = ({
  cartItem,
  flagAdedToOrder,
}) => {
  const { deleteItemInCart, adedToOrderProdut , deletaToOrderProdut } = useCartStore(
    (state) => state
  );
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">{cartItem.name}</h2>
        <span className="text-myTextGray">
          {cartItem.weight} г /{" "}
          <span className="text-black">{cartItem.price}</span>
        </span>
      </div>
      <div className="flex  items-center gap-10">
        <div className="text-xl text-myTextGray">
          {cartItem.quantity && (
            <span> {cartItem.quantity * cartItem.price} грн </span>
          )}

        </div>
        {/* START Отрисовка кнопки добавления или удаления */}
        {!flagAdedToOrder ? (
          <div className="flex items-center gap-4">
            <WrappToButtonOrder cardItem={cartItem} active={false} />
            <div>
              <X
                className="opacity-20 hover:opacity-100 transition border border-gray-400 rounded-lg mr-2 hover:bg-black hover:text-white duration-300 p-1 h-[30px] w-[30px]"
                onClick={() => deleteItemInCart(cartItem.id)}
              />
            </div>
          </div>
        ) : (
          <div className="flex gap-2 items-center justify-center">
            <span
              className="text-2xl hover:text-red-600 transition w-[30px] "
              onClick={ cartItem.quantity != 0 ? () => deletaToOrderProdut(cartItem.id) : undefined }
            >
              -
            </span>
            <span> {cartItem.quantity} шт </span>
            <span className="text-2xl hover:text-green-600 transition w-[30px]" onClick={ () => adedToOrderProdut(cartItem.id) }>
              +
            </span>
          </div>
        )}

        {/* END Отрисовка кнопки добавления или удаления */}
      </div>
    </div>
  );
};

export default CartItemDescription;
