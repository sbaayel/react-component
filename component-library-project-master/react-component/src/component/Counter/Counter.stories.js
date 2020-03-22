import React from "react";
import { storiesOf } from "@storybook/react";
import Counter from "./Counter";
import "./Counter.css";
storiesOf("Counter", module)
  .add("Count", () => (
    <Counter value={2} startValue={0} minValue={-5} maxValue={20} />
  ))