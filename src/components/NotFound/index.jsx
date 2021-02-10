import React from "react";
import Title from "../Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PageNotFound, MessageError } from "./style";

const NotFound = () => {
  return (
    <PageNotFound>
      <FontAwesomeIcon icon="dog" />
      <Title>Error: 404</Title>
      <MessageError>page not found</MessageError>
    </PageNotFound>
  );
};

export default NotFound;
