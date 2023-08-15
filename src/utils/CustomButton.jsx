import React from "react";

const Button = ({ text, onClick, className, ...otherProps }) => {
  const combinedClassName = `customButton text semiBoldText f16 ${className}`.trim(); // Combine the general className and the passed className

  return (
    <button className={combinedClassName} onClick={onClick} {...otherProps}>
      {text}
    </button>
  );
};

export default Button;
