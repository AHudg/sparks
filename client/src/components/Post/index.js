import React from "react";
import "./index.css";
import amber from "../../amberMicroBg.png";

function Post({ title, description, url, postedOn }) {
  return (
    <div className="container">
      <div className="row my-3 post align-items-center">
        <img className="col-12 col-md-4 thumbnail" src={amber} alt={url}></img>
        <div className="col-12 col-md-8 row">
          <p className="col-12 col-md-8 title">{title}</p>
          <p className="col-12 col-md-8 description">{description}</p>
          <p className="col-12 col-md-8 postedOn">Posted on {postedOn}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
