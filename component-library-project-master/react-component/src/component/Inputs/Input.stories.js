import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./Input";
import "./Input.css";
storiesOf("Inputs", module)
  .add("Input small", () => (
    <Input label="Email" placeholder="Email" type="input-small" />
  ))
  .add("Input medium", () => (
    <Input label="Email" placeholder="Email" type="input-medium" />
  ))
  .add("Input large", () => (
    <Input label="Email" placeholder="Email" type="input-large" />
  ));