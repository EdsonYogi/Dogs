import { useState } from "react";
import usePasswordValidator from "./usePasswordValidator";

const useForm = (type) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);
  const {
    passwordValidator,
    lowercase,
    uppercase,
    number,
    special,
    minimum,
  } = usePasswordValidator(value);

  const types = {
    email: {
      regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Enter a valid email address.",
    },
    number: {
      regex: /^\d+$/,
      message: "Invalid value. Enter only numeric values.",
    },
  };

  const validate = (value) => {
    if (type === false) {
      return true;
    } else if (value.length === 0) {
      setError("Enter a valid value.");
      return false;
    } else if (type === "password" && value.length > 0) {
      if (passwordValidator(value)) {
        setError(null);
        return true;
      } else {
        setError(
          "Make sure the password meets all the requirements stated below."
        );
        return false;
      }
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
    } else {
      setError(null);
      return true;
    }
  };

  const onChange = ({ target }) => {
    setValue(target.value);
    validate(target.value);
  };

  return {
    value,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
    error,
    lowercase,
    uppercase,
    number,
    special,
    minimum,
  };
};

export default useForm;
