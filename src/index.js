import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Global } from "./global.styles";

ReactDOM.render(
  <React.StrictMode>
    <Global>
      <App />
    </Global>
  </React.StrictMode>,
  document.getElementById("root")
);
