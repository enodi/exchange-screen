import React from "react";

const Button = props => (
  <button className={`button ${props.color} ${props.size}`}>
    {props.text}
  </button>
);

export default Button;
