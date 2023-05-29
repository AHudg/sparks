import React, { useEffect, useContext } from "react";
import "../Header/Header.css";
import { gsap } from "gsap";
import tealBg from "../../tealbackground.png";
import ThemeContext from "../ThemeContext";

export default function Hamburger() {
  // TODO Bugs present. If double clicked, the animation glitches
  // This causes visual bugs.
  const { theme } = useContext(ThemeContext);
  const { handleTheme } = useContext(ThemeContext);
  const { open } = useContext(ThemeContext);
  const { setOpen } = useContext(ThemeContext);

  const openTl = gsap.timeline();
  const closeTl = gsap.timeline();

  useEffect(() => {
    if (open) {
      openTl.to(".ribbonOne", { y: window.innerHeight });
      openTl.to(".ribbonTwo", { y: window.innerHeight });
      openTl.to(".ribbonThree", { y: window.innerHeight });
      openTl.to(
        ".hamMiddle",
        { backgroundColor: "rgba( 192, 58, 0, 0" },
        "=-1"
      );
      openTl.to(".hamTop", { rotate: 45, y: 10 });
      openTl.to(".hamBottom", { rotate: -45, y: -10 }, "=-.5");
      openTl.to(".menu", { display: "inline-block", opacity: 1 });
      console.log("open here");
    } else {
      console.log("close here");
      closeTl.to(".menu", { display: "none", opacity: 0 });
      closeTl.to(".hamTop", { rotate: 0, y: 0 });
      closeTl.to(".hamBottom", { rotate: 0, y: 0 }, -0.001);
      closeTl.to(".hamMiddle", { backgroundColor: "rgba( 192, 58, 0, 1" });
      closeTl.to(".ribbonOne", { y: 0 }, "=-.5");
      closeTl.to(".ribbonTwo", { y: 0 });
      closeTl.to(".ribbonThree", { y: 0 });
    }
  }, [open]);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="col-8">
      <div className="hamBorder" onClick={handleMenu}>
        <span className="hamTop"></span>
        <span className="hamMiddle"></span>
        <span className="hamBottom"></span>
      </div>

      <nav>
        <div className="row">
          <span className="ribbonOne"></span>
          <span className="ribbonTwo"></span>
          <span className="ribbonThree"></span>
        </div>
        <div className="menu">
          <i
            className={`fa-regular fa-lg fa-${
              theme === "light" ? "moon" : "sun"
            } themeButtonMobile`}
            onClick={handleTheme}
          ></i>

          <span className="menuBar"></span>

          <ul className="menuText row justify-content-center align-items-center">
            <li className="col-12">
              <a href="/blog" className="menuWord">
                Blog
              </a>
            </li>

            <li className="col-12">
              <a href="/about" className="menuWord">
                About
              </a>
            </li>

            <li className="col-12">
              <a className="menuWord">Store</a>
            </li>

            <li className="col-12">
              <a href="#contact" className="menuWord menuContact">
                Contact
              </a>
            </li>
          </ul>

          {/* <img src={tealBg} className="menuBg" /> */}
        </div>
      </nav>
    </div>
  );
}
