import React from "react";
import logoWrap from "../../logoWrap.png";
import logoCircle from "../../logoCircle.png";
import "./index.css";

function Loading() {
  // TODO match with animated flame for load screen or black screen with match as cursor that has little illuminations over blank background page
  return (
    <main>
      <div className="loadContainer">
        <img src={logoWrap} className="loadImage"></img>
        <img src={logoCircle} className="loadImage rotate"></img>
      </div>
    </main>
  );
}

export default Loading;
