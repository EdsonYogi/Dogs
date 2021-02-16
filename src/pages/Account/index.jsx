import React from "react";
import { Outlet } from "react-router-dom";
import useMedia from "../../hooks/useMedia";
import MenuWeb from "../../components/MenuWeb";
import MenuMobile from "../../components/MenuMobile";
import { Container } from "../../assets/GlobalStyle";
import { Content } from "./style";

const Account = () => {
  const mobile = useMedia("(max-width: 640px)");

  return (
    <Content>
      <Container>
        {mobile ? <MenuMobile /> : <MenuWeb />}
        <Outlet />
      </Container>
    </Content>
  );
};

export default Account;
