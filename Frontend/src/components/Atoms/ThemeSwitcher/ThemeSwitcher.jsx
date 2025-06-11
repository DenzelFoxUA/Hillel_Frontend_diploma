import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-switcher" onClick={toggleTheme}>
      <div className={`slider ${theme === "dark" ? "dark" : "light"}`}></div>
      <span style={{ marginLeft: "8px" }}>
        {theme === "light" ? "🌞" : "🌙"}
      </span>
    </div>
  );
};

export default ThemeSwitcher;
