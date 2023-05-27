import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <footer>
      <div className="row my-2 justify-content-center align-items-center">
        <p className="col-8 my-0 contactHeader">Stay Connected!</p>
        <i className="col-1 fa-brands fa-facebook social"></i>
        <i className="col-1 fa-brands fa-twitter social"></i>
        <i className="col-1 fa-brands fa-instagram social"></i>
      </div>
      <div>
        <ul className="contactText">
          <li>
            <a className="contactWord" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="contactWord" href="/blog">
              Blog
            </a>
          </li>
          <li>
            <a className="contactWord" href="/about">
              About
            </a>
          </li>
          <li>
            <a className="contactWord">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Contact;
