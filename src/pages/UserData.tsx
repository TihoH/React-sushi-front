import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import UserMenu from "../components/User/UserMenu";
import { useCartStore } from "../store/cart";
import Popup from "../UI/Popup";
import { AlignJustify } from "lucide-react";

const UserData = () => {
  const { cart } = useCartStore((state) => state);
  const [activeBurgerAside, setActiveBurgerAside] = useState(false);
  const [activeLink , setActiveLink] = useState('')

  async function postItemInCart() {
    try {
      const response = await fetch("http://localhost:5000/3/orders");
      console.log(await response.json());
    } catch (error) {
      console.error("Ошибка при отправке заказа:", error);
    }
  }

  useEffect( () => {
    setActiveBurgerAside(false)
  } , [])

  return (
    <div className="md:bg-gray-50  relative z-20 flex flex-col md:flex-row flex-1 h-full  rounded-lg overflow-x-hidden md:shadow-sm bg-white">
      {/* Левая колонка - меню */}
      <aside
        className={`
  fixed md:static top-14 left-0 h-full  z-20 md:h-[300px] md: mt-3
  transform transition-transform duration-500
  ${activeBurgerAside ? "translate-x-0 pt-16 md:p-0" : "translate-x-full"}
  md:max-w-[20%] w-full md:bg-gray-50 md:p-3 bg-white 
`}
      >
        <UserMenu setActiveBurgerAside={setActiveBurgerAside} setActiveLink={setActiveLink} activeLink={activeLink} />
      </aside>

      {/* Правая колонка - контент */}
      <main className="  flex-1 md:p-3 mt-14 md:mt-0 z-10  ">
        <div className="bg-white h-full md:shadow-lg rounded-2xl md:p-4">
          <Outlet />
        </div>
      </main>

      <div className="flex md:hidden absolute md:static top-[50px] right-0 z-50">
        <AlignJustify
          strokeWidth={1.2}
          size={40}
          onClick={() => setActiveBurgerAside(!activeBurgerAside)}
        />
      </div>
    </div>
  );
};

export default UserData;
