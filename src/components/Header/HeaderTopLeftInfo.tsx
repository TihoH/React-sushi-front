import React, { useState } from "react";
import { useAppStore } from "../../store/app";
import CitiesModal from "../Modal/CitiesModal";

const HeaderTopLeftInfo = () => {
const activeCities = useAppStore((state) => state.activeCities);
const openSitiesModal = useAppStore((state) => state.openSitiesModal);

  return (
    <>
      <div className=" gap-12 flex">
        <button
          className="border-b border-dashed border-black hover:text-blue-800"
          onClick={ () => openSitiesModal(true) }
        >
          {activeCities}
        </button>
        <a href="/" className="hidden md:flex">UA</a>
        <a href="/" className="hidden md:flex">066 968 30 10</a>
      </div>

    </>
  );
};

export default HeaderTopLeftInfo;
