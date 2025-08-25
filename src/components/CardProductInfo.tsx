import React, { FC } from "react";
import { ItemProduct } from "../../types";
import { BanknoteArrowDown, Gift, Info, Star, Truck } from "lucide-react";
import WrappToButtonOrder from "./WrappToButtonOrder";
import { useAppStore } from "../store/app";
import { userFavoritesStore } from "../store/userFavorites";

interface ICardProductsInfoProps {
  product: ItemProduct;
}

const CardProductInfo: FC<ICardProductsInfoProps> = ({ product }) => {
  if (!product) {
    return null;
  }
  const { userId } = useAppStore((state) => state);
  const { addToFavorites, allIdFavorites } = userFavoritesStore(
    (state) => state
  );
  const findIdFavorites = allIdFavorites.includes(product.id);
  return (
    <div className="w-full bg-white p-4 sm:p-6 rounded-xl shadow-lg">
      {/* Назва, вага, ціна */}
 {/* Название и кнопка "В избранное" */}
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
    onClick={(e) => {
      e.preventDefault();
      addToFavorites(userId, product);
    }}
    disabled={findIdFavorites}
  >
    <Star size={18} />
    <span className="text-sm font-medium">
      {findIdFavorites ? "Додано" : "В обране"}
    </span>
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
  <WrappToButtonOrder cardItem={product} widthBtn={200} />
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
