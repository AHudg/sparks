import React, { useState, useEffect } from "react";
import homeLogo from "../../homeLogo.png";
import Hamburger from "../Hamburger";

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

  return (
    <header className="">
      <div className="row justify-content-between">
        <a href="/" className="col-2">
          <img src={homeLogo} className="homeLogo"></img>
        </a>
        {screenWidth < breakpoint ? (
          <Hamburger></Hamburger>
        ) : (
          <nav className="col-8">
            <ul className="row">
              <li className="col-3">
                <a href="/blog">Blog</a>
              </li>
              <li className="col-3">
                <a href="/about">About</a>
              </li>
              <li className="col-3">
                <a>Store</a>
              </li>
              <li className="col-3">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
