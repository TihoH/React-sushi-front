import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppStore } from "../../store/app";

const HeaderLinks = ({activeBurgerMenu , setActiveBurgerMenu  }) => {
  const { name } = useParams();
  const {setActiveCategory} = useAppStore(state => state)


  const links = [
    { link: "Сети", id: 1, category: "sets" },
    { link: "Роли та суші", id: 2, category: "rols" },
    { link: "Акції", id: 3, category: "stock" },
    { link: "1+1=3", id: 4 , category: 'plusSushi' },
    { link: "Комбо", id: 5 , category: 'combo' },
    { link: "Суші бургери", id: 6 , category: 'sushiBurger' },
    { link: "Гаряче та супи", id: 7 , category: 'hotEndSoup' },
    { link: "Салати та закуски", id: 8 , category: '' },
    { link: "Десерти", id: 9 , category: 'salad' },
    { link: "Напої", id: 10 , category: 'drink' },
    { link: "Доповнення", id: 11 , category: 'adedToOrder'},
  ];
  return (
    <ul   className={`
    transition-opacity duration-300 ease-in-out
    ${activeBurgerMenu ? 'opacity-100  pointer-events-auto' : 'opacity-0 md:opacity-100 flex '}
    md:flex-row justify-between text-myTextGray px-7 font-medium shadow-lg
    absolute top-14 border-t left-0 right-0 z-20 bg-white py-2
    -mx-[calc((100vw-100%)/2)]
  `}>
      {links.map((item) => (
        <li className="hover:text-yellow-600 transition py-1 md:py-4" key={item.id}>
          <Link
            className={` ${name === item.category ? "text-yellow-600" : ""} `}
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
