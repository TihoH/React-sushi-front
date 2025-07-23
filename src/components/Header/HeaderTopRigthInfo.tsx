import { Search, ShoppingCart, User } from "lucide-react";
import React from "react";
import { useStore } from "../../store/app";

const HeaderTopRigthInfo = () => {
  const { activeAdedCartPopup } = useStore((state) => state);

  return (
    <div className="flex gap-20 items-center">
      <div>
        <Search />
      </div>
      <div className="flex">
        <User />
        <span>Увійти</span>
      </div>
      <div>
        <ShoppingCart />
        <div
          className={`absolute right-10 top-[100px] bg-green-200 px-5 py-2 rounded-md text-xl
      transition-opacity duration-500
      ${activeAdedCartPopup ? "opacity-100" : "opacity-0 pointer-events-none"}
    `}
        >
          <span>Товар додано в кошик</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopRigthInfo;
