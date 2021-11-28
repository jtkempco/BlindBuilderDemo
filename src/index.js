import React from "react";
import ReactDOM from "react-dom";
import App from "./components/BlindBuilder/App";
import "./styles.css";

ReactDOM.render(
  <App {...pageConfig} />,
  document.getElementById("blindbuilder-area")
);
