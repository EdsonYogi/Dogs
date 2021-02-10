import styled from "styled-components";
import Button from "../Button/index";

export const Loading = styled(Button)`
  width: ${(props) => props.wd || "100px"};
  height: ${(props) => props.hg || "40px"};
  margin-top: ${(props) => props.mt || 0};
  margin-right: ${(props) => props.mr || 0};
  margin-bottom: ${(props) => props.mb || 0};
  margin-left: ${(props) => props.ml || 0};

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-others);
  }

  svg {
    font-size: 20px;
    margin: 0 auto;
    animation: var(--animation-rotate);
  }
`;
