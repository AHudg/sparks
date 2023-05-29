import React, { useState, useEffect, useContext } from "react";
import "./Header.css";
import Hamburger from "../Hamburger";
import ThemeContext from "../ThemeContext";

export default function Header() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { theme } = useContext(ThemeContext);
  const { handleTheme } = useContext(ThemeContext);

  return (
    <header className={`sticky ${theme === "light" ? "light" : "dark"}`}>
      <div className="row justify-content-between align-items-end">
        <a href="/" className="col-4">
          <h1>Kindling</h1>
        </a>
        {screenWidth < breakpoint ? (
          <Hamburger></Hamburger>
        ) : (
          <div className="col-8">
            <nav>
              <ul className="row justify-content-center align-items-end">
                <li className="col-2">
                  <a href="/blog" className="navWord">
                    Blog
                  </a>
                </li>
                <li className="col-2">
                  <a href="/about" className="navWord">
                    About
                  </a>
                </li>
                <li className="col-2">
                  <a className="navWord">Store</a>
                </li>
                <li className="col-2">
                  <a href="#contact" className="navWord">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <i
              className={`fa-regular fa-lg fa-${
                theme === "light" ? "moon" : "sun"
              } themeButton`}
              onClick={handleTheme}
            ></i>
          </div>
        )}
      </div>
    </header>
  );
}
