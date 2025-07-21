import React, { FC, useEffect } from "react";
import CardItem from "./CardItem";
import { DataDelivery } from "../../types";

interface IMainDeliveryDnepr {
  category: string;
  dataDelivery: DataDelivery[]
}

const MainDeliveryDnepr: FC<IMainDeliveryDnepr> = ({category , dataDelivery}) => {


  return (
    <div>
      <h2 className="text-3xl font-semibold my-6">Доставка суші Дніпро</h2>
      <div className="grid grid-cols-4 gap-4">
        {dataDelivery?.map( cardItem => <CardItem key={cardItem.id}  cardItem={cardItem}/> )}
      </div>
    </div>
  );
};

export default MainDeliveryDnepr;
