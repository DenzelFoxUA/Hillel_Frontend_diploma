import { Outlet } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import './Layout.css';

const Layout = () => {
  const { theme } = useContext(ThemeContext);

  const backgroundStyle = {
    backgroundColor: theme === "light" ? "#ffffff" : "#1e1e1e",
    color: theme === "light" ? "#000000" : "#ffffff",
    minHeight: "100vh",
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div style={backgroundStyle}>
      <Header />
      <main className="page-body">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
