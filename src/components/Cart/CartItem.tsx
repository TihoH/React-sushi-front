import { FC } from "react";
import { ItemProduct } from "../../../types";
import AdedToCart from "../AdedToCart";
import { useStore } from "../../store/app";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

interface ICartItemProps {
  cartItem: ItemProduct;
}

const CartItem: FC<ICartItemProps> = ({ cartItem }) => {
  const { deleteItemInCart } = useStore((state) => state);

  return (
    <div className="flex gap-2 shadow-md p-2 hover:shadow-2xl transition cursor-pointer">
      <Link to={`/product/${cartItem.name}`} state={{ id: cartItem.id }}>
        <img
          src={cartItem.imageUrl}
          className="max-w-[150px]  rounded-md "
          alt="cart item image"
        />
      </Link>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">{cartItem.name}</h2>
          <span className="text-myTextGray">
            {cartItem.weight} г /{" "}
            <span className="text-black">{cartItem.price} грн</span>
          </span>
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
            {cartItem.quantity && cartItem.quantity > 1 ? (
              <span> ( {cartItem.quantity} шт ) </span>
            ) : (
              ""
            )}
          </div>
          <AdedToCart cardItem={cartItem} active={false} />
          <div>
            <X
              className="opacity-20 hover:opacity-100 transition border border-gray-400 rounded-lg mr-2 hover:bg-black hover:text-white duration-300 p-1 h-[30px] w-[30px]"
              onClick={() => deleteItemInCart(cartItem.id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
