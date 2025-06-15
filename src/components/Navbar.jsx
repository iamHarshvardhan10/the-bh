import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <h1>THE BLOG HUB</h1>
      </div>
      <div className="nav-link">
        <Link to={"/register"}>Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
