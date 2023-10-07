import React, { useState, useEffect } from "react";
import "./Landing.css";

import Hero from "../components/Hero";
import SidebarOne from "../components/Sidebars/sidebarOne";
import SidebarTwo from "../components/Sidebars/sidebarTwo";
import SidebarThree from "../components/Sidebars/sidebarThree";

import flame from "../images/flame.png";
import bgVideo from "../images/bubbles.mp4";

function Landing({ screenWidth, breakpoint }) {
  // const [scroll, setScroll] = useState(0);

  // const handleScroll = () => {
  //   const scrollLocale = window.scrollY;
  //   setScroll(scrollLocale);
  //   console.log(scrollLocale);
  //   if (scrollLocale > 400) {
  //     gsap.to("twoRibOne", { x: "100px" });
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [scroll]);

  return (
    <main>
      <Hero
        media="video"
        src={bgVideo}
        firstLine="IGNITING"
        secondLine="INSPIRATION"
        orientation="ornamentHero ornamentRight"
        accentClass="flame"
        accent={flame}
        screenWidth={screenWidth}
      />

      <section
        className={`${
          screenWidth > breakpoint
            ? "container row text-center"
            : "row text-center"
        }`}
      ></section>
      <SidebarTwo
        screenWidth={screenWidth}
        breakpoint={breakpoint}
      ></SidebarTwo>
      {/* <SidebarThree
        screenWidth={screenWidth}
        breakpoint={breakpoint}
      ></SidebarThree>
      <SidebarOne
        screenWidth={screenWidth}
        breakpoint={breakpoint}
      ></SidebarOne> */}
    </main>
  );
}

export default Landing;
