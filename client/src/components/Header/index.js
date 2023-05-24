import React, { useState, useEffect } from "react";
import homeLogo from "../../homeLogo.png";
import Hamburger from "../Hamburger";

export default function Header({ theme, setTheme }) {
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

  const handleTheme = () => {
    console.log("here");
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <header>
      <div className="row justify-content-between">
        <a href="/" className="col-4">
          <h1>Kindling</h1>
          {/* <img src={homeLogo} className="homeLogo"></img> */}
        </a>
        {screenWidth < breakpoint ? (
          <Hamburger></Hamburger>
        ) : (
          <nav className="col-9">
            <ul className="row">
              <li className="col-2">
                <a href="/blog">Blog</a>
              </li>
              <li className="col-2">
                <a href="/about">About</a>
              </li>
              <li className="col-2">
                <a>Store</a>
              </li>
              <li className="col-2">
                <a href="#contact">Contact</a>
              </li>
              <li className="col-2">
                <button onClick={handleTheme}>Theme</button>
              </li>
            </ul>
            {/* <i class="fa-solid fa-moon moon"></i> */}
            <i class="fa-regular fa-moon moon"></i>
            {/* <i class="fa-solid fa-sun sun"></i> */}
            <i class="fa-regular fa-sun sun"></i>
          </nav>
        )}
      </div>
    </header>
  );
}
