import React from "react";
import { Link } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonLink = ({
  icon,
  to,
  end,
  children,
  className,
  title,
  wd,
  hg,
  mt,
  mr,
  mb,
  ml,
}) => {
  return (
    <Link
      to={to}
      end={end}
      className={className}
      title={title}
      wd={wd}
      hg={hg}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
    >
      {icon && <FontAwesomeIcon icon={icon} />} {children}
    </Link>
  );
};

export default ButtonLink;
