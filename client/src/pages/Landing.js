import React from "react";
import Contact from "../components/Contact";

function Landing() {
  return (
    <main>
      <section>
        <iframe
          src="https://giphy.com/embed/cbipTNlosP9AY"
          className="video"
        ></iframe>
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
