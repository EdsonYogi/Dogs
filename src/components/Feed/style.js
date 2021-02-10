import styled from "styled-components";
import LoadingPage from "../LoadingPage";

export const Loading = styled(LoadingPage)`
  && {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.25);
  }
`;
