import React, { FC, useEffect } from "react";
import CardItem from "./CardItem";
import { ItemProduct } from "../../types";
import SkeletonCard from "../UI/SkeletonCard";
import { Link } from "react-router-dom";


interface IGroupSushiListProps {
  dataList: ItemProduct[];
  isLoading: boolean;
  title?: string;
  searchValue?: string;
  type?: string;
}

const GroupSushiList: FC<IGroupSushiListProps> = ({
  dataList,
  isLoading,
  title,
  searchValue,
  type,
}) => {

  return (
    <>
      <h2 className="text-3xl font-semibold my-4 mt-14">
        {type === "search" && searchValue
          ? `${title} ${searchValue && searchValue}`
          : title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
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
                <CardItem cardItem={cardItem} />
              </Link>
            ))}
      </div>
    </>
  );
};

export default GroupSushiList;
