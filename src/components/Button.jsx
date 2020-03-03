import React from "react";

const Button = props => (
  <button
    className={`button ${props.color} ${props.size}`}
    disabled={props.disabled}
  >
    {props.text}
  </button>
);

export default Button;
