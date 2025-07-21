import { Search, ShoppingCart, User } from "lucide-react";
import React from "react";

const HeaderTopRigthInfo = () => {
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
      </div>
    </div>
  );
};

export default HeaderTopRigthInfo;
