import React from "react";
import Contact from "../components/Contact";
import "./Landing.css";
import flameBg from "../flameOutline.png";

function Landing() {
  return (
    <main>
      <section className="sectBlog row">
        <div className="col-12 slogan">
          <p className="">IGNITING</p>
          <p className="">INSPIRATIONS</p>
        </div>

        <div className="col-7 row">
          <p className="col-12 descBlog">
            Built to uplift. We illuminate your interest and dreams so that you
            can start living your own life.
          </p>
          <a className="col-8 mx-4 mb-5 text-center buttonBlog" href="/blog">
            Visit the Blog!
          </a>
        </div>

        <img src={flameBg} className="flameBg" />
      </section>

      <section className="sectAbout">
        <div className="slogan vertical">
          <p className="">CONVERSATION</p>
          <p className="">STIMULATING</p>
        </div>

        <div className="col-7 row">
          <p className="col-12 descBlog">
            Built to uplift. We illuminate your interest and dreams so that you
            can start living your own life.
          </p>
          <a className="col-8 mx-4 mb-5 text-center buttonBlog" href="/blog">
            Visit the Blog!
          </a>
        </div>
      </section>

      <Contact></Contact>
    </main>
  );
}

export default Landing;
