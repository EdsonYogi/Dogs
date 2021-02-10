import styled from "styled-components";
import DataPhoto from "../../components/Feed/FeedModal/ModalContent";

export const PhotoContent = styled(DataPhoto)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin: 50px 0;

  img {
    width: 700px;
    height: auto;
    border-radius: 10px;
    margin: 0 auto;
    margin-bottom: 50px;
  }

  #dataDog {
    margin: 0;
  }
`;
