import React from "react";
import "./index.css";
import { gsap } from "gsap";
import amber from "../../images/amberMicroBg.png";

function Post({ title, description, url, postedOn, iterator }) {
  const handleView = function (event) {
    const status = event.target;
    const description = document.getElementById(
      status.getAttribute("data-iterator")
    );

    if (event.target.localName === "button") {
      if (status.getAttribute("data-more") === "close") {
        gsap.to(description, { height: "auto" });
        status.setAttribute("data-more", "open");
      } else {
        gsap.to(description, { height: "50px" });
        status.setAttribute("data-more", "close");
      }
    }
  };

  return (
    <div className="row my-3 post justify-content-start">
      <img className="col-12 col-md-4 thumbnail" src={amber} alt={url}></img>
      <div className="col-12 col-md-8 row align-items-end">
        <p className="col-8 col-md-8 title">{title}</p>
        <p className="col-4 col-md-4 postedOn text-end">{postedOn}</p>
        <div className="col-12 row" onClick={handleView}>
          <p id={iterator} className="col-12 col-md-8 description">
            {description}
          </p>
          <button
            data-more="close"
            data-iterator={iterator}
            className="col-4 viewable"
          >
            View More
          </button>
          <span className="border"></span>
        </div>
      </div>
    </div>
  );
}

export default Post;
