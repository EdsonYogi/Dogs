import styled from "styled-components";
import ButtonLink from "../ButtonLink";
import Button from "../Button";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export const Menu = styled.nav`
  position: relative;
`;

export const Navagation = styled.div`
  display: none;
  position: absolute;
  left: -200px;
  top: 52px;
  z-index: 9999;
  width: 250px;
  border: 2px solid var(--color-primary);
  background-color: var(--color-others);

  &.active {
    display: block;
  }
`;

export const ButtonMenuMobile = styled(Button)`
  width: 50px;
  height: 52px;
  border-radius: 0;

  svg {
    font-size: 30px;
  }

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-others);

    svg {
      color: var(--color-others);
    }
  }
`;

export const Link = styled(ButtonLink)`
  width: 100%;
  justify-content: start;
  border: none;
  border-radius: 0;
  background-color: transparent;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: 2px;
  color: var(--color-primary);
  padding: 20px;

  svg {
    color: var(--color-primary);
    margin-right: 20px;
  }

  &:hover,
  &.active {
    background-color: var(--color-primary);
    color: var(--color-others);

    svg {
      color: var(--color-others);
    }
  }
`;

export const Logout = styled(Button)`
  && {
    justify-content: start;
    width: 100%;
    height: 50px;
    background-color: var(--color-others);
    border: none;
    border-radius: 0;
    font-size: 16px;
    font-weight: normal;
    letter-spacing: 2px;
    color: var(--color-primary);
    padding: 0 20px;

    svg {
      font-size: 30px;
      color: var(--color-primary);
      margin-right: 20px;
    }

    &:hover {
      background-color: var(--color-primary);
      color: var(--color-others);

      svg {
        color: var(--color-others);
      }
    }
  }
`;
