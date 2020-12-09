import React from "react";
import { RegisterContent } from "./style";
import Title from "../../../components/Title";
import Button from "../../../components/Button";
import InputForm from "../../../components/InputForm";
import useForm from "../../../hooks/useForm";

const Register = () => {
  const register = {
    username: useForm(),
    email: useForm(),
    password: useForm(),
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(register);
  };

  return (
    <RegisterContent>
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
        <Button>Register</Button>
      </form>
    </RegisterContent>
  );
};

export default Register;
