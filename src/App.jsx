import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/core/Navbar/Navbar";
import Home from "./components/core/Home/Home";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const App = () => {
  useGSAP(() => {
    const cursorMove = (e) => {
      // console.log(e);
      gsap.to("#customcursor", {
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", cursorMove);
  });
  return (
    <div>
      <div id="customcursor"></div>
      <div id="scroller"></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
