import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import tealBg from "../../tealbackground.png";

export default function Hamburger() {
  const [open, setOpen] = useState(false);

  // TODO Bugs present. If double clicked, the animation glitches
  // This causes visual bugs.
  // TODO Unfinished code. The menu is opaque: 0- still clickable when open is false
  useEffect(() => {
    if (open) {
      const openTl = gsap.timeline();
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
    } else {
      const closeTl = gsap.timeline();
      // TODO how to use useEffect to animate an unmounting DOM element
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
          {/* <i className="fa-solid fa-moon moon"></i> */}
          <i className="fa-regular fa-moon moonMobile"></i>
          {/* <i className="fa-solid fa-sun sun"></i> */}
          <i className="fa-regular fa-sun sunMobile"></i>

          <span className="menuBar"></span>

          <ul className="row menuText justify-content-center align-items-center">
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
              <a href="#contact" className="menuWord contact">
                Contact
              </a>
            </li>
          </ul>

          <img src={tealBg} className="menuBg" />
        </div>
      </nav>
    </div>
  );
}
