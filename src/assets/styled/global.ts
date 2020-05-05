import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`    
  html {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: 'Open Sans', 'Roboto', 'Helvetica Neue', sans-serif;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }
`;
