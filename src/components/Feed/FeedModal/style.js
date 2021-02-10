import styled from "styled-components";

export const Modal = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.75);

  &.active {
    display: flex;
  }
`;
