import React from "react";
import ReactDOM from "react-dom";
import "./Application";
import Application from "./Application";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  rootElement
);
