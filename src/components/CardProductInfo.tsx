import React, { FC, useState } from "react";
import { ItemProduct } from "../../types";
import { BanknoteArrowDown, Gift, Info, Star, Truck } from "lucide-react";

import { useAppStore } from "../store/app";
import { userFavoritesStore } from "../store/userFavorites";
import GroupBtnProduct from "./GroupBtnProduct";

interface ICardProductsInfoProps {
  product: ItemProduct;
}

const CardProductInfo: FC<ICardProductsInfoProps> = ({ product }) => {
  if (!product) {
    return null;
  }
  const userId = useAppStore((state) => state.userId);
  const addToFavorites = userFavoritesStore((state) => state.addToFavorites);
  const allIdFavorites = userFavoritesStore((state) => state.allIdFavorites);
  const findIdFavorites = allIdFavorites.includes(product.id);
  const [isActiveLoader, setIsActiveLoader] = useState(false);

  const changeToFavorites = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    product: ItemProduct
  ) => {
    e.preventDefault();
    setIsActiveLoader(true);
    setTimeout(() => {
      addToFavorites(userId, product, setIsActiveLoader);
    }, 200);
  };

  return (
    <div className="w-full bg-white p-4 sm:p-6 rounded-xl shadow-lg">
      <div className="flex justify-between items-center gap-4">
        <h1 className="text-xl sm:text-3xl font-bold text-gray-800 break-words">
          {product.name.toLocaleUpperCase()}
        </h1>

        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
            findIdFavorites
              ? "bg-green-100 border-green-400 text-green-600"
              : "bg-yellow-50 border-yellow-300 text-gray-600 hover:bg-yellow-100 hover:text-yellow-600"
          }`}
          onClick={(e) => changeToFavorites(e , product) }
          disabled={findIdFavorites}
        >
          {isActiveLoader ? (
            <span className="w-4 h-4 border-2 border-t-transparent border-current rounded-full animate-spin"></span>
          ) : (
            <div className="flex gap-2 items-center">
              <span className="text-sm font-medium">
                {findIdFavorites ? "Додано" : "В обране"}
              </span>
              <Star size={18} />
            </div>
          )}
        </button>
      </div>

      {/* Вага */}
      <p className="text-base sm:text-lg text-gray-600 mt-2">
        <span className="font-medium">Вага: </span>
        {product.weight} г
      </p>

      {/* Цена и кнопка "В корзину" */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-4">
        <span className="text-2xl sm:text-[42px] font-bold text-green-600">
          {product.price} грн
        </span>
        <GroupBtnProduct cardItem={product} />
      </div>

      {/* Інфо блоки */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-gray-700 text-sm sm:text-base">
        <div className="flex gap-3 items-center">
          <Gift className="text-yellow-500 flex-shrink-0" />
          <span>
            За покупку буде нараховано{" "}
            <span className="font-semibold">32 бали</span>
          </span>
        </div>

        <div className="flex gap-3 items-center">
          <BanknoteArrowDown className="text-yellow-500 flex-shrink-0" />
          <span>
            Кешбек від <span className="text-red-600 font-bold">5%</span>
          </span>
        </div>

        <div className="flex gap-3 items-center">
          <Truck className="text-yellow-500 flex-shrink-0" />
          <a
            href="/"
            className="border-b border-dashed border-black hover:text-blue-800 transition-colors"
          >
            Карта доставки
          </a>
        </div>

        <div className="flex gap-3 items-center">
          <Info className="text-yellow-500 flex-shrink-0" />
          <a
            href="/"
            className="border-b border-dashed border-black hover:text-blue-800 transition-colors"
          >
            Деталі акції
          </a>
        </div>
      </div>

      {/* Склад */}
      <div className="mt-6">
        <span className="font-bold text-gray-800">Склад: </span>
        <span className="text-gray-600">{product.description}</span>
      </div>
    </div>
  );
};

export default CardProductInfo;
