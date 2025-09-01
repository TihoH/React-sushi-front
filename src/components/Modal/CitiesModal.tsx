import React, { FC, useEffect, useState } from "react";
import { cities } from "../../data/cities";
import { ICities } from "../../../types";
import { Check } from "lucide-react";
import { useAppStore } from "../../store/app";

interface CitiesModalProps {
  onClose: () => void;
}

const CitiesModal: FC<CitiesModalProps> = ({ onClose }) => {
  const citiesArr: ICities[] = cities;
  const activeCities = useAppStore((state) => state.activeCities);
  const setActiveCities = useAppStore((state) => state.setActiveCities);
  const openSitiesModal = useAppStore((state) => state.openSitiesModal);
  const [valueChoiceCity, setValueChoiceCity] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const chengeChoiceCities = (name: string) => {
    setActiveCities(name);
    setTimeout(() => {
      openSitiesModal(false);
    }, 300);
  };

  function renderFindChoiceCity() {
    if (!valueChoiceCity) {
      return citiesArr;
    } else {
      return citiesArr.filter((city) =>
        city.name.toLowerCase().includes(valueChoiceCity.trim().toLowerCase())
      );
    }
  }

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10);
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className={` ${
        isVisible ? "opacity-100 duration-500 transition-all" : "opacity-0"
      } fixed z-50 top-0 left-0 right-0 bottom-0  flex items-end md:items-center justify-center bg-black/50`}
      onClick={onClose}
    >
      <div
        className="bg-white p-10 max-w-[800px] rounded-t-md md:rounded-none w-full max-h-[600px] h-full overflow-y-scroll"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-3xl font-semibold">Ваше місто</h1>
        <input
          type="text"
          className="w-full my-4 p-4 border-2 outline-none rounded-xl"
          placeholder="Введіть назву міста"
          onChange={(e) => setValueChoiceCity(e.target.value)}
        />
        <ul>
          {renderFindChoiceCity().map((city) => (
            <li
              key={city.id}
              className="border-b py-3 text-xl  hover:pl-3 transition-all cursor-pointer flex items-center justify-between"
              onClick={() => chengeChoiceCities(city.name)}
            >
              <span>{city.name}</span>
              {activeCities === city.name && <Check />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CitiesModal;
