import React from "react";
import { useParams } from "react-router-dom";
import { useGetDataCategory } from "../hooks/useGetDataCategory.ts";
import GroupSushiList from "../components/GroupSushiList";

const ListCurrentCategory = () => {
  const { name } = useParams();
  const { data, isLoading } = useGetDataCategory(name);
  return (
    <div>
      <h1>{name}</h1>

      <GroupSushiList dataList={data} isLoading={isLoading} title={""} />
    </div>
  );
};

export default ListCurrentCategory;
