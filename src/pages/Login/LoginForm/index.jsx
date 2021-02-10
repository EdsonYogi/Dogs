import React, { useContext } from "react";
import useForm from "../../../hooks/useForm";
import { UserContext } from "../../../UserContext";
import InputForm from "../../../components/InputForm";
import Title from "../../../components/Title";
import ErrorMessage from "../../../components/ErrorMessage";
import Button from "../../../components/Button";
import ButtonLink from "../../../components/ButtonLink";
import LoadingButton from "../../../components/LoadingButton";
import Head from "../../../components/Head";
import { LoginContent, ForgotPassword, Register } from "./style";

const LoginForm = () => {
  const { userLogin, loading, error } = useContext(UserContext);
  const login = {
    username: useForm(),
    password: useForm(),
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (login.username.validate && login.password.validate) {
      userLogin(login.username.value, login.password.value);
    }
  };

  return (
    <LoginContent>
      <Head title="Login" descripton="Login" />
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
          <LoadingButton icon="spinner" disabled={true} mb="20px" />
        ) : (
          <Button mb="20px">Log In</Button>
        )}

        {error && <ErrorMessage>{error}</ErrorMessage>}
      </form>

      <Register>
        <h2>Register</h2>
        <p>Don't have an account yet? Register on the site.</p>
        <ButtonLink to="register">Register</ButtonLink>
      </Register>
    </LoginContent>
  );
};

export default LoginForm;
