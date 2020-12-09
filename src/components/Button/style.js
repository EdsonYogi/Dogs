import styled from "styled-components";

export const ButtonDefault = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
  color: var(--color-others);
  outline: none;
  border: 2px solid var(--color-primary);
  border-radius: 5px;
  background-color: var(--color-primary);
  transition: all 0.3s linear;
  cursor: pointer;

  &:hover {
    background-color: var(--color-secondary);
    color: var(--color-primary);
  }

  svg {
    margin-left: 5px;
    font-size: 18px;
  }
`;
