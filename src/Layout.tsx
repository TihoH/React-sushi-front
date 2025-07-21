
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main";

const Layout = () => {
  return (
    <div className="wrapper overflow-x-hidden">
      <Header />

      <main className="p-5">
        <Main />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
