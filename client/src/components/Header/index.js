import React, { useState, useEffect } from "react";
import homeLogo from "../../homeLogo.png";

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
        <h1 classname="col-3">Kindling by J</h1>
        {screenWidth < breakpoint ? (
          <div className="col-7 hamburger">
            <span className="topHamburger"></span>
            <span className="middleHamburger"></span>
            <span className="bottomHamburger"></span>
          </div>
        ) : (
          <nav className="col-8">
            <ul className="row">
              <li className="col-3 nav">
                <a href="/blog">Blog</a>
              </li>
              <li className="col-3 nav">
                <a href="/about">About</a>
              </li>
              <li className="col-3 nav">
                <a>Store</a>
              </li>
              <li className="col-3 nav">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
