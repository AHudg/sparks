import React from "react";

export default function Hamburger() {
  return (
    <div>
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
    </div>
  );
}
