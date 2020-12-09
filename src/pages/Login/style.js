import styled from "styled-components";
import ImgDog from "../../assets/img/login.jpg";

export const LoginPage = styled.section`
  display: flex;
  height: calc(100vh - 65px);
  animation: var(--animation-left);
  &::before {
    display: block;
    width: 50%;
    height: calc(100vh - 65px);
    content: "";
    background-image: url(${ImgDog});
    background-size: cover;
    background-position: center;
  }
`;

export const ImgLogin = styled.img`
  display: block;
  width: 50%;
`;
