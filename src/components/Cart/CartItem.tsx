import { FC } from "react";
import { ItemProduct } from "../../../types";
import { Link } from "react-router-dom";
import CartItemDescription from "./CartItemDescription";

interface ICartItemProps {
  cartItem: ItemProduct;
  flagAdedToOrder?: boolean;
}

const CartItem: FC<ICartItemProps> = ({
  cartItem,
  flagAdedToOrder = false,
}) => {
  return (
    <div className="md:flex md:flex-row gap-2 shadow-md p-2 hover:shadow-2xl transition cursor-pointer">
      <div className="flex pt-5">
        <Link to={`/product/${cartItem.name}`} state={{ id: cartItem.id }}>
          <img
            src={cartItem.imageUrl}
            className="w-[140px] md:max-w-[150px]  rounded-md "
            alt="cart item image"
          />
        </Link>
        <div className=" md:hidden flex flex-col flex-1 text-center">
          <h2 className="text-lg font-semibold">{cartItem.name}</h2>
          <span className="text-myTextGray">
            {cartItem.weight} г /{" "}
            <span className="text-black">{cartItem.price} грн</span>
          </span>
        </div>  
      </div>
      <CartItemDescription
        cartItem={cartItem}
        flagAdedToOrder={flagAdedToOrder}
      />
    </div>
  );
};

export default CartItem;
