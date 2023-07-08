import React from "react";
import "./Landing.css";
import flameBg from "../flameCutout.png";
import bgVideo from "../bubbles.mp4";

function Landing({ screenWidth, breakpoint }) {
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
        <img src={flameBg} className="flameBg" />
      </section>

      <div className="container">
        <section className="row text-center sectBlog">
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

        <section className="mt-5 sectAbout">
          <div className="ornamentAbout">
            <p className="">OUR</p>
            <p className="">STORY</p>
          </div>

          <div className="row mx-3 py-4 bgAbout">
            <p className="col-6 my-4 mx-4 descAbout">
              Care to learn how we started? Enjoy discovering who we are and
              what environment we strive to foster{" "}
              <a className="buttonAbout" href="/blog">
                here.
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Landing;
