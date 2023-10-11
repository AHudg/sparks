import React from "react";
import ReactDOM from "react-dom";
import burst from "../images/burst.png";
import "./About.css";
import { gsap } from "gsap";

function About(screenWidth) {
  // const [scrollInfo, setScrollInfo] = useState(0);

  // const handleScroll = () => {
  //   const location = window.scrollY;
  //   setScrollInfo(location);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   gsap.to(".burst", { rotate: scrollInfo / 5 });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [scrollInfo]);

  // gsap.to(".mist", { y: "100px" });

  function randomSelect(max) {
    var ranNum = Math.floor(Math.random() * max);
    return ranNum;
  }

  const colors = [
    "--mist: rgb(153, 207, 205);",
    "--aqua: rgb(18, 144, 142);",
    "--teal: rgb(22, 89, 74);",
    "--sandstone: rgb(249, 143, 69);",
    "--vermillion: rgb(196, 66, 26);",
  ];
  const sizes = ["20px", "40px", "60px"];

  const squareStyle = {
    backgroundColor: colors[randomSelect(colors.length)],
    height: sizes[randomSelect(sizes.length)],
  };

  squareStyle.width = squareStyle.height;

  const createSquare = () => {
    return <div classname="square" style={squareStyle}></div>;
  };

  function startSquares() {
    const newSquare = createSquare();
    const animationEl = document.getElementsByClassName("animation");
    console.log(animationEl[0]);
    ReactDOM.render(newSquare, animationEl[0]);
  }

  // let squareGenerator = setInterval(() => {
  //   if (!document.hidden) {
  //     startSquares();
  //   }
  // }, 1500);

  return (
    <main>
      <div className="aboutNav">
        <ul className="row mx-1 mt-2 mb-0 py-2 justify-content-center align-items-center text-center">
          <li className="col-4">
            <a href="#importance">Importance of Inspiration</a>
          </li>
          <li className="col-4 middleRow">
            <a href="#ourStory">Who We Are</a>
          </li>
          <li className="col-4">
            <a href="#started">How We Started</a>
          </li>
        </ul>
      </div>

      <section className="aboutSect">
        <article id="importance">
          <h2>Importance of Inspiration</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </article>

        <article id="ourStory">
          <h2>Who We Are</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </article>

        <article id="started">
          <h2>How We Started</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </article>
      </section>

      <div className="animation row justify-content-around">
        {/* {colors.map((classes, i) => (
          <div
            className={classes.color + " " + classes.size}
            key={`color${i}`}
            data-tag={`color${i}`}
          ></div>
        ))} */}
      </div>
    </main>
  );
}

export default About;
