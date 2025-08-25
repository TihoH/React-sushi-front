import { FC } from "react";
import { ItemProduct } from "../../types";
import { CircleDollarSign, Star } from "lucide-react";
import WrappToButtonOrder from "./WrappToButtonOrder";
import { useAppStore } from "../store/app";
import { userFavoritesStore } from "../store/userFavorites";
interface ICardItemProps {
  cardItem: ItemProduct;
  adedToFavorites: (e , cardItem: ItemProduct ) => void
}

const CardItem: FC<ICardItemProps> = ({ cardItem , adedToFavorites }) => {
  const { userId , authUser } = useAppStore(
    (state) => state
  );
  const { allIdFavorites } = userFavoritesStore((state) => state);
  const findIdFavorites = allIdFavorites.includes(cardItem.id);

  return (
    <div className="rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer bg-white flex flex-col min-h-[480px]">
      {/* Зображення */}
      <div className="relative w-full h-56 overflow-hidden rounded-t-xl">
        <img
          src={cardItem.imageUrl}
          alt={cardItem.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Контент */}
      <div className="p-4 flex flex-col justify-between flex-1">
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

        {/* Ціна і кнопка */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-lg font-extrabold text-green-600">
              {cardItem.price} грн
            </span>
            <WrappToButtonOrder cardItem={cardItem} />
          </div>

          {/* Обране */}
          <button
            className={`flex md:px-4 md:hover:scale-[1.2] transition-all items-center gap-2 text-sm ${
              findIdFavorites && authUser
                ? "text-green-600"
                : "text-gray-500 hover:text-yellow-500 hover:scale-120"
            }`}
            onClick={(e) => adedToFavorites(e , cardItem)}
            disabled={findIdFavorites} // если уже добавлено, кнопка неактивна
          >
            <span>{findIdFavorites && authUser ? "Додано" : "Додати в обране"}</span>
            <Star size={22} />
          </button>
        </div>
      </div>

    </div>
  );
};

export default CardItem;
