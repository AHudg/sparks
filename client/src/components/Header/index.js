import React, { useContext } from "react";
import "./index.css";
import Hamburger from "../Hamburger";

export default function Header({ screenWidth, breakpoint }) {
  return (
    <header className="sticky">
      <div className="row justify-content-between align-items-end">
        <a href="/sparks" className="col-4">
          <h1>Kindling</h1>
        </a>

        {screenWidth < breakpoint ? (
          <Hamburger></Hamburger>
        ) : (
          <div className="col-8">
            <nav>
              <ul className="row justify-content-center align-items-end">
                <li className="col-2">
                  <a href="/blog" className="navWord">
                    Blog
                  </a>
                </li>
                <li className="col-2">
                  <a href="/about" className="navWord">
                    About
                  </a>
                </li>
                <li className="col-2">
                  <a className="navWord">Store</a>
                </li>
                <li className="col-2">
                  <a href="#contact" className="navWord">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
