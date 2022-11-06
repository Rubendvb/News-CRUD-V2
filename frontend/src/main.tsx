import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./scss/Main.scss";
import "./scss/reset.css";

import App from "./App";
import Navbar from "./components/Navbar/Navbar";
import NewsItem from "./components/NewsItem/NewsItem";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />

      <main className="containerMain">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/news/:id" element={<NewsItem />} />
        </Routes>
      </main>
    </BrowserRouter>
  </React.StrictMode>
);
