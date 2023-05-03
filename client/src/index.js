import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./index.css";
import App from "./App";
import Loading from "./pages/Loading";
import checkPage from "./utils/checkPage";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div id="app">
      <App />
    </div>
    <div id="loading">
      <Loading />
    </div>
  </React.StrictMode>
);

checkPage.onReady(function () {
  checkPage.show("app", true);
  checkPage.show("loading", false);
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
