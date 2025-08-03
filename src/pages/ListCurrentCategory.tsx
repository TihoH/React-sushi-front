import React from "react";
import { useParams } from "react-router-dom";
import { useGetDataCategory } from "../hooks/useGetDataCategory.ts";
import GroupSushiList from "../components/GroupSushiList";
import { useAppStore } from "../store/app.js";

const ListCurrentCategory = () => {
  const params = useParams();
  const { data, isLoading } = useGetDataCategory(params.name);
    const {activeCategory} = useAppStore(state => state)

  return (
    <div>
      <h1 className="text-xl text-myTextGray  md:mt-4 md:text-2xl ">{activeCategory}</h1>

      <GroupSushiList dataList={data} isLoading={isLoading} title={""} />
    </div>
  );
};

export default ListCurrentCategory;
