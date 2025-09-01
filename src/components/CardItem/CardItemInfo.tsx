import { CircleDollarSign } from "lucide-react";
import React, { FC } from "react";
import { ItemProduct } from "../../../types";

interface ICardItemInfoProps {
    cardItem: ItemProduct
}

const CardItemInfo:FC<ICardItemInfoProps> = ({cardItem}) => {
  return (
    <div>
      {/* Вага та кешбек */}
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span className="font-medium">{cardItem.weight} г</span>
        <div className="flex items-center gap-1 text-gray-600">
          <CircleDollarSign className="text-orange-400" size={18} />
          <p className="text-xs">
            Кешбек від <span className="text-red-500 font-bold">5%</span>
          </p>
        </div>
      </div>

      {/* Назва */}
      <h3 className="text-lg md:text-xl font-bold text-gray-800 mt-2">
        {cardItem.name.toLocaleUpperCase()}
      </h3>

      {/* Опис */}
      <p className="text-gray-600 text-sm mt-1 flex-1">
        {cardItem.description.slice(0, 70)}...
      </p>
    </div>
  );
};

export default CardItemInfo;
