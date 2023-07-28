import React, { useState, useEffect } from "react";
import "./index.css";
import { gsap } from "gsap";

function SidebarTwo({ screenWidth, breakpoint }) {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const scrollLocale = window.scrollY;
    setScroll(scrollLocale);
    console.log(scrollLocale);
    if (scrollLocale > 400) {
      gsap.to(".twoRibOne", { x: "50vw" });
      gsap.to(".twoRibTwo", { x: "-50vw" });
      gsap.to(".twoRibThree", { x: "100vw" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <section className="mt-5 sectAbout">
      <div className="twoRibOne"></div>
      <div className="twoRibTwo"></div>
      <div className="twoRibThree"></div>

      <div className="ornamentAbout">
        <p>OUR</p>
        <p>STORY</p>
      </div>

      <div className="row py-5 mx-2 text-center bgAbout">
        <p className="col-12">Find out why we do what we do.</p>
      </div>
    </section>
  );
}

export default SidebarTwo;
