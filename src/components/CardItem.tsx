import React, { FC } from "react";
import { ItemProduct } from "../../types";
import { CircleDollarSign } from "lucide-react";
import CustomButton from "../UI/CustomButton";
import { useStore } from "../store/app";
import AdedToCart from "./AdedToCart";

interface ICardItemProps {
  cardItem: ItemProduct;
}

const CardItem: FC<ICardItemProps> = ({ cardItem }) => {
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
    <div className="rounded-lg shadow-xl w-full hover:shadow-gray-400 transition cursor-pointer max-h-[500px] h-full">
      <img src={cardItem.imageUrl} alt="sushi image" className="rounded-t-md" />
      <div className="p-4 flex gap-4 flex-col h-full ">
        <div className="flex justify-between">
          <span className="font-medium">{cardItem.weight} г</span>
          <div className="flex gap-2">
            <span>
              <CircleDollarSign color="#FD9D7E" />
            </span>
            <p>
              Кешбек від <span className="text-red-500 font-extrabold">5%</span>
            </p>
          </div>
        </div>
        <div className="text-xl font-medium">
          {cardItem.name.toLocaleUpperCase()}
        </div>
        <div className="">{cardItem.description.slice(0, 70)}...</div>
        <div className="flex items-center justify-between">
          <span className="font-bold">{cardItem.price} ГРН</span>
          <AdedToCart cardItem={cardItem} />
        </div>
      </div>
    </div>
  );
};

export default CardItem;
