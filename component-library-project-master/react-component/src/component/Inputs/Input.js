import React from "react";
const Input = props => (
  <>
    <label for={props.label}>{props.label}</label>
    <input
      name={props.label}
      label={props.label}
      placeholder={props.placeholder}
      className={props.type}
    />
  </>
);
export default Input;