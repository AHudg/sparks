import React from "react";
import logoWrap from "../../images/logoWrap.png";
import logoCircle from "../../images/logoCircle.png";
import "./index.css";

function Loading() {
  // TODO match with animated flame for load screen or black screen with match as cursor that has little illuminations over blank background page
  return (
    <main>
      <div className="row justify-content-center align-items-center loadContainer">
        <img src={logoWrap} className="loadImage"></img>
        <img src={logoCircle} className="loadImage rotate"></img>
      </div>
    </main>
  );
}

export default Loading;
