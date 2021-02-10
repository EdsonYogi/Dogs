import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Validator, Item } from "./style";

const PasswordValidator = ({
  lowercase,
  uppercase,
  number,
  special,
  minimum,
}) => {
  return (
    <Validator>
      <Item done={lowercase}>
        <FontAwesomeIcon icon={lowercase ? "check" : "times"} /> Atleeast 1
        lowercase letters [a-z].
      </Item>
      <Item done={uppercase}>
        <FontAwesomeIcon icon={uppercase ? "check" : "times"} /> Atleeast 1
        uppercase letters [A-Z].
      </Item>
      <Item done={number}>
        <FontAwesomeIcon icon={number ? "check" : "times"} /> Atleeast 1 number
        [0-9].
      </Item>
      <Item done={special}>
        <FontAwesomeIcon icon={special ? "check" : "times"} /> Atleast 1
        non-alphanumeric symbolr [!@#$%^&*].
      </Item>
      <Item done={minimum}>
        <FontAwesomeIcon icon={minimum ? "check" : "times"} /> Minimum 8 digits.
      </Item>
    </Validator>
  );
};

export default PasswordValidator;
