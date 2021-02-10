import styled from "styled-components";

export const PhotoList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 50px;
  animation: ${({ enterAnimetion }) =>
    enterAnimetion && "var(--animation-left)"};
`;
