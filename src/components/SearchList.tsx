import React, { FC } from "react";
import { ItemProduct } from "../../types";
import CardItem from "./CardItem";
import GroupSushiList from "./GroupSushiList";

interface ISearchListProps {
  dataList: ItemProduct[];
  isLoadingSearch: boolean;
  searchValue: string;
}

const SearchList: FC<ISearchListProps> = ({
  dataList,
  isLoadingSearch,
  searchValue,
}) => {
  return (
    <>
      <GroupSushiList
        dataList={dataList}
        isLoading={isLoadingSearch}
        title={"Результат по запросу"}
        type={"search"}
        searchValue={searchValue}
      />
    </>
  );
};

export default SearchList;
