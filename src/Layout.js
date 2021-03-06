import { Outlet, Link } from "react-router-dom";
import "./App.css";
import ReactSwitch from "react-switch";
import { createContext, useState } from "react";

export const themes = {
  lightmode: {
    background: " #f5531d",
  },
  dark: {
    background: "rgb(13, 21, 65)",
  },
};

export const ThemeContext = createContext(themes.dark);

const Layout = () => {
  // localStorage.clear()

  const [theme, setTheme] = useState("lightmode");
  const toggle_theme = () => {
    setTheme((curr) => (curr === "lightmode" ? "dark" : "lightmode"));
    console.log(theme);
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggle_theme }}>
        <nav>
          <ul style={{ fontSize: 35 }}>
            <li>
              <Link to="/home1" class="active">
                Home
              </Link>
            </li>

            <li>
              <Link to="/users1">Users</Link>
            </li>

            <li>
              <Link to="/contact1">Conatct Us</Link>
            </li>
            <li>
              <div className="toggle_switch">
                <div className="switch_font">
                  {theme === "lightmode" ? "LightMode" : "Darkmode"}
                </div>

                <ReactSwitch
                  onChange={toggle_theme}
                  checked={theme === "lightmode"}
                />
              </div>
            </li>
          </ul>
        </nav>

        <Outlet />
      </ThemeContext.Provider>
    </>
  );
};

export default Layout;
