import React, { useState, useEffect } from "react";
import "./index.css";
import { gsap } from "gsap";
import hatTip from "../../hatTip.png";
import sitting from "../../sitting.png";
import upClose from "../../upClose.png";

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
      <div className="twoRibOne">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={hatTip} alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={sitting} alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={upClose} alt="Third slide" />
            </div>
          </div>
        </div>
      </div>

      <div className="twoRibTwo">
        <p className="topOrnament">OUR</p>
        <p className="bottomOrnament">STORY</p>
      </div>

      <div className="twoRibThree"></div>

      <div className="row py-5 mx-2 text-center bgAbout">
        <p className="col-12">Find out why we do what we do.</p>
      </div>
    </section>
  );
}

export default SidebarTwo;
