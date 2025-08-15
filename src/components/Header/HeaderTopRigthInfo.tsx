import { Menu, Search, ShoppingCart, User } from "lucide-react";
import React from "react";
import { useAppStore } from "../../store/app";
import { Link } from "react-router-dom";
import { useCartStore } from "../../store/cart";

const HeaderTopRigthInfo = () => {
  const { setActiveSearch} = useAppStore((state) => state);
  const {  activeSearch } = useAppStore((state) => state);
  const {authUser} = useAppStore((state) => state);
  const { userAuthData} = useAppStore((state) => state);
  const { activeAdedCartPopup, cart } = useCartStore((state) => state);

  return (
    <div className="flex gap-4 md:gap-14 items-center relative">
      <div
        className="cursor-pointer p-2"
        onClick={() => setActiveSearch(!activeSearch)}
      >
        <Search />
      </div>
      <Link to={authUser ? "/User" : "/Login"} className="flex hover:text-yellow-600 cursor-pointer">
        <User />
        <span >{!authUser ? 'Увійти' : userAuthData.name}</span>
      </Link>
      <Link to={"/cart"} className=" absolute right-0 top-[600px] md:relative md:top-0 md:right-0  bg-white/50 animate-pulse md:animate-none h-[50px] w-[50px] md:h-auto md:w-auto md:border-none border flex items-center justify-center rounded-full md:block">
        <ShoppingCart />
        <span className="absolute -right-2 top-3 bg-yellow-600 w-3 h-3 flex items-center justify-center p-2 text-xs text-white rounded-full">
          {" "}
          {cart.length}{" "}
        </span>
      </Link>
      <div
        className={`absolute right-10 bottom-0 bg-green-200 px-5 py-2 rounded-md text-xl
      transition-opacity duration-500 min-w-[250px]
      ${activeAdedCartPopup ? "opacity-100" : "opacity-0 pointer-events-none"}
    `}
      >
        <span>Товар додано в кошик</span>
      </div>
      {/* Burdger */}
    {/* <Menu
        className=" md:hidden absolute z-30 top-14 -right-2 border w-[50px] h-[50px] p-1 rounded-md bg-white "
        onClick={() => setActiveBurgerMenu(!activeBurgerMenu)}
      /> */}
      {/* Burdger END */}
    </div>
  );
};

export default HeaderTopRigthInfo;
