import React from "react";
import { Input, Label, Text } from "./style";
import ErrorMessage from "../ErrorMessage";

const InputForm = ({ id, label, type, value, onChange, error, onBlur }) => {
  return (
    <Input>
      <Label htmlFor={id}>{label}</Label>
      <Text
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Input>
  );
};

export default InputForm;
