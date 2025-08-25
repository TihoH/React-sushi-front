import React, { useEffect, useState } from "react";
import { useAppStore } from "../../store/app";
import GroupSushiList from "../GroupSushiList";
import { userFavoritesStore } from "../../store/userFavorites";

const Favorites = () => {
  const { userId } = useAppStore();
  const { clearFavorites, getFavorites, favorites } = userFavoritesStore();
//   const [favoritesAll , setFavoritesAll] = useState(favorites)

  const sortBy = [
    { title: "низької до високої" },
    { title: "від високої до низької" },
  ];

  useEffect(() => {
    if (userId) getFavorites(userId);
  }, [userId ]);

  return (
    <div className="mx-auto bg-white rounded-xl mt-8 p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800">
          Список доданих у «Вибране»
        </h3>
        <div className="flex gap-5 items-center">
          <select className="flex gap-2 cursor-pointer outline-none p-2 shadow-md">
            <option value="">Показати по</option>
            {sortBy.map((item) => (
              <option key={item.title}>{item.title}</option>
            ))}
          </select>

          {favorites.length > 0 && (
            <button
              onClick={ () => clearFavorites(userId) }
              className="bg-gray-200 px-5 py-2 hover:bg-red-400 transition-all rounded-md hover:text-white hover:scale-110"
            >
              Очистити список
            </button>
          )}
        </div>
      </div>

      <GroupSushiList dataList={favorites} isLoading={false} gridCols="3" />
    </div>
  );
};

export default Favorites;
