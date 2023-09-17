import React, { useState, useEffect, useContext, useRef } from "react";
import "../Header/index.css";
import { gsap } from "gsap";
import ThemeContext from "../ThemeContext";
import { useNavigate } from "react-router-dom";

export default function Hamburger() {
  // TODO Bugs present. If double clicked, the animation glitches
  // This causes visual bugs.
  const [blogStatus, setBlogStatus] = useState("false");
  const [aboutStatus, setAboutStatus] = useState("false");

  const { theme } = useContext(ThemeContext);
  const { handleTheme } = useContext(ThemeContext);
  const { open } = useContext(ThemeContext);
  const { setOpen } = useContext(ThemeContext);

  const initialRender = useRef(true);

  const navigate = useNavigate();

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
      } else {
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

  // Controlling the Blog buttons
  useEffect(() => {
    if (!aboutStatus) {
      setAboutStatus(!aboutStatus);
    }

    if (initialRender.current) {
      // initialRender.current = false;
    } else {
      if (!blogStatus) {
        gsap.to(".ribbonOne", { height: "60vh" });
        gsap.to(".leftUp", { y: "40vh" });
        gsap.to(".ribbonTwo", { y: "40vh" });
        gsap.to(".ribbonThree", { y: "40vh" });
        gsap.to(".ribbonFour", { y: "40vh" });
        gsap.to(".ribbonFive", { y: "40vh" });
      } else {
        gsap.to(".ribbonOne", { height: "20vh" });
        gsap.to(".leftUp", { y: 0 });
        gsap.to(".ribbonTwo", { y: 0 });
        gsap.to(".ribbonThree", { y: 0 });
        gsap.to(".ribbonFour", { y: 0 });
        gsap.to(".ribbonFive", { y: 0 });
      }
    }
  }, [blogStatus]);

  useEffect(() => {
    if (!blogStatus) {
      setBlogStatus(!blogStatus);
    }

    if (initialRender.current) {
      // initialRender.current = false;
    } else {
      if (!aboutStatus) {
        gsap.to(".ribbonTwo", { height: "50vh" });
        gsap.to(".rightUp", { y: "30vh" });
        gsap.to(".ribbonThree", { y: "30vh" });
        gsap.to(".ribbonFour", { y: "30vh" });
        gsap.to(".ribbonFive", { y: "30vh" });
      } else {
        gsap.to(".ribbonTwo", { height: "20vh" });
        gsap.to(".rightUp", { y: 0 });
        gsap.to(".ribbonThree", { y: 0 });
        gsap.to(".ribbonFour", { y: 0 });
        gsap.to(".ribbonFive", { y: 0 });
      }
    }
  }, [aboutStatus]);

  const handleMenu = () => {
    setOpen(!open);
  };

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

  const navigateSelections = (e) => {
    console.dir(e.target.dataset.tag);
    navigate(`/blog/${e.target.dataset.tag}`);
    setBlogStatus(false);
    setAboutStatus(false);
    setOpen(false);
  };

  return (
    <div className="col-8">
      <div className="hamBorder" onClick={handleMenu}>
        <span className="hamTop"></span>
        <span className="hamMiddle"></span>
        <span className="hamBottom"></span>
      </div>

      <nav className="menu">
        <div className="ribbonOne">
          <i
            className={`fa-regular fa-lg fa-${
              theme === "light" ? "moon" : "sun"
            } themeButtonMobile`}
            onClick={handleTheme}
          ></i>
          <a href="/blog" onClick={handleNavClick} className="menuWord leftUp">
            Blog
          </a>
          <div className="row Links">
            <a
              className="col-6 text-center blogAref"
              onClick={navigateSelections}
              data-tag="interior"
            >
              Refurbishing the Interior
            </a>
            <a
              className="col-6 text-center blogAref"
              onClick={navigateSelections}
              data-tag="outdoor"
            >
              Outdoor Renovation
            </a>
            <a
              className="col-6 text-center blogAref"
              onClick={navigateSelections}
              data-tag="best"
            >
              Best of the Best
            </a>
            <a
              className="col-6 text-center blogAref"
              onClick={navigateSelections}
              data-tag="rate"
            >
              Rate the Wait
            </a>
            <a
              className="col-6 text-center blogAref"
              onClick={navigateSelections}
              data-tag="raccoons"
            >
              Raccoons
            </a>
            <a
              className="col-6 text-center blogAref"
              onClick={navigateSelections}
              data-tag="inspiration"
            >
              Inspirations
            </a>
            <a
              className="col-6 text-center blogAref"
              onClick={navigateSelections}
              data-tag="finds"
            >
              Good Finds
            </a>
            <a
              className="col-6 text-center blogAref"
              onClick={navigateSelections}
              data-tag="lifting"
            >
              Lifting Up Others
            </a>
          </div>
        </div>

        <div className="ribbonTwo">
          <a
            href="/about"
            onClick={handleNavClick}
            className="menuWord rightUp"
          >
            About
          </a>
          <div className="row Links">
            <a href="/blog" className="col-12 text-center aboutAref">
              Importance of Inspiration
            </a>
            <a href="/blog" className="col-12 text-center aboutAref">
              Who We Are
            </a>
            <a href="/blog" className="col-12 text-center aboutAref">
              How We Started
            </a>
          </div>
        </div>

        <div className="ribbonThree">
          <a
            href="/store"
            onClick={handleNavClick}
            className="menuWord leftDown"
          >
            Store
          </a>
        </div>

        <div className="ribbonFour">
          <a
            href="/donate"
            onClick={handleNavClick}
            className="menuWord rightDown"
          >
            Donate
          </a>
        </div>

        <div className="ribbonFive">
          <a
            href="/contact"
            onClick={handleNavClick}
            className="menuWord contact"
          >
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}
