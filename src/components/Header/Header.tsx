import React, { useEffect, useState, useRef } from "react";
import HeaderTop from "./HeaderTop";
import HeaderLinks from "./HeaderLinks";
import { useAppStore } from "../../store/app";
import CitiesModal from "../Modal/CitiesModal";
import PopupInfo from "../../UI/PopupInfo";
import { useCartStore } from "../../store/cart";

const Header = () => {
  const [showTop, setShowTop] = useState(true);
  const lastScrollY = useRef(0);
  const activeSearch = useAppStore((state) => state.activeSearch);
  const [activeBurgerMenu, setActiveBurgerMenu] = useState(false);
const openSitiesModal = useAppStore((state) => state.openSitiesModal);
const isActiveModalCities = useAppStore((state) => state.isActiveModalCities);

  
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY.current && currentY > 100 && !activeSearch) {
        setShowTop(false); // Скроллим вниз
      } else {
        setShowTop(true); // Скроллим вверх
      }

      lastScrollY.current = currentY;
    };

    if (isActiveModalCities) {
      document.body.style.overflow = "hidden";
    } else if(!isActiveModalCities) {
      document.body.style.overflow = "static";
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "";
    };
  }, [isActiveModalCities]);

  return (
    <>
      <div className="relative">
        <div
          className={`fixed top-0 left-0  w-full z-40 bg-white transition-transform duration-300 ${
            showTop ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <HeaderTop
            setActiveBurgerMenu={setActiveBurgerMenu}
            activeBurgerMenu={activeBurgerMenu}
          />
          <HeaderLinks
            setActiveBurgerMenu={setActiveBurgerMenu}
          />
        </div>
        <div className="h-[70px] md:h-[120px] " />
      </div>
      {isActiveModalCities && (
        <CitiesModal onClose={() => openSitiesModal(false)} />
      )}
    </>
  );
};

export default Header;
