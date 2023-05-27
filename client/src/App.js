import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loading from "./components/Loading/Loading";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Blog from "./pages/Blog";

function App() {
  const [loading, setLoading] = useState(true);

  const [theme, setTheme] = useState("light");

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setInterval(checkLoad, 1000);
  }, []);

  function checkLoad() {
    if (document.getElementsByTagName("body")[0] == undefined) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }

    if (open) {
      setOpen(!open);
    }
  };

  return (
    <Router>
      {loading === false ? (
        <div>
          {/* TODO pass theme as props to continue using dark mode throughout site */}
          {/* use localStorage for remembering dark mode upon return */}
          {/* <button onClick={handleTheme}>Theme</button> */}

          <Header
            theme={theme}
            setTheme={setTheme}
            handleTheme={handleTheme}
            open={open}
            setOpen={setOpen}
          ></Header>

          <Routes>
            <Route
              path="/"
              element={<Landing theme={theme} setTheme={setTheme} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          <footer></footer>
        </div>
      ) : (
        <Loading></Loading>
      )}
    </Router>
  );
}

export default App;
