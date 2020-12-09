import { useState } from "react";

const useForm = (type) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  const types = {
    email: {
      regex: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,
      message: "Enter a valid email address.",
    },
  };

  const validate = (value) => {
    if (type === false) {
      return true;
    } else if (value.length === 0) {
      setError("Enter a valid value.");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
    } else {
      setError(null);
      return true;
    }
  };

  const onChange = ({ target }) => {
    validate(value);
    setValue(target.value);
  };

  return {
    value,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
    error,
  };
};

export default useForm;
