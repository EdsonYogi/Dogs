import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  padding-right: 10px;
  font-size: 14px;
  border: 2px solid var(--color-primary);
  border-radius: 5px;
  background-color: var(--color-primary);
  cursor: pointer;

  /* &::before {
    display: flex;
    align-items: center;
    width: 100%;
    height: 35px;
    color: var(--color-primary);
    margin-right: 10px;
    padding-left: 10px;
    border: 2px solid var(--color-primary);
    border-radius: 5px;
    background-color: var(--color-secondary);
    content: "Teste";
  } */
`;

export const File = styled.input`
  display: none;
`;
