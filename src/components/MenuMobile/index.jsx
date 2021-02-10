import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import {
  Header,
  Menu,
  Navagation,
  Link,
  Logout,
  ButtonMenuMobile,
} from "./style";
import Title from "../Title";

const MenuMobile = () => {
  const { userLogout } = useContext(UserContext);
  const [title, setTitle] = useState("My Account");
  const { pathname } = useLocation();
  const [mobile, setMobile] = useState(null);

  useEffect(() => {
    switch (pathname) {
      case "/account":
        setTitle("My Account");
        setMobile(false);
        break;
      case "/account/statistics":
        setTitle("Statistics");
        setMobile(false);
        break;
      case "/account/PostYourPhoto":
        setTitle("Post Your Photo");
        setMobile(false);
        break;
      default:
        break;
    }
  }, [pathname]);

  return (
    <Header>
      <Title>{title}</Title>
      <Menu>
        <Navagation className={mobile && "active"}>
          <Link to="/account" icon="th-large" title="My Account" end>
            My Account
          </Link>
          <Link to="/account/statistics" icon="chart-bar" title="Statistics">
            Statistics
          </Link>
          <Link to="/account/PostYourPhoto" icon="plus" title="Post Your Photo">
            Post Your Photo
          </Link>
          <Logout
            icon="sign-out-alt"
            onClick={() => {
              setMobile(false);
              userLogout();
            }}
            title="Logout"
          >
            Logout
          </Logout>
        </Navagation>
        <ButtonMenuMobile icon="bars" onClick={() => setMobile(!mobile)} />
      </Menu>
    </Header>
  );
};

export default MenuMobile;
