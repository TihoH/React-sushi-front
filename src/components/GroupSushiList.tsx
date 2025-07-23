import React, { FC, useEffect } from "react";
import CardItem from "./CardItem";
import { ItemProduct } from "../../types";
import SkeletonCard from "../UI/SkeletonCard";
import { Link } from "react-router-dom";

interface IMainDeliveryDnepr {
  dataDelivery: ItemProduct[];
  isLoading: boolean;
}

const MainDeliveryDnepr: FC<IMainDeliveryDnepr> = ({
  dataDelivery,
  isLoading,
}) => {
  return (
    <div>
      <h2 className="text-3xl font-semibold my-6">Доставка суші Дніпро</h2>
      <div className="grid grid-cols-4 gap-4">
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : dataDelivery.map((cardItem) => (
              <Link
                to={`/product/${cardItem.name}`}
                key={cardItem.id}
                state={{ id: cardItem.id }}
              >
                <CardItem cardItem={cardItem} />
              </Link>
            ))}
      </div>
    </div>
  );
};

export default MainDeliveryDnepr;
