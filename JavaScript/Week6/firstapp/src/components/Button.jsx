import React from "react";

const Button = ({ text, color, someFunction }) => {
  return (
    <button
      onClick={someFunction}
      className="btn"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

export default Button;
