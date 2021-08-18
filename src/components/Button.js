import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"]; //automatically creating these styles
const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) //buttonStyle = arguement
    ? buttonStyle
    : STYLES[0]; // has button styles, change it to test or outline, if dont put anything then default will be button first position(btn-test)

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]; // has button size, change it to medium or large, if dont put anything then default will be button medium

  return (
    <Link to="/contact" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`} //making a class
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
