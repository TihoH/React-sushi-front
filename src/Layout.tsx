
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main";

const Layout = () => {
  return (
    <div className=" h-screen flex flex-col ">
      <Header />

      <main className="">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
