import React, { useEffect, useState, useRef } from "react";
import HeaderTop from "./HeaderTop";
import HeaderLinks from "./HeaderLinks";
import { useAppStore } from "../../store/app";

const Header = () => {
  const [showTop, setShowTop] = useState(true);
  const lastScrollY = useRef(0);
  const { activeSearch } = useAppStore((state) => state);

  useEffect(() => {
    const handleScroll = () => {
      console.log('fqfq')
      const currentY = window.scrollY;
 
      if (currentY > lastScrollY.current && currentY > 100 && !activeSearch) {
        setShowTop(false); // Скроллим вниз
      } else {
        setShowTop(true); // Скроллим вверх
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <div
        className={`fixed top-0 left-0  w-full z-50 bg-white transition-transform duration-300 ${
          showTop ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <HeaderTop />
        <HeaderLinks />
      </div>
      <div className="h-[120px] " />
    </div>
  );
};

export default Header;
