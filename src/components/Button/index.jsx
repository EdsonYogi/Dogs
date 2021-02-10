import React from "react";
import { ButtonDefault } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({
  children,
  icon,
  title,
  className,
  onClick,
  disabled,
  wd,
  hg,
  mt,
  mr,
  mb,
  ml,
}) => {
  return (
    <ButtonDefault
      className={className}
      title={title}
      onClick={onClick}
      disabled={disabled}
      wd={wd}
      hg={hg}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {children}
    </ButtonDefault>
  );
};

export default Button;
