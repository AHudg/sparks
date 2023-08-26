import React from "react";

function Footer() {
  function handleContact(event) {
    console.log(event.target);
    if (event.target.innerHTML === "Privacy Policy") {
      console.log("tapped Privacy");
    } else {
      console.log("tapped Terms");
    }
  }

  return (
    <footer className="row text-center">
      <p className="footer">
        © 2023 Kindling by J.{" "}
        <button onClick={handleContact} className="footerBtn">
          Terms of Service
        </button>{" "}
        <button onClick={handleContact} className="footerBtn">
          Privacy Policy
        </button>
      </p>
    </footer>
  );
}

export default Footer;
