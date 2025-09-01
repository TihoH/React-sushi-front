import React, { FC } from "react";
import { ItemProduct } from "../../../types";

interface ICardItemImageProps {
    cardItem:ItemProduct
}

const CardItemImage:FC<ICardItemImageProps> = ({cardItem}) => {
  return (
    <div className="relative w-full h-56 overflow-hidden rounded-t-xl">
      <img
        src={cardItem.imageUrl}
        alt={cardItem.name}
        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
      />
    </div>
  );
};

export default CardItemImage;
