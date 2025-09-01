import React, { FC } from "react";
import { ItemProduct } from "../../../types";
import CartItem from "../Cart/CartItem";

interface IListItemsOrderProps {
  listOrders: ItemProduct[];
}

const ListItemsOrder: FC<IListItemsOrderProps> = ({ listOrders }) => {
    console.log(listOrders)

  return (
    <ul>
        {listOrders.map((item , index) => <CartItem key={index} cartItem={item}  />)}
    </ul>
  );
};

export default ListItemsOrder;
