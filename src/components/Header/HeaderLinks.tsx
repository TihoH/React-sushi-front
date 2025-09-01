import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppStore } from "../../store/app";
import { headerLinks } from "../../data/headerLinks";

const HeaderLinks = ({ setActiveBurgerMenu  }) => {
  const { name } = useParams();
  const setActiveCategory = useAppStore(state => state.setActiveCategory)
  const links = headerLinks
  return (
    <ul   className={` flex justify-between  md:px-4  absolute top-14 border-t left-0 right-0 z-20 bg-white py-4 md:py-2
    -mx-[calc((100vw-100%)/2)] shadow-lg  overflow-x-auto whitespace-nowrap scroll-smooth gap-3  `}>
      {links.map((item) => (
        <li className="hover:text-yellow-600 transition py-1 md:py-4" key={item.id}>
          <Link
            className={` ${name === item.category ? "text-yellow-600" : ""} bg-gray-100 md:bg-transparent px-4 py-2 rounded-xl `}
            to={`/category/${item.category}`}
            onClick={ () => {setActiveBurgerMenu(false) , setActiveCategory(item.link)} }
          >
            {item.link}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderLinks;
