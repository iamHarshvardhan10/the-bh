import React from "react";

const Button = ({ text, color }) => {
  return (
    <div className={`btn`} style={{ backgroundColor: color }}>
      {text}
    </div>
  );
};

export default Button;
