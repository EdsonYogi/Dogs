import styled from "styled-components";
import Title from "../../../Title";
import LoadingPage from "../../../LoadingPage";
import ErrorMessage from "../../../ErrorMessage";

export const Content = styled.div`
  display: grid;
  grid-template:
    "photo infoPhoto" 150px
    "photo commentsUsers" calc(100% - 285px)
    "photo commentForm" 95px / 60% calc(40% - 20px);
  gap: 20px;
  width: 1024px;
  height: 600px;
  background-color: var(--color-secondary);
  animation: var(--animation-left);

  .commentForm {
    grid-area: commentForm;
  }

  .commentsUsers {
    grid-area: commentsUsers;
  }
`;

export const Photo = styled.img`
  width: 100%;
  height: 600px;
  grid-area: photo;
`;

export const InfoPhoto = styled.div`
  grid-area: infoPhoto;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 20px 80px 30px;
  max-height: 600px;
  margin-top: 20px;
  margin-right: 20px;
`;

export const RowOne = styled.div`
  display: flex;
  justify-content: space-between;
  grid-column: 1/3;

  span {
    color: var(--color-primary);
  }

  a {
    color: var(--color-primary);

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const RowTwo = styled.div`
  display: flex;
  align-items: center;
  grid-column: 1/3;

  span {
    border-left: 5px solid var(--color-primary);
    font-size: 20px;
    color: var(--color-primary);
    padding-left: 10px;
    margin-right: 50px;
  }
`;

export const NameDog = styled(Title)`
  && {
    grid-column: 1/3;
    margin: 10px 0;
  }
`;

export const DeletePhoto = styled.div`
  grid-area: 1/1/4/3;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const LoadingDelete = styled(LoadingPage)`
  width: 100%;
  height: 100%;
`;

export const Error = styled(ErrorMessage)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
`;
