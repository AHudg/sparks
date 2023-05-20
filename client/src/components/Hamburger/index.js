import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { Timeline } from "gsap/gsap-core";

export default function Hamburger() {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  // {open === true ? (
  //   <div className="menu">
  //     <nav>
  //       <ul className="row justify-content-center">
  //         <li className="col-12">
  //           <a href="/blog">Blog</a>
  //         </li>
  //         <li className="col-12">
  //           <a href="/about">About</a>
  //         </li>
  //         <li className="col-12">
  //           <a>Store</a>
  //         </li>
  //         <li className="col-12">
  //           <a href="#contact">Contact</a>
  //         </li>
  //       </ul>
  //     </nav>
  //   </div>
  // ) : (
  //   <p>closed</p>
  // )}

  return (
    <div>
      <svg width="300" height="300">
        <svg
          version="1.1"
          baseProfile="tiny"
          id="Layer_1"
          x="0px"
          y="0px"
          width="570px"
          height="150px"
          viewBox="0 0 570 150"
        ></svg>

        {open === true ? (
          <circle
            cx="11"
            cy="11"
            r="9"
            stroke="#ff840080"
            strokeWidth="3"
            fill="#ff840080"
            className="rectangle"
            onClick={handleMenu}
          ></circle>
        ) : (
          <rect
            className="rectangle"
            x="0"
            y="0"
            width="100"
            height="100"
            stroke="#ff840080"
            strokeMiterlimit="10"
            strokeWidth="5"
            strokeOpacity={0}
            fillOpacity={0.5}
            id="rectang"
            fill="#ff840080"
            onClick={handleMenu}
            onMouseEnter={() => gsap.to("rect", { y: 100, strokeOpacity: 1 })}
          ></rect>
        )}
      </svg>
    </div>
  );
}
