import styled from "styled-components";

export const PhotoList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 10px;
  animation: ${({ enterAnimetion }) =>
    enterAnimetion && "var(--animation-left)"};

  li:nth-child(1) {
    grid-column: 1 / 3;
    grid-row: span 2;
  }

  li:nth-child(5) {
    grid-column: 2 / 4;
    grid-row: span 2;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
