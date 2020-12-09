import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 50px;
`;

export const ForgotPassword = styled(Link)`
  display: block;
  text-transform: capitalize;
  color: var(--color-primary);
  margin: 20px 0;
  &:hover {
    text-decoration: underline;
  }
`;

export const LoginButton = styled(Button)`
  width: 100px;
  margin-bottom: 20px;
`;

export const ButtonLoading = styled(Button)`
  width: 100px;
  margin-bottom: 20px;

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-others);
  }

  svg {
    font-size: 20px;
    margin: 0 auto;
    transform: rotate(20deg);
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Register = styled.div`
  h2 {
    color: var(--color-primary);

    &::after {
      display: block;
      content: "";
      width: 50px;
      height: 5px;
      background-color: var(--color-primary);
      border-radius: 10px;
      margin-top: 5px;
    }
  }

  p {
    color: var(--color-primary);
    margin: 30px 0;
  }
`;

export const ErrorLogin = styled.span`
  display: block;
  margin: 20px 0;
  color: var(--color-error);
`;
