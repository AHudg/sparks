import React, { useState, useEffect, useContext, useRef } from "react";
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

  const [blogStatus, setBlogStatus] = useState("false");
  const [aboutStatus, setAboutStatus] = useState("false");

  const openTl = gsap.timeline();
  const closeTl = gsap.timeline();

  // Controlling the hamburger being open/closed
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
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
    }
  }, [open]);

  const initialRender = useRef(true);

  // Controlling the Blog buttons
  useEffect(() => {
    if (!aboutStatus) {
      setAboutStatus(!aboutStatus);
    }

    if (initialRender.current) {
      initialRender.current = false;
    } else {
      if (!blogStatus) {
        gsap.to(".ribbonOne", { height: "50vh" });
        gsap.to(".leftUp", { y: "30vh" });
        gsap.to(".ribbonTwo", { y: "30vh" });
        gsap.to(".rightUp", { y: "30vh" });
        gsap.to(".ribbonThree", { y: "30vh" });
        gsap.to(".leftDown", { y: "30vh" });
        gsap.to(".ribbonFour", { y: "30vh" });
        gsap.to(".rightDown", { y: "30vh" });
        gsap.to(".ribbonFive", { y: "30vh" });
      } else {
        gsap.to(".ribbonOne", { height: "20vh" });
        gsap.to(".leftUp", { y: 0 });
        gsap.to(".ribbonTwo", { y: 0 });
        gsap.to(".rightUp", { y: 0 });
        gsap.to(".ribbonThree", { y: 0 });
        gsap.to(".leftDown", { y: 0 });
        gsap.to(".ribbonFour", { y: 0 });
        gsap.to(".rightDown", { y: 0 });
        gsap.to(".ribbonFive", { y: 0 });
      }
    }
  }, [blogStatus]);

  useEffect(() => {
    if (!blogStatus) {
      setBlogStatus(!blogStatus);
    }

    if (initialRender.current) {
      initialRender.current = false;
    } else {
      if (!aboutStatus) {
        gsap.to(".ribbonTwo", { height: "50vh" });
        gsap.to(".rightUp", { y: "30vh" });
        gsap.to(".ribbonThree", { y: "30vh" });
        gsap.to(".leftDown", { y: "30vh" });
        gsap.to(".ribbonFour", { y: "30vh" });
        gsap.to(".rightDown", { y: "30vh" });
        gsap.to(".ribbonFive", { y: "30vh" });
      } else {
        gsap.to(".ribbonTwo", { height: "20vh" });
        gsap.to(".rightUp", { y: "0" });
        gsap.to(".ribbonThree", { y: "0" });
        gsap.to(".leftDown", { y: "0" });
        gsap.to(".ribbonFour", { y: "0" });
        gsap.to(".rightDown", { y: "0" });
        gsap.to(".ribbonFive", { y: "0" });
      }
    }
  }, [aboutStatus]);

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
    const navClick = event.target.innerHTML;

    if (navClick === "Blog") {
      event.preventDefault();
      setBlogStatus(!blogStatus);
    } else if (navClick === "About") {
      event.preventDefault();
      setAboutStatus(!aboutStatus);
    } else {
      return;
    }
  };

  return (
    <div className="col-8">
      <div className="hamBorder" onClick={handleMenu}>
        <span className="hamTop"></span>
        <span className="hamMiddle"></span>
        <span className="hamBottom"></span>
      </div>

      <nav className="hamView">
        <div className="row">
          <span className="ribbonOne"></span>
          <span className="ribbonBlog"></span>
          <span className="ribbonTwo"></span>
          <span className="ribbonAbout"></span>
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
              <a href="#contact" className="menuContact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
