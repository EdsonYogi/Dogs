import styled, { keyframes, createGlobalStyle } from "styled-components";

export const Container = styled.div`
  width: 800px;
  padding: 0 20px;
  margin: 0 auto;
`;

const animeLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }

  to {
    opacity: 1;
    transform: initial;
  }
`;

export const GlobalStyle = createGlobalStyle`

:root {
  --color-primary: #f1c21d;
  --color-secondary: #3b3a35;
  --color-others: #1b1b1b;
  --color-error: tomato;
  --animation-left: ${animeLeft} 0.5s forwards;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Georgia, 'Times New Roman', Times, serif;
  letter-spacing: 2px;
  background-color: var(--color-secondary);
  padding-top: 75px;
}

a {
  text-decoration: none;
  color: #000;
}

ul {
  list-style: none;
}

`;
