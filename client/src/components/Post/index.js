import React from "react";
import "./Post.css";
import homeLogo from "../../homeLogo.png";

function Post({ title, description, url, postedOn }) {
  return (
    <div className="row">
      <img className="col-12 col-md-4 thumbnail" src={homeLogo} alt={url}></img>
      <p className="col-12 col-md-8 title">{title}</p>
      <p className="col-12 col-md-8 description">{description}</p>
      <p className="col-12 col-md-8 postedOn">Posted on {postedOn}</p>
    </div>
  );
}

export default Post;
