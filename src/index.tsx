import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import "./index.css";
import Router from "./routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <NavBar />
        <Router />
    </React.StrictMode>
);
