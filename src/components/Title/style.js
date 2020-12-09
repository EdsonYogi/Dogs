import styled from "styled-components";

export const TitleH1 = styled.h1`
  font-size: 40px;
  color: var(--color-primary);
  letter-spacing: 1px;

  &::after {
    display: block;
    position: relative;
    top: -30px;
    left: -5px;
    z-index: -1;
    content: "";
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background-color: var(--color-others);
  }
`;
