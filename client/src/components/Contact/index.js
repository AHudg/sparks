import React from "react";
import "./index.css";

function Contact() {
  return (
    <footer id="contact" className="footerBg">
      <p>
        We're eager to hear from you. Questions, walkthroughs, call us. We have
        your back.
      </p>
      {/* <div className="footerContent row">
        <p className="col-12 col-lg-6 mb-2 contactHeader">Stay Connected!</p>

        <div className="col-12 col-lg-6 row justify-content-center">
          <div className="col-2 column text-center align-items-center">
            <i className="col-12 my-4 fa-brands fa-facebook fa-xl social"></i>
            <i className="col-12 my-4 fa-brands fa-twitter fa-xl social"></i>
            <i className="col-12 my-4 fa-brands fa-instagram fa-xl social"></i>
          </div>

          <div className="col-7 mt-2">
            <ul className="contactText row text-start">
              <li className="my-1">
                <a className="contactWord" href="/">
                  Home
                </a>
              </li>

              <li className="my-1">
                <a className="contactWord" href="/blog">
                  Blog
                </a>
              </li>

              <li className="my-1">
                <a className="contactWord" href="/about">
                  About
                </a>
              </li>

              <li className="my-1">
                <a className="contactWord">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <form className="col-12 mt-2 row text-center justify-content-center">
            <p className="col-12 contactCOA">Subscribe to our newsletter!</p>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="name@email.com"
              className="email col-8 mb-3"
            ></input>
            <button className="col-5 mb-4 btnSubscribe">Subscribe!</button>
          </form>
        </div>
      </div> */}
    </footer>
  );
}

export default Contact;
