import React from "react";

import "./custom-button.styles.css";

const CustomButton = ({ children, small, ...otherProps }) => (
  <div
    className={`${small ? "small-button" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </div>
);

export default CustomButton;
