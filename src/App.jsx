import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/core/Navbar/Navbar";
import Home from "./components/core/Home/Home";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
