import  { FC } from "react";
import { useCartStore } from "../store/cart";
import { ItemProduct } from "../../types";

interface IAdedToCartProps {
  cardItem: ItemProduct;
  activeTypePrise?: boolean
}

const AdedToCart: FC<IAdedToCartProps> = ({ cardItem  , activeTypePrise}) => {
  const adedToCart = useCartStore((state) => state.adedToCart);
  const cart = useCartStore((state) => state.cart);
    const adedToOrderProducts = useCartStore((state) => state.adedToOrderProducts);
  const deleteItemCart = useCartStore((state) => state.deleteItemCart);
  

  const findItemInCart = !activeTypePrise ? cart.find((item) => item.id === cardItem.id) : adedToOrderProducts.find((item) => item.id === cardItem.id)

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
    <>
      <div
        className={
          "hover:scale-110 transition-all duration-200 rounded-md border "
        }
      >
        {!findItemInCart &&  (
          <button
            onClick={(e) => addedItemToCart(e)}
            className="border border-gray-300 bg-yellow-600 h-[50px] w-[130px] hover:text-white rounded-md text-gray-200"
          >
            В Кошик
          </button>
        )}
        {findItemInCart && (
          <div className="flex bg-green-700 gap-2 items-center justify-center border border-gray-300  h-[50px] w-[130px] hover:text-white rounded-md text-gray-200">
            <button
              className="text-2xl hover:text-red-600 transition w-[30px] "
              onClick={(e) => deleteItemInCart(e)}
            >
              -
            </button>
            <div className="flex">
              <span>{findItemInCart.quantity}</span>
              <span>шт</span>
            </div>
            <button
              onClick={(e) => addedItemToCart(e)}
              className="text-2xl hover:text-green-600 transition w-[30px]  "
            >
              +
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default AdedToCart;
