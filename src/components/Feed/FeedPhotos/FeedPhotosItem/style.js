import styled from "styled-components";
import Views from "../../../ViewsCount";

export const Photo = styled.li`
  display: grid;
  cursor: pointer;
  grid-template: 100%/100%;
  @media only screen and (max-width: 768px) {
    width: calc(50% - 10px);
  }
`;

export const View = styled(Views)`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: 1/1;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  color: var(--color-primary);
  opacity: 0;
  transition: opacity 0.5s linear;

  &:hover {
    opacity: 1;
  }
`;
