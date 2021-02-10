import styled from "styled-components";
import Button from "../Button";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export const Menu = styled.nav`
  display: flex;
`;

export const Logout = styled(Button)`
  width: 50px;
  height: 50px;
  margin-left: 30px;
  svg {
    font-size: 30px;
  }
`;
