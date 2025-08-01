import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import { useAppStore } from "./store/app";
import Search from "./components/Search";
import { useEffect } from "react";

const Layout = () => {
  const { activeSearch } = useAppStore((state) => state);

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
    <div className=" min-h-screen flex flex-col overflow-x-hidden">
      <Header />

      <main className="px-4 flex-1">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>

        <section className={`${activeSearch ? 'opacity-100 ' : 'opacity-0 pointer-events-none'}  transition fixed inset-0 z-10 bottom-0 overflow-y-auto `}>
          <Search />
        </section>
    </div>
  );
};

export default Layout;