import { useState, useEffect } from "react";

const usePasswordValidator = (password) => {
  const [lowercase, setLowercase] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [special, setSpecial] = useState(false);
  const [minimum, setMinimum] = useState(false);

  const passwordValidator = () => {
    if (/^(?=.*[a-z])/.test(password)) {
      setLowercase(true);
    } else {
      setLowercase(false);
    }

    if (/^(?=.*[A-Z])/.test(password)) {
      setUppercase(true);
    } else {
      setUppercase(false);
    }

    if (/^(?=.*[0-9])/.test(password)) {
      setNumber(true);
    } else {
      setNumber(false);
    }

    if (/^(?=.*[!@#$%^&*])/.test(password)) {
      setSpecial(true);
    } else {
      setSpecial(false);
    }

    if (/^(?=.{8,})/.test(password)) {
      setMinimum(true);
    } else {
      setMinimum(false);
    }

    if (lowercase && uppercase && number && special && minimum) {
      return true;
    }
  };

  const emptyPassword = () => {
    setLowercase(false);
    setUppercase(false);
    setNumber(false);
    setSpecial(false);
    setMinimum(false);
  };

  useEffect(() => {
    passwordValidator(password);
  });

  return {
    passwordValidator,
    emptyPassword,
    lowercase,
    uppercase,
    number,
    special,
    minimum,
  };
};

export default usePasswordValidator;
