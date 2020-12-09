import React from "react";
import { Input, Label, Text, Error } from "./style";

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
      {error && <Error>{error}</Error>}
    </Input>
  );
};

export default InputForm;
