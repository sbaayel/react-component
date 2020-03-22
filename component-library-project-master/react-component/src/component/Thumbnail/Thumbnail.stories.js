import React from "react";
import { storiesOf } from "@storybook/react";
import Thumbnail from "./Thumbnail";
import "./Thumbnail.css";
import Picture1 from '../Images/product.png'
import HoverPicture from '../Images/product1.png'
storiesOf("Thumbnails", module)
  .add("Test", () => (
    <Thumbnail mainPicture={Picture1} hoverPicture={HoverPicture} />
  ))

  