import React, { useState, useEffect } from "react";
import "./index.css";

function Hero({ media, src, firstLine, secondLine, accent, accentClass }) {
  return (
    <section className="sectHero">
      {media === "video" ? (
        <video autoPlay loop muted className="mediaHero">
          <source src={src} type="video/mp4" />
          We're sorry. This video is not supported in your browser.
        </video>
      ) : (
        <img src={src} className="mediaHero"></img>
      )}
      <div className="ornamentHero">
        <p>{firstLine}</p>
        <p>{secondLine}</p>
      </div>
      <img src={accent} className={accentClass} />
    </section>
  );
}

export default Hero;
