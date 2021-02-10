import React from "react";
import { TitleH1 } from "./style";

const Title = ({ children, className }) => {
  return <TitleH1 className={className}>{children}</TitleH1>;
};

export default Title;
