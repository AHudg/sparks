import React from "react";
import Contact from "../components/Contact";
import flameBg from "../flameOutline.png";

function Landing() {
  return (
    <main>
      <section className="sectBlog"></section>
      <img src={flameBg} className="flameBg" />
      <section className="sectAbout"></section>
      <Contact></Contact>
    </main>
  );
}

export default Landing;
