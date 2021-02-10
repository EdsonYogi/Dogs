import React, { Fragment, useEffect } from "react";

const Head = ({ title, descripton }) => {
  useEffect(() => {
    document.title = `${title} | Dogs`;
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", descripton || "");
  }, [title, descripton]);
  return <Fragment></Fragment>;
};

export default Head;
