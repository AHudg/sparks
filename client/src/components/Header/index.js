import React, { useState, useEffect } from "react";
import homeLogo from "../../homeLogo.png";

export default function Header() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMobileNav = () => {
    setOpen(!open);
  };

  return (
    <header className="">
      <div className="row justify-content-between">
        <a href="/" className="col-2">
          <img src={homeLogo} className="homeLogo"></img>
        </a>
        {screenWidth < breakpoint ? (
          <div className="col-10 hamburger" onClick={handleMobileNav}>
            <span className="topHamburger"></span>
            <span className="middleHamburger"></span>
            <span className="bottomHamburger"></span>
          </div>
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

      {open === true ? (
        <div className="mobileNav">
          <nav>
            <ul className="row justify-content-center">
              <li className="col-12">
                <a href="/blog">Blog</a>
              </li>
              <li className="col-12">
                <a href="/about">About</a>
              </li>
              <li className="col-12">
                <a>Store</a>
              </li>
              <li className="col-12">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <div></div>
      )}
    </header>
  );
}
