import { FC } from "react";
import { ItemProduct } from "../../../types";
import CardItemImage from "./CardItemImage";
import CardItemInfo from "./CardItemInfo";
import CardItemBtn from "./CardItemBtn";

interface ICardItemProps {
  cardItem: ItemProduct;
  changeToFavorites: (e, cardItem: ItemProduct, value: string) => void;
  isActiveLoader: boolean;
  selectedId: number;
}

const CardItem: FC<ICardItemProps> = ({
  cardItem,
  changeToFavorites,
  isActiveLoader,
  selectedId
}) => {
  return (
    <div className="rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer bg-white flex flex-col min-h-[480px]">
      {/* Зображення */}
      <CardItemImage cardItem={cardItem} />

      {/* Контент */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <CardItemInfo cardItem={cardItem} />
        {/* Ціна і кнопка */}
        <CardItemBtn
          cardItem={cardItem}
          changeToFavorites={changeToFavorites}
          isActiveLoader={isActiveLoader}
          selectedId={selectedId}
        />
      </div>
    </div>
  );
};

export default CardItem;
