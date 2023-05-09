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
        {screenWidth < breakpoint ? (
          <div className="col-2 row justify-content-end">
            <span className="topHamburger"></span>
            <span className="middleHamburger"></span>
            <span className="bottomHamburger"></span>
          </div>
        ) : (
          <div className="navigation">hello</div>
        )}
      </div>
    </header>
  );
}
