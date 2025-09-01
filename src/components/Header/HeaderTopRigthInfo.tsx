import { Menu, Search, ShoppingCart, User } from "lucide-react";
import React from "react";
import { useAppStore } from "../../store/app";
import { Link } from "react-router-dom";
import { useCartStore } from "../../store/cart";
import PopupInfo from "../../UI/PopupInfo";

const HeaderTopRigthInfo = () => {
  const setActiveSearch = useAppStore((state) => state.setActiveSearch);
  const activeSearch = useAppStore((state) => state.activeSearch);
  const authUser = useAppStore((state) => state.authUser);
  const userName = useAppStore((state) => state.userName);
  const cart = useCartStore((state) => state.cart);

  return (
    <div className="flex gap-4 md:gap-14 items-center ">
      <div
        className="cursor-pointer p-2"
        onClick={() => setActiveSearch(!activeSearch)}
      >
        <Search />
      </div>
      <Link
        to={authUser ? "/User" : "/Login"}
        className="flex hover:text-yellow-600 cursor-pointer"
      >
        <User />
        <span>{!authUser ? "Увійти" : userName}</span>
      </Link>
      <Link
        to={"/cart"}
        className=" absolute right-5 top-[600px] md:relative md:top-0 md:right-0  bg-white/50 animate-pulse md:animate-none h-[50px] w-[50px] md:h-auto md:w-auto md:border-none border flex items-center justify-center rounded-full md:block"
      >
        <ShoppingCart />
        <span className="absolute -right-2 top-3 bg-yellow-600 w-3 h-3 flex items-center justify-center p-2 text-xs text-white rounded-full">
          {" "}
          {cart.length}{" "}
        </span>
      </Link>
    </div>
  );
};

export default HeaderTopRigthInfo;
