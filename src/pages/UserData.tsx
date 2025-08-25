  import React, { useEffect, useState } from "react";
  import { Outlet } from "react-router-dom";
  import UserMenu from "../components/User/UserMenu";
  import { useCartStore } from "../store/cart";

  import { AlignJustify } from "lucide-react";

  const UserData = () => {
    const { cart } = useCartStore((state) => state);
    const [activeBurgerAside, setActiveBurgerAside] = useState(false);

    async function postItemInCart() {
      try {
        const response = await fetch("https://react-sushi.onrender.com/3/orders");
        console.log(await response.json());
      } catch (error) {
        console.error("Ошибка при отправке заказа:", error);
      }
    }

    useEffect(() => {
      setActiveBurgerAside(false);
    }, []);

    return (
      <div className="md:bg-gray-100 md:mt-2 relative z-20 flex flex-col md:flex-row flex-1 h-full   overflow-x-hidden md:shadow-sm min-h-[300px] md:min-h-[550px]">
        {/* Левая колонка - меню */}
        <aside
          className={`  ${activeBurgerAside ? "translate-x-0 pt-16 md:p-0" : "translate-x-full"} md:translate-x-0 fixed md:static top-14 left-0  z-20 
              md:max-h-[350px] h-full  transform transition-transform duration-500
              md:max-w-[20%] w-full  md:p-3  
          `}
        >
          <UserMenu setActiveBurgerAside={setActiveBurgerAside}
          />
        </aside>

        {/* Правая колонка - контент */}
        <main className="  flex-1 md:p-3 mt-14 md:mt-0 z-10 mb-2 ">
          <div className="bg-white h-full md:shadow-lg rounded-sm p-2 md:px-4">
            <Outlet />
          </div>
        </main>

        <div className="flex md:hidden absolute md:static top-[55px] right-1 z-50">
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
