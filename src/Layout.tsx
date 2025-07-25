
  import { Outlet } from "react-router-dom";
  import Footer from "./components/Footer/Footer";
  import Header from "./components/Header/Header";
  import Main from "./components/Main";

  const Layout = () => {
    return (
      <div className=" min-h-screen flex flex-col overflow-x-hidden">
        <Header />

        <main className="px-4 flex-1">
          <Outlet />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  };

  export default Layout;
