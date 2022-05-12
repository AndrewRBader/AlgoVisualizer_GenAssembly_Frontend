import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import router
import { BrowserRouter as Router } from "react-router-dom";

// wrap our application inside of router to enable using router
ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
