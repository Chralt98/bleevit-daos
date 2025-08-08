import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // HashRouter works reliably on IPFS
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
