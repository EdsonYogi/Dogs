import React, { useState, useEffect } from "react";
import Title from "../../../components/Title";
import InputForm from "../../../components/InputForm";
import Button from "../../../components/Button";
import LoadingButton from "../../../components/LoadingButton";
import ErrorMessage from "../../../components/ErrorMessage";
import PasswordValidator from "../../../components/PasswordValidator";
import useFetch from "../../../hooks/useFetch.js";
import useForm from "../../../hooks/useForm";
import { PASSWORD_RESET_POST } from "../../../services/api";
import { ResetPasswordContent } from "./styled";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [login, setLogin] = useState(null);
  const [key, setKey] = useState(null);

  const password = useForm("password");
  const { lowercase, uppercase, number, special, minimum } = password;
  const { error, loading, request } = useFetch();

  const navegate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET_POST({
        login,
        key,
        password: password.value,
      });

      const { responseFetch } = await request(url, options);
      if (responseFetch.ok) {
        navegate("/login");
      }
    }
  };

  return (
    <ResetPasswordContent>
      <Title>Reset Password</Title>
      <form onSubmit={handleSubmit}>
        <InputForm
          label="New password:"
          id="newPassword"
          type="password"
          {...password}
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
          <Button>Reset</Button>
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </form>
    </ResetPasswordContent>
  );
};

export default ResetPassword;
