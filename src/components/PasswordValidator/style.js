import styled from "styled-components";

export const Validator = styled.ul`
  margin: 30px 0;
`;

export const Item = styled.li`
  color: ${(props) => (props.done ? "#88cb00" : "#ff6b6b")};
  margin-bottom: 5px;
  svg {
    margin-right: 10px;
  }
`;
