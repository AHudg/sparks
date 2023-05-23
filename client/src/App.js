import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loading from "./components/Loading/Loading";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Blog from "./pages/Blog";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(checkLoad, 1000);
  }, []);

  const [theme, setTheme] = useState("light");

  function checkLoad() {
    if (document.getElementsByTagName("body")[0] == undefined) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }

  return (
    <Router>
      {loading === false ? (
        <div>
          {/* TODO pass theme as props to continue using dark mode throughout site */}
          {/* use localStorage for remembering dark mode upon return */}
          {/* <button onClick={handleTheme}>Theme</button> */}

          <Header theme={theme} setTheme={setTheme}></Header>

          <Routes>
            <Route path="/" element={<Landing />} />
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
