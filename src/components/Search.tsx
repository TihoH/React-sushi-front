import { X, Search as SearchIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useAppStore } from "../store/app";
import SearchList from "./SearchList";
import { useGetDataSearch } from "../hooks/useGetSearchData";
import { useLocation, useParams } from "react-router-dom";

const Search = () => {
  const { setActiveSearch } = useAppStore((state) => state);
  const [searchValue, setSearchValue] = useState("");
  const { dataSearch, isLoadingSearch } = useGetDataSearch(searchValue);
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setActiveSearch(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setActiveSearch]);

  useEffect(() => {
    setActiveSearch(false);
  }, [location.pathname]);

  return (
    <div
      className=" min-h-full bg-white z-10 pt-[150px] flex flex-col items-center"
      ref={containerRef}
    >
      <div className="flex items-center gap-4">
        <div className="md:w-[500px] relative">
          <input
            type="text"
            placeholder="Пошук"
            className="h-[60px] pl-20 w-full rounded-md outline-none bg-gray-100"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <SearchIcon className="absolute top-1/2 left-2 -translate-y-1/2" />
        </div>
        {isLoadingSearch && searchValue ? (
          <div className="h-[60px] w-[60px] flex items-center justify-center border border-gray-400 rounded-lg mr-2">
            <div className="w-6 h-6 border-4 border-t-transparent border-black rounded-full animate-spin"></div>
          </div>
        ) : (
          <X
            className="h-[60px] w-[60px] hover:opacity-100 transition border cursor-pointer border-gray-400 rounded-lg mr-2 hover:bg-gray-800 bg-black text-white duration-300 p-1"
            onClick={() => setActiveSearch(false)}
          />
        )}
      </div>
      {dataSearch?.length && searchValue ? (
        <div className="md:max-w-[1200px] md:w-full px-2 md:px-0">
          <SearchList
            dataList={dataSearch}
            isLoadingSearch={isLoadingSearch}
            searchValue={searchValue}
          />
        </div>
      ) : (
        <span>{searchValue ? "Нічого не знайдено" : "Додайте ваш запит"}</span>
      )}
    </div>
  );
};

export default Search;
