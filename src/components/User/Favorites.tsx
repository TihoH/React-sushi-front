import React, { useEffect, useMemo, useState } from "react";
import { useAppStore } from "../../store/app";
import GroupSushiList from "../GroupSushiList";
import { userFavoritesStore } from "../../store/userFavorites";

const Favorites = () => {
  const userId = useAppStore((state) => state.userId);
  const clearFavorites = userFavoritesStore((state) => state.clearFavorites);
  const getFavorites = userFavoritesStore((state) => state.getFavorites);
  const favorites = userFavoritesStore((state) => state.favorites);
  const allIdFavorites = userFavoritesStore((state) => state.allIdFavorites);

  const [sortValue, setSortValue] = useState("");

  const sortBy = [
    { title: "низької до високої", value: "asc" },
    { title: " високої до низької", value: "desc" },
  ];

  const sortedFavorites = useMemo(() => {
    if (!sortValue) return favorites;

    return [...favorites].sort((a, b) => {
      if (sortValue === "asc") return a.price - b.price;
      if (sortValue === "desc") return b.price - a.price;
      return 0;
    });
  }, [sortValue, favorites]);

  console.log(favorites);

  useEffect(() => {
    if (userId) getFavorites(userId);
  }, [userId, allIdFavorites]);

  return (
    <div className="mx-auto  bg-white rounded-xl mt-8 md:p-6">
      <div className="flex flex-col md:flex-row gap-3 justify-between items-center mb-4">
        {favorites.length > 0 ? (
          <h3 className="text-xl font-semibold text-gray-800">
            Список доданих до «Обране»
          </h3>
        ) : (
          <h3 className="text-xl font-semibold text-gray-500">
            Ви ще не додали жодного товару до «Обране»
          </h3>
        )}
        {favorites.length ? (
          <div className="flex  md:flex-row gap-5 items-center">
            <select
              className="flex gap-2 cursor-pointer outline-none p-2 shadow-md "
              onChange={(e) => setSortValue(e.target.value)}
              value={sortValue}
            >
              <option value="">Показати від</option>
              {sortBy.map((item) => (
                <option key={item.title} value={item.value}>
                  {item.title}
                </option>
              ))}
            </select>

            {favorites.length > 0 && (
              <button
                onClick={() => clearFavorites(userId)}
                className="bg-gray-200 md:px-5 md:py-2 px-3 py-3 text-sm md:text-base hover:bg-red-400 transition-all rounded-md hover:text-white hover:scale-110"
              >
                Очистити список
              </button>
            )}
          </div>
        ) : ''}
      </div>

      <GroupSushiList
        dataList={sortedFavorites}
        isLoading={false}
        gridCols="3"
      />
    </div>
  );
};

export default Favorites;
