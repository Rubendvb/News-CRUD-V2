import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./scss/App.scss";
import "./scss/reset.css";

import App from "./App";
import Navbar from "./components/Navbar/Navbar";
import NewsList from "./components/NewsList/NewsList";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />

      <div className="containerApp">
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
