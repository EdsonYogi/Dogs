import styled from "styled-components";

export const ButtonDefault = styled.button`
  width: ${(props) => props.wd || "100px"};
  height: ${(props) => props.hg || "40px"};
  margin-top: ${(props) => props.mt || 0};
  margin-right: ${(props) => props.mr || 0};
  margin-bottom: ${(props) => props.mb || 0};
  margin-left: ${(props) => props.ml || 0};

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  letter-spacing: 2px;
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
    font-size: 18px;
  }
`;
