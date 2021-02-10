import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 50px;
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
