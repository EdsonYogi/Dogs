import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { Header, Logout, Menu } from "./style";
import Title from "../Title";
import ButtonLink from "../ButtonLink";

const MenuWeb = () => {
  const { userLogout } = useContext(UserContext);
  const [title, setTitle] = useState("My Account");
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case "/account":
        setTitle("My Account");
        break;
      case "/account/statistics":
        setTitle("Statistics");
        break;
      case "/account/PostYourPhoto":
        setTitle("Post Your Photo");
        break;
      default:
        break;
    }
  }, [pathname]);

  return (
    <Header>
      <Title>{title}</Title>
      <Menu>
        <ButtonLink
          to="/account"
          icon="th-large"
          title="My Account"
          end
          wd="50px"
          hg="50px"
        />
        <ButtonLink
          to="/account/statistics"
          icon="chart-bar"
          title="Statistics"
          ml="30px"
          wd="50px"
          hg="50px"
        />
        <ButtonLink
          to="/account/PostYourPhoto"
          icon="plus"
          title="Post Your Photo"
          ml="30px"
          wd="50px"
          hg="50px"
        />
        <Logout icon="sign-out-alt" onClick={userLogout} title="Logout" />
      </Menu>
    </Header>
  );
};

export default MenuWeb;
