import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { Global } from "./global.styles";

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
