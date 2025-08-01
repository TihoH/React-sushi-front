import React, { FC } from "react";
import { ItemProduct } from "../../types";
import CustomButton from "../UI/CustomButton";
import { BanknoteArrowDown, Gift, Info, Truck } from "lucide-react";
import WrappToButtonOrder from "./WrappToButtonOrder";

interface ICardProductsInfoProps {
  product: ItemProduct;
}

const CardProductInfo: FC<ICardProductsInfoProps> = ({ product }) => {

  if(!product){
    return null
  }

  return (
      <div className="w-full">
        <div className="flex flex-col gap-6 ">
          <h1 className="text-3xl font-bold ">
            {product.name.toLocaleUpperCase()}
          </h1>
          <p className="text-2xl text-myTextGray">
            <span>Вага: </span>
            <span>{product.weight} г</span>
          </p>
          <div className="max-w-[600px] flex  justify-between items-center">
            <span className="text-[45px] font-medium">{product.price} грн</span>
            <WrappToButtonOrder cardItem={product} widthBtn={200} />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Gift color="#e2ad50" />
            <span>За покупку вам буде нараховано 32 балів</span>
          </div>
          <div className="flex gap-2">
            <span>
              <BanknoteArrowDown color="#e2ad50" />
            </span>
            Кешбек від <span className="text-red-600 font-bold">5%</span>
          </div>
          <div className="flex gap-2">
            <span>
              <Truck color="#e2ad50" />
            </span>
            <a
              href="/"
              className="border-b border-dashed border-black hover:text-blue-800"
            >
              Карта доставки
            </a>
          </div>
          <div className="flex gap-2">
            <span>
              <Info color="#e2ad50" />
            </span>
            <a
              href="/"
              className="border-b border-dashed border-black hover:text-blue-800"
            >
              Деталі акції
            </a>
          </div>
        </div>
        <div className="mt-4">
          <span className=" font-bold">Склад: </span>
          <span className="text-myTextGray">{product.description}</span>
        </div>
      </div>
  );
};

export default CardProductInfo;
