import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { LoginPage } from "./style";
import { UserContext } from "../../UserContext";

const Login = () => {
  const { login } = useContext(UserContext);

  if (login) return <Navigate to="/account" />;

  return (
    <LoginPage>
      <Outlet />
    </LoginPage>
  );
};

export default Login;
