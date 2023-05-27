import React, { useState, useEffect } from "react";
import homeLogo from "../../homeLogo.png";
import Hamburger from "../Hamburger";
import Navigation from "../Navigation";

export default function Header({
  theme,
  setTheme,
  handleTheme,
  open,
  setOpen,
}) {
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

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <header>
      <div className="row justify-content-between align-items-end">
        <a href="/" className="col-4">
          <h1>Kindling</h1>
          {/* <img src={homeLogo} className="homeLogo"></img> */}
        </a>
        {screenWidth < breakpoint ? (
          <Hamburger
            theme={theme}
            setTheme={setTheme}
            handleTheme={handleTheme}
            open={open}
            setOpen={setOpen}
            handleMenu={handleMenu}
          ></Hamburger>
        ) : (
          <div className="col-8">
            <nav className="deskNav">
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
            </nav>{" "}
            <i
              className="fa-regular fa-moon fa-lg moon"
              onClick={handleTheme}
            ></i>
            <i
              className="fa-regular fa-sun fa-lg sun"
              onClick={handleTheme}
            ></i>
          </div>
        )}
      </div>
    </header>
  );
}
