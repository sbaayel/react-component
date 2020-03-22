import React from "react";
import { storiesOf } from "@storybook/react";
import Select from "./Select";
import "./Select.css";
// const Select = props => (
//   <>
//     <select id={props.label}>Select</select>
//     <option value={props.label} className={props.type} />
//   </>
// );
storiesOf("Forms", module)
  .add("Select large", () => <Select type="select-large" />)
  .add("Select medium", () => <Select type="select-medium" />)
  .add("Select small", () => <Select type="select-small" />);