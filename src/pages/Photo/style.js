import styled from "styled-components";
import DataPhoto from "../../components/Feed/FeedModal/ModalContent";

export const PhotoContent = styled(DataPhoto)`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  margin: 50px 0;

  img {
    width: 100%;
    border-radius: 10px;
  }

  .InfoPhoto {
    padding: 0;
    margin: 50px 0;
    .commentsUsers {
      margin: 20px 0;
      max-height: 400px;
    }
  }
`;
