import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-form">
        <form>
          <div className="form-field">
            <label htmlFor="userName">User Name</label>
            <input type="text" id="userName" placeholder="User Name" />
          </div>
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
              Already Have an Account! Please <Link to={"/login"}>login</Link>
            </p>
          </div>

          <button className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
