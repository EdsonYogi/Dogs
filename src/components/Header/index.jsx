import React, { useContext } from "react";
import { ContainerHeader, Navigation, Logo, Login, User } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserContext } from "../../UserContext";

const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <Navigation>
      <ContainerHeader>
        <Logo to="/" aria-label="Dogs - Home" title="Home">
          <FontAwesomeIcon icon="paw" />
        </Logo>
        {data ? (
          <User to="/account">
            {data.nome}
            <FontAwesomeIcon icon="user-alt" />
          </User>
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
