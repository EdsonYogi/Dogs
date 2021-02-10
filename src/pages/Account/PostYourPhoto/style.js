import styled from "styled-components";

export const PostPhoto = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  animation: var(--animation-left);
  form {
    width: calc(50% - 10px);
  }

  img {
    width: calc(50% - 10px);
  }
`;

export const Photo = styled.img`
  border-radius: 20px;
`;
