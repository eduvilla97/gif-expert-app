import React from "react";
import ReactDOM from "react-dom/client";
import { GifExpertApp } from "./Components/gif/index";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);
