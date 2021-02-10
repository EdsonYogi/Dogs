import React from "react";
import { Label, File } from "./style";

const Files = ({ onChange, text }) => {
  return (
    <Label htmlFor="image">
      {text}
      <File
        type="file"
        name="image"
        id="image"
        onChange={onChange}
        nameFile="teste"
      />
    </Label>
  );
};

export default Files;
