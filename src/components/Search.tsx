import { X, Search as SearchIcon } from "lucide-react";
import React from "react";

const Search = () => {
  return (
    <div className=" min-h-full bg-white z-10 pt-[130px] flex flex-col items-center">
      <div className="flex items-center gap-4">
        <div className="w-[500px] relative">
          <input
            type="text"
            placeholder="Пошук"
            className="h-[60px] pl-20 w-full rounded-md outline-none bg-gray-100"
          />
      <SearchIcon className="absolute top-1/2 left-2 -translate-y-1/2" />
        </div>
        <X
          className="h-[60px] w-[60px]  hover:opacity-100 transition border cursor-pointer border-gray-400 rounded-lg mr-2 hover:bg-gray-800 bg-black text-white duration-300 p-1"
          //   onClick={}
        />
      </div>
    </div>
  );
};

export default Search;
