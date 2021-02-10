import React from "react";
import { Loading, Spinner } from "./style";

const LoadingPage = ({ className }) => {
  return (
    <Loading className={className}>
      <Spinner icon="spinner" />
    </Loading>
  );
};

export default LoadingPage;
