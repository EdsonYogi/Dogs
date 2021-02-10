import React, { useState, createContext, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "./services/api";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const userLogin = async (username, password) => {
    try {
      setLoading(true);
      setError(null);
      const { url, options } = TOKEN_POST({ username, password });
      const responseFetch = await fetch(url, options);

      if (!responseFetch.ok) {
        throw new Error("Invalid username or password. Please try again.");
      }

      const { token } = await responseFetch.json();
      window.localStorage.setItem("token", token);
      await getUser();
      navigate("account/myAccount");
    } catch (error) {
      setError(error.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem("token");
    navigate("/login");
  }, [navigate]);

  const getUser = async () => {
    const { url, options } = USER_GET();
    const responseFetch = await fetch(url, options);
    const data = await responseFetch.json();
    setData(data);
    setLogin(true);
  };

  const TokenValidate = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const { url, options } = TOKEN_VALIDATE_POST();
      const responseFetch = await fetch(url, options);

      if (!responseFetch.ok) {
        throw new Error("Invalid Token");
      } else {
        await getUser();
      }
    } catch (error) {
      userLogout();
    } finally {
      setLoading(false);
    }
  }, [userLogout]);

  useEffect(() => {
    TokenValidate();
  }, [TokenValidate]);

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, login, loading, error }}
    >
      {children}
    </UserContext.Provider>
  );
};
