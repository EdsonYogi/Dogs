import styled from "styled-components";

export const Input = styled.div`
  display: block;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
  letter-spacing: 1px;
  color: var(--color-primary);
`;

export const Text = styled.input`
  width: 300px;
  background-color: var(--color-secondary);
  border: 2px solid var(--color-primary);
  border-radius: 5px;
  padding: 10px;
  color: var(--color-primary);
  outline: none;
  transition: all 0.3s linear;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: var(--color-primary);
    -webkit-box-shadow: 0 0 0px 1000px var(--color-secondary) inset;
  }

  &:hover {
    box-shadow: 0px 0px 5px var(--color-primary);
  }
`;

export const Error = styled.p`
  color: tomato;
  margin-top: 10px;
`;
