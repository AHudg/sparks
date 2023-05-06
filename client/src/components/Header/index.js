import React, { useState, useEffect } from "react";
import homeLogo from "../../homeLogo.png";

export default function Header() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);

        console.log("mobile");
      } else {
        setIsMobile(false);
        console.log("laptop");
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <a href="/">
        <img src={homeLogo} className="homeLogo"></img>
      </a>
    </header>
  );
}
