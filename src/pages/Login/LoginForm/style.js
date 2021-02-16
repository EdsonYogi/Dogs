import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 50px;

  @media only screen and (max-width: 768px) {
    padding: 50px 5%;
    align-items: center;
    width: 100%;

    form {
      width: 100%;
      input {
        width: 100%;
      }
    }
  }
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

export const Register = styled.div`
  width: 100%;
  margin-top: 50px;
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
