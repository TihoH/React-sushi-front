import { Search, ShoppingCart, User } from "lucide-react";
import React from "react";
import { useStore } from "../../store/app";
import { Link } from "react-router-dom";

const HeaderTopRigthInfo = () => {
  const { activeAdedCartPopup, cart } = useStore((state) => state);
  


  
  return (
    <div className="flex gap-20 items-center">
      <div>
        <Search />
      </div>
      <div className="flex">
        <User />
        <span>Увійти</span>
      </div>
      <Link to={"/cart"} className=" relative ">
        <ShoppingCart />
        <span className="absolute -right-2 top-3 bg-yellow-600 w-3 h-3 flex items-center justify-center p-2 text-xs text-white rounded-full"> {cart.length} </span>
        <div
          className={`absolute right-10 top-[150px] bg-green-200 px-5 py-2 rounded-md text-xl
      transition-opacity duration-500 min-w-[250px]
      ${activeAdedCartPopup ? "opacity-100" : "opacity-0 pointer-events-none"}
    `}
        >
          <span>Товар додано в кошик</span>
        </div>
      </Link>
    </div>
  );
};

export default HeaderTopRigthInfo;
