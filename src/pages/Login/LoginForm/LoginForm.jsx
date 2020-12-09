import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import { UserContext } from "../../../UserContext";

import InputForm from "../../../components/InputForm";
import Button from "../../../components/Button";
import Title from "../../../components/Title";
import {
  LoginContent,
  ForgotPassword,
  LoginButton,
  ButtonLoading,
  Register,
  ErrorLogin,
} from "./style";

const LoginForm = () => {
  const { userLogin, loading, error } = useContext(UserContext);
  const login = {
    username: useForm(),
    password: useForm(),
  };

  console.log(error);

  const handleSubmit = async (event) => {
    console.log("Login");
    event.preventDefault();
    if (login.username.validate && login.password.validate) {
      userLogin(login.username.value, login.password.value);
    }
  };

  return (
    <LoginContent>
      <Title>Login</Title>
      <form onSubmit={handleSubmit}>
        <InputForm label="User" id="username" type="text" {...login.username} />
        <InputForm
          label="Password"
          id="password"
          type="password"
          {...login.password}
        />
        <ForgotPassword to="forgotPassword">
          forgot your username/password?
        </ForgotPassword>
        {loading ? (
          <ButtonLoading icon="spinner" disabled={true} />
        ) : (
          <LoginButton>Log In</LoginButton>
        )}

        {error && <ErrorLogin>{error}</ErrorLogin>}
      </form>

      <Register>
        <h2>Register</h2>
        <p>Don't have an account yet? Register on the site.</p>
        <Link to="register">
          <Button>Register</Button>
        </Link>
      </Register>
    </LoginContent>
  );
};

export default LoginForm;
