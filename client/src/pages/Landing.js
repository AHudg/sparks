import React from "react";
import Contact from "../components/Contact";
import "./Landing.css";
import flameBg from "../flameOutline.png";

function Landing() {
  return (
    <main>
      <section className="sectBlog row">
        <div className="col-12 ornamentBlog">
          <p className="">IGNITING</p>
          <p className="">INSPIRATION</p>
        </div>

        <div className="col-7 row mx-4">
          <p className="col-12 descBlog">
            Built to uplift. We illuminate your interest and dreams so that you
            can start living your own life. Here is your spark, now ignite your
            inspiration.
          </p>
          <a className="col-8 mx-3 mb-5 text-center buttonBlog" href="/blog">
            Visit the Blog!
          </a>
        </div>

        <img src={flameBg} className="flameBg" />
      </section>

      <section className="sectAbout">
        <div className="ornamentAbout">
          <p className="">OUR</p>
          <p className="">STORY</p>
        </div>

        <div className="col-7 row mx-4">
          <p className="col-12 descAbout">
            Care to learn how we started? Want to meet the team? Enjoy
            discovering who we are and what environment we strive to foster.
          </p>
          <a className="col-8 mx-4 mb-5 text-center buttonAbout" href="/blog">
            Read Our Story!
          </a>
        </div>
      </section>

      <section className="sectShop">
        <div className="ornamentShop">
          <p className="">SPREAD</p>
          <p className="">THE WORD</p>
        </div>

        <div className="col-7 row mx-4">
          <p className="col-12 descShop">
            Care to learn how we started? Want to meet the team? Enjoy
            discovering who we are and what environment we strive to foster.
          </p>
          <a className="col-8 mx-4 mb-5 text-center buttonShop" href="/blog">
            Read Our Story!
          </a>
        </div>
      </section>

      <Contact></Contact>
    </main>
  );
}

export default Landing;
