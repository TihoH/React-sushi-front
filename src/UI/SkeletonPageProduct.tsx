import React from 'react';

const SkeletonPageProduct = () => {
return (
    <div className="flex gap-10 animate-pulse mt-5 px-4  border ">
      {/* Левая часть: большое изображение */}
      <div className="w-[800px] h-[300px] bg-gray-200 rounded-lg" />

      {/* Правая часть: текстовый контент и кнопка */}
      <div className="flex flex-col gap-6 w-full ">
        {/* Название */}
        <div className="h-10 bg-gray-300 rounded w-2/3" />

        {/* Вес */}
        <div className="h-6 bg-gray-200 rounded w-1/4" />

        {/* Цена */}
        <div className="h-12 bg-gray-300 rounded w-1/3" />

        {/* Баллы и кешбек */}
        <div className="space-y-3">
          <div className="h-5 bg-gray-200 rounded w-2/3" />
          <div className="h-5 bg-gray-200 rounded w-1/2" />
        </div>

        {/* Карта доставки и детали акции */}
        <div className="space-y-3">
          <div className="h-5 bg-gray-200 rounded w-1/3" />
          <div className="h-5 bg-gray-200 rounded w-1/2" />
        </div>

        {/* Кнопка */}
        <div className="h-12 w-[200px] bg-gray-300 rounded-lg mt-6" />

        {/* Состав */}
        <div className="h-5 w-3/4 bg-gray-200 rounded mt-4" />
      </div>
    </div>
  );
};


export default SkeletonPageProduct;