import React from "react";
import "./Navbar.scss";
import Button from "../../common/Button";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <nav id="nav">
      <div className="logo">
        <h1>the bh</h1>
      </div>
      <div className="btn-grp">
        <NavLink to={"/sign-in"}>
          <Button text={"sign in"} color={"#FF4F0F"} />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
