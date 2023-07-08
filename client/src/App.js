import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loading from "./components/Loading/Loading";
import ThemeContext from "./components/ThemeContext";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./components/Contact";

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "light"
  );
  const [open, setOpen] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    setInterval(checkLoad, 1000);
  }, [loading]);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function checkLoad() {
    if (document.getElementsByTagName("body")[0] == undefined) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }

  const handleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    if (open) {
      setOpen(!open);
    }
  };

  return (
    <Router>
      <ThemeContext.Provider value={{ theme, handleTheme, open, setOpen }}>
        {loading === false ? (
          <div>
            {/* TODO pass theme as props to continue using dark mode throughout site */}
            {/* use localStorage for remembering dark mode upon return */}
            {/* <button onClick={handleTheme}>Theme</button> */}
            <Header screenWidth={screenWidth} breakpoint={breakpoint}></Header>

            <Routes>
              <Route
                path="/sparks"
                element={
                  <Landing screenWidth={screenWidth} breakpoint={breakpoint} />
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/donate" element={<Blog />} />
              <Route path="/contact" element={<Blog />} />
            </Routes>

            <footer>
              <Contact></Contact>
            </footer>
          </div>
        ) : (
          <Loading></Loading>
        )}
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
