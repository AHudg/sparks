import React, { useState, useEffect } from "react";
import Contact from "../components/Contact";
import burst from "../burst.png";
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
      <section className="aboutSect">
        <h2>Hello mi amor</h2>
        <p>Sabes que te amooooo.</p>
        <img src={burst} className="burst"></img>
      </section>

      <Contact></Contact>
    </main>
  );
}

export default About;
