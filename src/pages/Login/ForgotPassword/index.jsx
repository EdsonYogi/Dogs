import React from "react";
import Title from "../../../components/Title";
import InputForm from "../../../components/InputForm";
import Button from "../../../components/Button";
import LoadingButton from "../../../components/LoadingButton";
import ErrorMessage from "../../../components/ErrorMessage";
import { ForgotPasswordContent, Message } from "./style";
import useForm from "../../../hooks/useForm";
import { PASSWORD_LOST_POST } from "../../../services/api";
import Head from "../../../components/Head";
import useFetch from "../../../hooks/useFetch.js";

const ForgotPassword = () => {
  const reset = useForm();
  const { url, options } = PASSWORD_LOST_POST({
    login: reset.value,
    url: "http://localhost:3000/login/resetPassword",
  });
  const { data, error, loading, request } = useFetch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { responseFetch, dataJson } = await request(url, options);
    console.log(error);
  };

  return (
    <ForgotPasswordContent>
      <Head title="Forgot Your Password" descripton="Forgot Your Password" />
      <Title>Forgot your password?</Title>
      {data ? (
        <Message>{data}</Message>
      ) : (
        <form onSubmit={handleSubmit}>
          <InputForm
            label="E-Mail / User"
            id="forgotPassword"
            type="text"
            {...reset}
          />
          {loading ? (
            <LoadingButton icon="spinner" disabled={true} />
          ) : (
            <Button>Reset</Button>
          )}
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </form>
      )}
    </ForgotPasswordContent>
  );
};

export default ForgotPassword;
