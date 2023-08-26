import React from "react";
import Terms from "../Modal/Terms";
import Privacy from "../Modal/Privacy";

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
    <div>
      <p className="footer">© 2023 Kindling by J. </p>
      <Terms />
      <Privacy />
    </div>
  );
}

export default Footer;
