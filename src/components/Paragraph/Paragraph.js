import React from "react";
import PropTypes from "prop-types";

const Paragraph = ({ children, className, ...props }) => {
  return <p className={className}>{children}</p>;
};

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Paragraph;
