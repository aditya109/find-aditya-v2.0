import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./data/context";
import "./index.css";

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    
  </React.StrictMode>,
  document.getElementById("root")
);
