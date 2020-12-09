import React from "react";
import { ButtonDefault } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ children, icon, title, className, onClick, disabled }) => {
  return (
    <ButtonDefault
      className={className}
      title={title}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      <FontAwesomeIcon icon={icon} />
    </ButtonDefault>
  );
};

export default Button;
