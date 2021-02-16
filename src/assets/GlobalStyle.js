import styled, { keyframes, createGlobalStyle } from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
`;

const animeLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: initial;
  }
`;

const animeRotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const GlobalStyle = createGlobalStyle`

:root {
  --color-primary: #f1c21d;
  --color-secondary: #3b3a35;
  --color-others: #1b1b1b;
  --color-error: tomato;
  --animation-left: ${animeLeft} 1s forwards;
  --animation-rotate: ${animeRotate} 1s linear infinite;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

body {
  letter-spacing: 2px;
  background-color: var(--color-secondary);
  padding-top: 75px;
}

a {
  text-decoration: none;
  color: #000;
}

li {
  list-style: none;
}
`;
