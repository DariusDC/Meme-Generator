import React from "react";
import "./Button.css";

const Button = ({ name, handleClick }) => {
  return (
    <button className="submit" onClick={handleClick}>
      {name}
    </button>
  );
};

export default Button;
