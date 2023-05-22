import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import tealBg from "../../tealbackground.png";

export default function Hamburger() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      gsap.to(".menu", { opacity: 1 }, 1);
    }
  });

  const handleMenu = () => {
    setOpen(!open);

    // this is counterintuitive- I change the status of open first
    // thus I use false for when the menu really is open
    if (open === false) {
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
    } else {
      const closeTl = gsap.timeline();
      closeTl.to(".hamTop", { rotate: 0, y: 0 });
      closeTl.to(".hamBottom", { rotate: 0, y: 0 }, -0.001);
      closeTl.to(".hamMiddle", { backgroundColor: "rgba( 192, 58, 0, 1" });
      closeTl.to(".ribbonOne", { y: 0 }, "=-.5");
      closeTl.to(".ribbonTwo", { y: 0 });
      closeTl.to(".ribbonThree", { y: 0 });
    }
  };

  return (
    <div>
      <div className="hamBorder" onClick={handleMenu}>
        <span className="hamTop"></span>
        <span className="hamMiddle"></span>
        <span className="hamBottom"></span>
      </div>
      <div className="row">
        <span className="ribbonOne"></span>
        <span className="ribbonTwo"></span>
        <span className="ribbonThree"></span>
      </div>
      {open === true ? (
        <nav className="menu">
          <img src={tealBg} className="menuBg" />
          <ul className="row menu justify-content-center align-items-center">
            <li className="col-12 text-center">
              <a href="/blog" className="menuText">
                Blog
              </a>
            </li>
            <li className="col-12 text-start">
              <a href="/about" className="menuText">
                About
              </a>
            </li>
            <li className="col-12 text-center">
              <a className="menuText">Store</a>
            </li>
            <li className="col-12 text-end">
              <a href="#contact" className="menuText">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        <span></span>
      )}
    </div>
  );
}
