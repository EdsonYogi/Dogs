import styled from "styled-components";
import ImgDog from "../../assets/img/login.jpg";

export const LoginPage = styled.section`
  display: flex;
  min-height: calc(100vh - 175px);
  animation: var(--animation-left);
  &::before {
    display: block;
    width: 50%;
    height: calc(100vh - 175px);
    content: "";
    background-image: url(${ImgDog});
    background-size: cover;
    background-position: center;
  }

  @media only screen and (max-width: 768px) {
    &::before {
      display: none;
    }
  }
`;

export const ImgLogin = styled.img`
  display: block;
  width: 50%;
`;
