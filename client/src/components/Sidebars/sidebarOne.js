import React from "react";
import "./index.css";

function SidebarOne({ screenWidth, breakpoint }) {
  return (
    <div className="sidebar">
      <iframe
        className="video"
        width={screenWidth - 40}
        height="315"
        src="https://www.youtube.com/embed/hLQl3WQQoQ0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <p className="ornament">ADELE</p>
    </div>
  );
}

export default SidebarOne;
