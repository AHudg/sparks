import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

export default function Hamburger() {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);

    // this is counterintuitive- I change the status of open first
    // thus I use false for when the menu really is open
    if (open === false) {
      const openTl = gsap.timeline();
      openTl.to(".ribbonOne", { y: window.innerHeight });
      openTl.to(".ribbonTwo", { y: window.innerHeight });
      openTl.to(".ribbonThree", { y: window.innerHeight });
      openTl.to(".hamMiddle", { backgroundColor: "rgba( 192, 58, 0, 0" });
      openTl.to(".hamTop", { rotate: 45, y: 10 });
      openTl.to(".hamBottom", { rotate: -45, y: -10 }, "=-.5");
    } else {
      const closeTl = gsap.timeline();
      closeTl.to(".hamTop", { rotate: 0, y: 0 });
      closeTl.to(".hamBottom", { rotate: 0, y: 0 }, -0.001);
      closeTl.to(".hamMiddle", { backgroundColor: "rgba( 192, 58, 0, 1" });
      closeTl.to(".ribbonOne", { y: -window.innerHeight }, "=-.5");
      closeTl.to(".ribbonTwo", { y: -window.innerHeight });
      closeTl.to(".ribbonThree", { y: -window.innerHeight });
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
        <div className="menu">
          <nav>
            <ul className="row justify-content-center align-items-center">
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
        <span></span>
      )}
    </div>
  );
}
