import styled from "styled-components";

export const ForgotPasswordContent = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 50px;
  animation: var(--animation-left);

  @media only screen and (max-width: 768px) {
    margin-left: 0;
    padding: 0 5%;
    form {
      input {
        width: 100%;
      }
    }
  }
`;

export const Message = styled.span`
  font-size: 25px;
  color: var(--color-primary);
  animation: var(--animation-left);
`;
