import styled from "styled-components";
import Title from "../../../Title";
import LoadingPage from "../../../LoadingPage";
import ErrorMessage from "../../../ErrorMessage";
import CommentForm from "./CommentForm";
import CommentsUsers from "./CommentsUsers";

export const Content = styled.div`
  display: flex;
  width: 980px;
  height: 600px;
  background-color: var(--color-secondary);
  animation: var(--animation-left);

  @media only screen and (max-width: 768px) {
    width: 90vw;
    height: auto;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
  }
`;

export const Photo = styled.img`
  width: 60%;
  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: 90vw;
    max-height: 60vh;
  }
`;

export const InfoPhoto = styled.div`
  width: 100%;
  padding: 20px;
`;

export const Data = styled.div`
  height: 150px;
`;

export const RowOne = styled.div`
  display: flex;
  justify-content: space-between;

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
  margin-bottom: 20px;

  span {
    border-left: 5px solid var(--color-primary);
    font-size: 20px;
    color: var(--color-primary);
    padding-left: 10px;
    margin-right: 50px;
  }
`;

export const NameDog = styled(Title)`
  margin-top: 20px;
`;

export const Comments = styled.div`
  display: flex;
  height: calc(100% - 150px);
  flex-direction: column;
`;

export const CommentFild = styled(CommentForm)`
  margin-top: 20px;
`;

export const UserCommentsList = styled(CommentsUsers)`
  height: 100%;
`;

export const DeletePhoto = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  max-width: 1000px;
  width: 100%;
  max-height: 600px;
  height: 100%;
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
