import React from "react";
import "./BackgroundImage.scss";

const BackgroundImage = ({ className, style, ...props }) => {
  return <div className={className} style={style}></div>;
};

export default BackgroundImage;
