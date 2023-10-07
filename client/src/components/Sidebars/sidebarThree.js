import React, { useState, useEffect } from "react";
import "./index.css";
import { gsap } from "gsap";

function SidebarThree({ screenWidth, breakpoint }) {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const scrollLocale = window.scrollY;
    setScroll(scrollLocale);
    console.log(scrollLocale);
    if (scrollLocale > 700) {
      gsap.to(".threeRibOne", { x: "50vw" });
      gsap.to(".threeRibTwo", { x: "-50vw" });
      gsap.to(".threeRibThree", { x: "100vw" });
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
      <div className="threeRibOne">
        <div
          id="carouselExampleControls"
          className="carousel slide sideCarousel"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              {/* <img className="d-block w-100" src={Jalene} alt="First slide" /> */}
            </div>
            <div className="carousel-item">
              {/* <img className="d-block w-100" src={Andrew} alt="Second slide" /> */}
            </div>
            <div className="carousel-item">
              {/* <img className="d-block w-100" src={Andrew2} alt="Third slide" /> */}
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div className="threeRibTwo">
        <p className="topOrnament">TOP</p>
        <p className="bottomOrnament">PICKS</p>
      </div>

      <div className="threeRibThree">
        <div className="row py-5 mx-2 text-center bgAbout">
          <p className="col-12">
            <span className="emphasized">Hands. Down.</span> These are the
            products that you need in your life!
          </p>
        </div>
      </div>
    </section>
  );
}

export default SidebarThree;
