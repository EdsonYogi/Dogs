import React, { useContext } from "react";
import { RegisterContent } from "./style";
import { USER_POST } from "../../../services/api";
import { UserContext } from "../../../UserContext";
import useFetch from "../../../hooks/useFetch";
import useForm from "../../../hooks/useForm";
import Title from "../../../components/Title";
import InputForm from "../../../components/InputForm";
import PasswordValidator from "../../../components/PasswordValidator";
import Button from "../../../components/Button";
import ErrorMessage from "../../../components/ErrorMessage";
import LoadingButton from "../../../components/LoadingButton";
import Head from "../../../components/Head";

const Register = () => {
  const register = {
    username: useForm(),
    email: useForm("email"),
    password: useForm("password"),
  };

  const { lowercase, uppercase, number, special, minimum } = register.password;

  const { userLogin } = useContext(UserContext);
  const { request, error, loading } = useFetch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password, email } = register;
    if (username.validate() && password.validate() && email.validate()) {
      const { url, options } = USER_POST({
        username: username.value,
        email: email.value,
        password: password.value,
      });

      const { responseFetch } = await request(url, options);
      if (responseFetch.ok) {
        userLogin(username.value, password.value);
      }
    }
  };

  return (
    <RegisterContent>
      <Head title="Register" descripton="Register" />
      <Title>Register</Title>
      <form onSubmit={handleSubmit}>
        <InputForm
          label="Username"
          id="username"
          type="text"
          {...register.username}
        />
        <InputForm label="E-Mail" id="email" type="email" {...register.email} />
        <InputForm
          label="Password"
          id="password"
          type="password"
          {...register.password}
        />
        <PasswordValidator
          lowercase={lowercase}
          uppercase={uppercase}
          number={number}
          special={special}
          minimum={minimum}
        />
        {loading ? (
          <LoadingButton icon="spinner" disabled={true} />
        ) : (
          <Button>Register</Button>
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </form>
    </RegisterContent>
  );
};

export default Register;
