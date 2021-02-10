import React from "react";
import { Error } from "./style";

const ErrorMessage = ({ children, className }) => {
  return <Error className={className}>{children}</Error>;
};

export default ErrorMessage;
