import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const ViewsCount = ({ views, className }) => {
  const Views = styled.span`
    color: var(--color-primary);
    svg {
      margin-right: 10px;
    }
  `;

  return (
    <Views className={className}>
      <FontAwesomeIcon icon="eye" />
      {views}
    </Views>
  );
};

export default ViewsCount;
