import styled from "styled-components";
import { Container } from "../../assets/GlobalStyle";
import { Link } from "react-router-dom";

export const Navigation = styled.nav`
  position: fixed;
  top: 0;
  z-index: 9999;
  width: 100%;
  padding: 20px 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  background-color: var(--color-others);
`;

export const ContainerHeader = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  font-size: 30px;
  color: var(--color-primary);
`;

export const Login = styled(Link)`
  color: var(--color-primary);

  svg {
    margin-left: 10px;
  }
`;

export const User = styled(Link)`
  font-weight: bold;
  text-transform: capitalize;
  color: var(--color-primary);

  svg {
    font-size: 20px;
    margin-left: 10px;
  }
`;
