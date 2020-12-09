import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "./style";
import LoginForm from "./LoginForm/LoginForm";
import Register from "./Register/Register";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import { UserContext } from "../../UserContext";

const Login = () => {
  const { login } = useContext(UserContext);

  if (login) return <Navigate to="/account" />;

  return (
    <LoginPage>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
      </Routes>
    </LoginPage>
  );
};

export default Login;
