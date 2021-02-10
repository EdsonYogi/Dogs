import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  width: ${(props) => props.wd || "100px"};
  height: ${(props) => props.hg || "40px"};
  margin-top: ${(props) => props.mt || 0};
  margin-right: ${(props) => props.mr || 0};
  margin-bottom: ${(props) => props.mb || 0};
  margin-left: ${(props) => props.ml || 0};

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  letter-spacing: 2px;
  border: 2px solid var(--color-primary);
  border-radius: 5px;
  background-color: var(--color-primary);
  transition: all 0.3s linear;

  svg {
    font-size: 30px;
    color: var(--color-others);
  }

  &.active,
  &:hover {
    background-color: var(--color-secondary);
    color: var(--color-primary);
    svg {
      color: var(--color-primary);
    }
  }
`;
