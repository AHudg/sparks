import React, { useState, useEffect } from "react";
import "./Landing.css";
import SidebarOne from "../components/Sidebars/sidebarOne";
import SidebarTwo from "../components/Sidebars/sidebarTwo";
import SidebarThree from "../components/Sidebars/sidebarThree";
import flame from "../flame.png";
import bgVideo from "../bubbles.mp4";
import { gsap } from "gsap";

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
      <section className="sectHero">
        <video autoPlay loop muted className="videoHero">
          <source src={bgVideo} type="video/mp4" />
          We're sorry. This video is not supported in your browser.
        </video>
        <div className="ornamentHero">
          <p>IGNITING</p>
          <p>INSPIRATION</p>
        </div>
        <img src={flame} className="flameBg" />
      </section>

      <div className={`${screenWidth > breakpoint ? "container" : ""}`}>
        <section className="row text-center">
          <div className="col-7 row justify-content-center mx-3">
            <p className="col-12 mt-4 coaBlog">
              Cheering you on for your next DIY, we illuminate your interest and
              encourage you to get out and go do! Here is your spark, now ignite
              your inspiration.
            </p>
            {screenWidth < breakpoint ? (
              ""
            ) : (
              <a className="col-6 my-4 text-center buttonBlog" href="/blog">
                Explore!
              </a>
            )}
          </div>
        </section>
        <SidebarTwo
          screenWidth={screenWidth}
          breakpoint={breakpoint}
        ></SidebarTwo>
        <SidebarThree
          screenWidth={screenWidth}
          breakpoint={breakpoint}
        ></SidebarThree>
        <SidebarOne
          screenWidth={screenWidth}
          breakpoint={breakpoint}
        ></SidebarOne>
      </div>
    </main>
  );
}

export default Landing;
