import styled from "styled-components";

export const RegisterContent = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  animation: var(--animation-left);
`;

export const PasswordConditions = styled.ul`
  margin: 30px 0;
`;

export const Condition = styled.li`
  color: ${(props) => (props.done ? "#88cb00" : "#ff6b6b")};
  margin-bottom: 5px;
  svg {
    margin-right: 10px;
  }
`;
