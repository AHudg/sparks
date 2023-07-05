import React, { useState, useEffect, useContext } from "react";
import "../Header/Header.css";
import { gsap } from "gsap";
import ThemeContext from "../ThemeContext";

export default function Hamburger() {
  // TODO Bugs present. If double clicked, the animation glitches
  // This causes visual bugs.
  const { theme } = useContext(ThemeContext);
  const { handleTheme } = useContext(ThemeContext);
  const { open } = useContext(ThemeContext);
  const { setOpen } = useContext(ThemeContext);

  const [blogStatus, setBlogStatus] = useState("closed");
  const [aboutStatus, setAboutStatus] = useState("closed");

  const openTl = gsap.timeline();
  const closeTl = gsap.timeline();

  useEffect(() => {
    if (open) {
      openTl.to(".ribbonFive", { x: "-100vw" });
      openTl.to(".ribbonFour", { x: "-100vw" });
      openTl.to(".ribbonThree", { x: "-100vw" });
      openTl.to(".ribbonTwo", { x: "-100vw" });
      openTl.to(".ribbonOne", { x: "-100vw" });
      openTl.to(".hamMiddle", { backgroundColor: "rgba( 192, 58, 0, 0" });
      openTl.to(".hamTop", { rotate: 45, y: 10 });
      openTl.to(".hamBottom", { rotate: -45, y: -10 });
      openTl.to(".menu", { display: "inline-block", opacity: 1 });
    } else {
      closeTl.to(".menu", { display: "none", opacity: 0 });
      closeTl.to(".ribbonFive", { x: 0 });
      closeTl.to(".ribbonFour", { x: 0 });
      closeTl.to(".ribbonThree", { x: 0 });
      closeTl.to(".ribbonTwo", { x: 0 });
      closeTl.to(".ribbonOne", { x: 0 });
      closeTl.to(".hamTop", { rotate: 0, y: 0 });
      closeTl.to(".hamBottom", { rotate: 0, y: 0 });
      closeTl.to(".hamMiddle", { backgroundColor: "rgba( 192, 58, 0, 1" });
    }
  }, [open]);

  const handleMenu = () => {
    setOpen(!open);
  };

  const navArray = [
    { title: "Blog", href: "/blog", local: "leftUp" },
    { title: "About", href: "/about", local: "rightUp" },
    { title: "Store", href: "/store", local: "leftDown" },
    { title: "Donate", href: "/donate", local: "rightDown" },
  ];

  // Change the background color of the pull down in hamburger
  // Maybe don't do the About one as a drop down?
  // I'm not understanding useState very well because I don't need so
  // many if statements. TODO

  const handleNavClick = function (event) {
    console.log(event);
    const navClick = event.target.innerHTML;
    if (navClick === "Blog") {
      event.preventDefault();
      console.log(blogStatus);
      if (blogStatus === "closed") {
        if (aboutStatus === "open") {
          setAboutStatus("closed");
        }
        setBlogStatus("open");
        gsap.to(".ribbonTwo", { y: "30vh" });
        gsap.to(".rightUp", { y: "30vh" });
        gsap.to(".ribbonThree", { y: "30vh" });
        gsap.to(".leftDown", { y: "30vh" });
        gsap.to(".ribbonFour", { y: "30vh" });
        gsap.to(".rightDown", { y: "30vh" });
        gsap.to(".ribbonFive", { y: "30vh" });
      } else {
        setBlogStatus("closed");
        gsap.to(".ribbonTwo", { y: "0vh" });
        gsap.to(".rightUp", { y: "0" });
        gsap.to(".ribbonThree", { y: "0vh" });
        gsap.to(".leftDown", { y: "0" });
        gsap.to(".ribbonFour", { y: "0vh" });
        gsap.to(".rightDown", { y: "0" });
        gsap.to(".ribbonFive", { y: "0vh" });
      }
    } else if (navClick === "About") {
      event.preventDefault();
      if (aboutStatus === "closed") {
        setAboutStatus("open");
        gsap.to(".ribbonThree", { y: "30vh" });
        gsap.to(".leftDown", { y: "30vh" });
        gsap.to(".ribbonFour", { y: "30vh" });
        gsap.to(".rightDown", { y: "30vh" });
        gsap.to(".ribbonFive", { y: "30vh" });
      } else {
        setAboutStatus("closed");
        gsap.to(".ribbonThree", { y: "0vh" });
        gsap.to(".leftDown", { y: "0" });
        gsap.to(".ribbonFour", { y: "0vh" });
        gsap.to(".rightDown", { y: "0" });
        gsap.to(".ribbonFive", { y: "0vh" });
      }
    } else {
      return;
    }
  };

  return (
    <div className="col-4">
      <div className="hamBorder" onClick={handleMenu}>
        <span className="hamTop"></span>
        <span className="hamMiddle"></span>
        <span className="hamBottom"></span>
      </div>

      <nav className="hamView">
        <div className="row">
          <span className="ribbonOne"></span>
          <span className="ribbonTwo"></span>
          <span className="ribbonThree"></span>
          <span className="ribbonFour"></span>
          <span className="ribbonFive"></span>
        </div>

        <div className="menu">
          <i
            className={`fa-regular fa-lg fa-${
              theme === "light" ? "moon" : "sun"
            } themeButtonMobile`}
            onClick={handleTheme}
          ></i>

          <ul className="menuText">
            {navArray.map((index) => {
              return (
                <li key={index.title}>
                  <a
                    href={index.href}
                    className={`menuWord ${index.local}`}
                    onClick={handleNavClick}
                  >
                    {index.title}
                  </a>
                </li>
              );
            })}

            <li className="col-12">
              <a href="#contact" className="menuWord menuContact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
