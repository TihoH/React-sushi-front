import React from "react";
import { useParams } from "react-router-dom";
import { useGetDataCategory } from "../hooks/useGetDataCategory.ts";
import GroupSushiList from "../components/GroupSushiList";
import { useAppStore } from "../store/app.js";
import { headerLinks } from "../data/headerLinks.js";

const ListCurrentCategory = () => {
  const params = useParams();
  const { data, isLoading } = useGetDataCategory(params.name);
  const { activeCategory } = useAppStore((state) => state);
  const findLink = headerLinks.find((item) => item.link === activeCategory);

  return (
    <div className="mb-10  md:px-8">
      {/* Название категории */}
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mt-16 mb-6 border-b-2 border-yellow-400 pb-2">
        {activeCategory}
      </h1>

      {/* Подзаголовок / описание */}
      {findLink?.description && (
        <p className="text-gray-600 text-sm md:text-base md:mb-8">
          {findLink?.description}
        </p>
      )}

      {/* Список карточек */}
      <GroupSushiList dataList={data} isLoading={isLoading} title={""} />
    </div>
  );
};

export default ListCurrentCategory;
