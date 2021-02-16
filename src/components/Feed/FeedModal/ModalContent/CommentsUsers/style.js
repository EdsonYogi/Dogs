import styled from "styled-components";

export const CommentsList = styled.ul`
  width: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Comment = styled.li`
  border-radius: 5px;
  background-color: var(--color-others);
  margin-bottom: 10px;

  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    background-color: var(--color-primary);
    margin-bottom: 5px;
    padding: 5px 10px;
    border-radius: 5px 5px 0px 0px;
  }

  p {
    color: var(--color-primary);
    padding: 10px;
  }
`;
