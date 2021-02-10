import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Spinner = styled(FontAwesomeIcon)`
  font-size: 50px;
  color: var(--color-primary);
  animation: var(--animation-rotate);
`;
