import { FC } from "react";
import { ItemProduct } from "../../../types";
import { Link } from "react-router-dom";
import CartItemDescription from "./CartItemDescription";

interface ICartItemProps {
  cartItem: ItemProduct;
  flagAdedToOrder?: boolean;
}

const CartItem: FC<ICartItemProps> = ({ cartItem, flagAdedToOrder = false }) => {

  return (
    <div className="flex gap-2 shadow-md p-2 hover:shadow-2xl transition cursor-pointer">
      <Link to={`/product/${cartItem.name}`} state={{ id: cartItem.id }}>
        <img
          src={cartItem.imageUrl}
          className="max-w-[150px]  rounded-md "
          alt="cart item image"
        />
      </Link>
      <CartItemDescription cartItem={cartItem} flagAdedToOrder={flagAdedToOrder} />
    </div>
  );
};

export default CartItem;
