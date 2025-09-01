import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import { useAppStore } from "./store/app";
import Search from "./components/Search";
import { useEffect } from "react";
import PopupInfo from "./UI/PopupInfo";
import { useCartStore } from "./store/cart";

const Layout = () => {
const activeSearch = useAppStore((state) => state.activeSearch);
const activeAdedCartPopup = useCartStore((state) => state.activeAdedCartPopup);

  useEffect(() => {
    if (activeSearch) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Чистка при размонтировании
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [activeSearch]);

  return (
    <div className=" min-h-screen flex flex-col overflow-x-hidden max-w-[1680px] m-auto bg-gray-100 relative border ">
      <Header />

      <main className="px-2 md:px-4  flex-1 flex flex-col min-h-0">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
      {/* Start popups=modal */}
      <section
        className={`${
          activeSearch ? "opacity-100 " : "opacity-0 pointer-events-none"
        }  transition fixed inset-0 z-10 bottom-0 overflow-y-auto `}
      >
        <Search />
      </section>
      <section>
        <PopupInfo
          className={""}
          activeInfoPopup={activeAdedCartPopup}
          children={"Товар додано в кошик"}
        />
      </section>
    </div>
  );
};

export default Layout;
