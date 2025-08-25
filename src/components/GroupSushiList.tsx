import React, { FC, useEffect, useState } from "react";
import CardItem from "./CardItem";
import { ItemProduct } from "../../types";
import SkeletonCard from "../UI/SkeletonCard";
import { Link } from "react-router-dom";
import { useAppStore } from "../store/app";
import { userFavoritesStore } from "../store/userFavorites";
import PopupInfo from "../UI/PopupInfo";

interface IGroupSushiListProps {
  dataList: ItemProduct[] | [];
  isLoading: boolean;
  title?: string;
  searchValue?: string;
  type?: string;
  gridCols?: string;
}

const GroupSushiList: FC<IGroupSushiListProps> = ({
  dataList,
  isLoading,
  title,
  searchValue,
  type,
  gridCols = 4,
}) => {
  const { userId, authUser } = useAppStore((state) => state);
  const { getAllIdFavorites , addToFavorites } = userFavoritesStore((state) => state);
  const [activePopupInfo, setActivePopupInfo] = useState(false);

  useEffect(() => {
    if (userId) {
      getAllIdFavorites(userId); //Получить список ID которые добавили в избранное
    }
  }, [userId]);

  const adedToFavorites = (e, cardItem) => {
    if (authUser) {
      e.preventDefault();
      addToFavorites(userId , cardItem);
    }
  };

  return (
    <>
      <h2 className="text-3xl font-semibold  mt-14 md:mt-4 mb-3">
        {type === "search" && searchValue
          ? `${title} ${searchValue && searchValue}`
          : title}
      </h2>

      <div
        className={`grid grid-cols-1 md:mt-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-${gridCols} gap-4 w-full`}
      >
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : dataList.map((cardItem) => (
              <Link
                to={`/product/${cardItem.name}`}
                key={cardItem.id}
                state={{ id: cardItem.id }}
              >
                <CardItem
                  cardItem={cardItem}
                  adedToFavorites={adedToFavorites}
                />
              </Link>
            ))}
      </div>
      <PopupInfo
        activeInfoPopup={activePopupInfo}
        className={""}
        children={"Додавати у вибране можуть лише зареєстровані користувачі"}
        type="warning"
      />
    </>
  );
};

export default GroupSushiList;
