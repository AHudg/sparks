import React from "react";
import Contact from "../components/Contact";
import flameBg from "../flameOutline.png";

function Landing() {
  return (
    <main>
      <section className="sectLanding">
        <img src={flameBg} className="flameBg" />
      </section>
      <section className="sectBlog">
        <div className="blogCOA"></div>
      </section>
      <section className="sectAbout">
        <div className="aboutCOA"></div>
      </section>
      <Contact></Contact>
    </main>
  );
}

export default Landing;
