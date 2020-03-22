import React from 'react';
// This is a functional component - just sent up a little differently as an arrow function!
const Checkbox = (props) => (
  <>
    <label className={props.boxColor}>
      <input className={props.type} type="checkbox" />{props.label}
      <span class={props.checkStyle}></span>
    </label>
  </>
);
export default Checkbox;