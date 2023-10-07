import React, { useState, useEffect } from "react";
import burst from "../images/burst.png";
import "./About.css";
import { gsap } from "gsap";

function About() {
  const [scrollInfo, setScrollInfo] = useState(0);

  const handleScroll = () => {
    const location = window.scrollY;
    setScrollInfo(location);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    gsap.to(".burst", { rotate: scrollInfo / 5 });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollInfo]);

  return (
    <main>
      <div className="aboutNav">
        <ul className="row mx-1 mt-2 mb-0 py-2 justify-content-center align-items-center text-center">
          <li className="col-4">
            <a href="#importance">Importance of Inspiration</a>
          </li>
          <li className="col-4 middleRow">
            <a href="#ourStory">Who We Are</a>
          </li>
          <li className="col-4">
            <a href="#started">How We Started</a>
          </li>
        </ul>
      </div>

      <section className="aboutSect">
        <article>
          <h2 id="importance">Importance of Inspiration</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </article>
        <article className="pageBreak">
          <img></img>
          <img></img>
          <img></img>
        </article>
        <article>
          <h2 id="ourStory">Who We Are</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </article>
        <article>
          <h2 id="started">How We Started</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </article>
      </section>
    </main>
  );
}

export default About;
