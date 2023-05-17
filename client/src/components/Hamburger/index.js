import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

export default function Hamburger() {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  gsap.from(".rectangle", { duration: 5, drawSVG: 2 });

  return (
    <div>
      <svg width="100" height="100">
        {open === true ? (
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#c03a00"
            stroke-wdith="4"
            fill="red"
          ></circle>
        ) : (
          <rect
            className="rectangle"
            width="300"
            height="300"
            stroke="#c03a00"
            stroke-wdith="4"
            fill="red"
            onClick={handleMenu}
          ></rect>
        )}
      </svg>

      {open === true ? (
        <div className="menu">
          <nav>
            <ul className="row justify-content-center">
              <li className="col-12">
                <a href="/blog">Blog</a>
              </li>
              <li className="col-12">
                <a href="/about">About</a>
              </li>
              <li className="col-12">
                <a>Store</a>
              </li>
              <li className="col-12">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <p>closed</p>
      )}
    </div>
  );
}
