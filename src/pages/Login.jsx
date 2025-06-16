import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="register-container">
      <div className="register-form">
        <form>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="password" />
          </div>
          <div className="form-field">
            <p>
              Dont have account! Please <Link to={"/register"}>Register</Link>
            </p>
          </div>
          <button className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
