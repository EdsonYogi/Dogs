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

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    form {
      width: 100%;
      input {
        width: 100%;
      }
    }
  }
`;

export const Photo = styled.img`
  border-radius: 10px;
  max-height: 500px;
  @media only screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;
