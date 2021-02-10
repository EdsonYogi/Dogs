import styled from "styled-components";
import { Container } from "../../assets/GlobalStyle";
import Button from "../../components/Button";
import ButtonLink from "../../components/ButtonLink";

export const ContainerAccount = styled(Container)``;

export const HeaderAccount = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  nav {
    display: flex;
    position: relative;
    ul {
      display: flex;
    }
  }
`;

export const ButtonMenuMobile = styled(Button)`
  width: 50px;
  height: 50px;

  svg {
    font-size: 30px;
  }

  &.active {
    display: block;
  }
`;

export const Logout = styled(Button)`
  width: 50px;
  height: 50px;
  margin-left: 25px;

  svg {
    font-size: 30px;
  }
`;

export const Link = styled(ButtonLink)`
  background-color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: 5px;
  margin-left: 20px;

  svg {
    color: var(--color-others);
  }

  &.active,
  &:hover {
    background-color: var(--color-primary);
    color: var(--color-others);
    svg {
      color: var(--color-others);
    }
  }
`;

export const MenuAccount = styled.ul`
  display: flex;
  &.mobile {
    &.active {
      display: block;
    }

    display: none;
    background-color: var(--color-others);
    position: absolute;
    top: 0;
    right: 50px;

    ${Link} {
      justify-content: start;
      color: var(--color-primary);
      letter-spacing: 2px;
      font-weight: normal;
      font-size: 18px;
      width: 100%;
      border: none;
      border-radius: 0;
      margin-left: 0;
      padding: 0 20px;
      color: var(--color-others);

      svg {
        margin-right: 20px;
      }

      &:hover {
        background-color: var(--color-others);
        color: var(--color-primary);

        svg {
          color: var(--color-primary);
        }
      }
    }

    ${Logout} {
      width: 100%;
      justify-content: start;
      font-size: 18px;
      font-weight: normal;
      letter-spacing: 2px;
      color: var(--color-others);
      margin-left: 0;
      padding: 0 20px;
      border: none;
      border-radius: 0;
      background-color: var(--color-primary);

      svg {
        color: var(--color-others);
        margin-right: 20px;
      }

      &:hover {
        background-color: var(--color-others);
        color: var(--color-primary);

        svg {
          color: var(--color-primary);
        }
      }
    }
  }
`;
