import React from "react";
import Title from "../../../components/Title";
import InputForm from "../../../components/InputForm";
import Button from "../../../components/Button";
import { ForgotPasswordContent } from "./style";
import useForm from "../../../hooks/useForm";

const ForgotPassword = () => {
  const reset = useForm();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(reset.value);
  };

  return (
    <ForgotPasswordContent>
      <Title>Forgot your password?</Title>
      <form onSubmit={handleSubmit}>
        <InputForm
          label="E-Mail / User"
          id="forgotPassword"
          type="text"
          {...reset}
        />
        <Button>Reset Password</Button>
      </form>
    </ForgotPasswordContent>
  );
};

export default ForgotPassword;
