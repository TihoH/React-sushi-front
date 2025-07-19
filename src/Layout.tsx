
import Main from "./components/Main";

const Layout = () => {
  return (
    <div className="wrapper">
      <header style={{ padding: "20px", background: "#eee" }}>
        <h1>Мой сайт</h1>
      </header>

      <main style={{ padding: "20px" }}>
        <Main />
      </main>

      <footer style={{ padding: "20px", background: "#eee" }}>
        © 2025 Все права защищены
      </footer>
    </div>
  );
};

export default Layout;
