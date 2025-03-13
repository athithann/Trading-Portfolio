import React from "react";
import ReactDOM from "react-dom";
import 'react-web-tabs/dist/react-web-tabs.css';
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App profile='athithan' />
  </React.StrictMode>,
  document.getElementById("root")
);
