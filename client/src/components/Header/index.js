import React, { useState, useEffect } from "react";
import homeLogo from "../../homeLogo.png";

export default function Header() {
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="">
      <a href="/">
        <img src={homeLogo} className="homeLogo"></img>
      </a>
      {mobile === true ? (
        <div>
          <span className="topHamburger"></span>
          <span className="middleHamburger"></span>
          <span className="bottomHamburger"></span>
        </div>
      ) : (
        <div className="navigation">hello</div>
      )}
    </header>
  );
}
