import styled, { keyframes } from "styled-components";

export const Content = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template: 100%/100%;
  grid-area: 1/1;
`;

const skeleton = keyframes`
  from {
    background-position: 0px;
  }

  to {  
    background-position: -200%;
  }
`;

export const SkeletonImg = styled.div`
  grid-area: 1/1;
  height: 100%;
  background-image: linear-gradient(
    90deg,
    #dddddd 0%,
    #cccccc 50%,
    #dddddd 100%
  );
  background-color: #dddddd;
  background-size: 200%;
  animation: ${skeleton} 1.5s infinite linear;
  opacity: 0.1;
`;

export const Img = styled.img`
  grid-area: 1/1;
  display: block;
  width: 100%;
  opacity: 0;
`;
