import styled from "styled-components";

export const CommentField = styled.form`
  display: flex;
  textarea {
    display: block;
    width: calc(100% - 95px);
    height: 75px;
    font-size: 16px;
    color: var(--color-primary);
    padding: 10px;
    border: 2px solid var(--color-primary);
    border-radius: 5px 0 0 5px;
    outline: none;
    background-color: var(--color-secondary);
    resize: none;

    &::placeholder {
      color: var(--color-primary);
    }

    &.error {
      &::placeholder {
        color: tomato;
      }
    }
  }

  button {
    border-radius: 0 5px 5px 0;
    transition: all 0.5s linear;
    color: var(--color-secondary);
    svg {
      font-size: 40px;
    }

    &:hover {
      background-color: var(--color-primary);
      color: var(--color-others);
    }
  }
`;
