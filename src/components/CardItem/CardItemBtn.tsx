import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import { useAppStore } from "../../store/app";
import { userFavoritesStore } from "../../store/userFavorites";
import { ItemProduct } from "../../../types";
import { Star } from "lucide-react";
import GroupBtnProduct from "../GroupBtnProduct";

interface ICardItemBtnProps {
  changeToFavorites: (e, cardItem: ItemProduct, value: string) => void;
  isActiveLoader: boolean;
  cardItem: ItemProduct
  selectedId?: number
}

const CardItemBtn: FC<ICardItemBtnProps> = ({ cardItem , changeToFavorites , isActiveLoader , selectedId}) => {
  const authUser = useAppStore((state) => state.authUser);
  const allIdFavorites = userFavoritesStore((state) => state.allIdFavorites);
  const findIdFavorites = allIdFavorites.includes(cardItem.id);
  const location = useLocation();
  const nameLink = location.state?.nameLink ?? "";
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-lg font-extrabold text-green-600">
          {cardItem.price} грн
        </span>
        <GroupBtnProduct cardItem={cardItem} />
      </div>

      {/* Обране */}
      <button
        className={`flex md:px-4 md:hover:scale-[1.2] cursor-pointer transition-all items-center gap-2 text-sm ${
          nameLink === "Favorites" ? "text-red-600 hover:text-red-800" : findIdFavorites && authUser
            ? "text-green-600" : "text-gray-500 hover:text-yellow-500"
        }`}
        onClick={(e) =>
          changeToFavorites(
            e,
            cardItem,
            nameLink === "Favorites" ? "delete" : ""
          )
        }
        disabled={findIdFavorites && nameLink !== "Favorites"}
      >
        {isActiveLoader && selectedId === cardItem.id ? (
          <span className="w-4 h-4 border-2 border-t-transparent border-current rounded-full animate-spin"></span>
        ) : (
          <div className="flex gap-2">
            <span>
              {nameLink === "Favorites"
                ? "Видалити"
                : findIdFavorites && authUser
                ? "Додано"
                : "Додати в обране"}
            </span>
            <Star size={22} />
          </div>
        )}
      </button>
    </div>
  );
};

export default CardItemBtn;
