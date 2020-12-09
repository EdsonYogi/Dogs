import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  ContainerHeader,
  Navigation,
  Logo,
  Login,
  UserMenu,
  User,
  Logout,
} from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserContext } from "../../UserContext";

const Header = () => {
  const { data, userLogout } = useContext(UserContext);

  return (
    <Navigation>
      <ContainerHeader>
        <Logo to="/" aria-label="Dogs - Home" title="Home">
          <FontAwesomeIcon icon="paw" />
        </Logo>
        {data ? (
          <UserMenu>
            <User>
              {data.nome}
              <FontAwesomeIcon icon="user-alt" />
            </User>
            <Logout
              onClick={userLogout}
              icon="sign-out-alt"
              title="Logout"
            ></Logout>
          </UserMenu>
        ) : (
          <Login to="login">
            Login / Register
            <FontAwesomeIcon icon="user-alt" />
          </Login>
        )}
      </ContainerHeader>
    </Navigation>
  );
};

export default Header;
