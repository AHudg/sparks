import React from "react";
import "./index.css";
import amber from "../../amberMicroBg.png";

function Post({ title, description, url, postedOn }) {
  const handleView = function (event) {
    console.log("here");
  };

  return (
    <div className="row my-3 post justify-content-center align-items-end">
      <img className="col-12 col-md-4 thumbnail" src={amber} alt={url}></img>
      <div className="col-12 col-md-8 row">
        <p className="col-8 col-md-8 title">{title}</p>
        <p className="col-4 col-md-4 postedOn">{postedOn}</p>
        <p className="col-12 col-md-8 description">{description}</p>
        <p className="viewable" onClick={handleView}>
          View More
        </p>
        <span className="border"></span>
      </div>
    </div>
  );
}

export default Post;
