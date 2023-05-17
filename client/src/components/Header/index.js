import React, { useState, useEffect } from "react";
import homeLogo from "../../homeLogo.png";
import { gsap } from "gsap";

export default function Header() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  const [open, setOpen] = useState(false);

  const [icon, setIcon] = useState("hamburgerOpen");

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
    document.getElementById("hamIcon").className = icon;
  });

  const handleMenu = () => {
    setOpen(!open);

    if (icon === "hamburgerOpen") {
      // setIcon("hamburgerClose");
      gsap.to(".hamburgerOpen", { borderRadius: "50%" });
      gsap.to(".topHamburger", { rotate: 45, y: 9, x: -3, scaleX: 1.25 });
      gsap.to(".middleHamburger", { rotate: -45, x: -4, scaleX: 1.6 });
      gsap.to(".bottomHamburger", { opacity: 0 });
    } else {
      // setIcon("hamburgerOpen");
      gsap.to(".hamburgerOpen", { borderRadius: "0" });
    }
  };

  return (
    <header className="">
      <div className="row justify-content-between">
        <a href="/" className="col-2">
          <img src={homeLogo} className="homeLogo"></img>
        </a>
        {screenWidth < breakpoint ? (
          <div id="hamIcon" className={`col-10 ${icon}`} onClick={handleMenu}>
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
        <div className="menu">
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
