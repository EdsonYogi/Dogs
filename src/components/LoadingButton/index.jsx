import React from "react";
import { Loading } from "./style";

const LoadingButton = ({ className, wd, hg, mt, mr, mb, ml }) => {
  return (
    <Loading
      icon="spinner"
      disabled={true}
      className={className}
      wd={wd}
      hg={hg}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
    />
  );
};

export default LoadingButton;
