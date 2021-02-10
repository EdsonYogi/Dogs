import styled from "styled-components";

export const PageNotFound = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: var(--color-secondary);
  position: absolute;

  svg {
    font-size: 75px;
    margin-bottom: 30px;
    color: var(--color-primary);
  }
`;

export const MessageError = styled.span`
  font-size: 20px;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 10px;
`;
