import React, { useEffect } from "react";
import { useGetRandomRecomendedSushi } from "../hooks/useGetRandomRecomendedSushi";
import Slider from "./Slider/Slider";
import SkeletonCard from "../UI/SkeletonCard";

const RecomendedProducts = () => {
  const { productRecomednded, isLoading } = useGetRandomRecomendedSushi();

  return (
    <>
      <h2 className="mt-2 text-3xl mb-2 ">Рекомендовані</h2>
      {productRecomednded ? (
        <Slider sliderDataList={productRecomednded} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      )}
    </>
  );
};

export default RecomendedProducts;
