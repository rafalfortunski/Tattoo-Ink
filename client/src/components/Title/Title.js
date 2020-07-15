import React from "react";
import PropTypes from "prop-types";
import "./Title.scss";

const tags = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
};

const Title = ({ level, children, ...props }) => {
  return React.createElement(tags[level] || tags.h1, props, children);
};

Title.propTypes = {
  level: PropTypes.oneOf(Object.values(tags)).isRequired,
};

Title.defaultProps = {
  level: tags.h2,
};

export default Title;
