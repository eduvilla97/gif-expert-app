import React from "react";
import ReactDOM from "react-dom/client";
import { GifExpertApp } from "./Components/gif/GifExpertApp";
import "./styles.css";

console.log(import.meta.env);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);
