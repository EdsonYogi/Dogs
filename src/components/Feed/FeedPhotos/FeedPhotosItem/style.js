import styled from "styled-components";
import Views from "../../../ViewsCount";

export const Photo = styled.li`
  display: grid;
  cursor: pointer;

  &:nth-child(1) {
    grid-column: 1 / 3;
    grid-row: span 2;
  }

  &:nth-child(5) {
    grid-column: 2 / 4;
    grid-row: span 2;
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
