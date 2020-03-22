import React from "react";
const Thumbnail = props => (
  <>
    <img className='mainImage' src={props.mainPicture} />
    <img className='hoverImage' src={props.hoverPicture} />
  </>
);
export default Thumbnail;