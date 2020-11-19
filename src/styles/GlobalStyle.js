import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Comfortaa', serif;
  }
  html {
    font-size: 16px;
    overflow: hidden;
  }
`;

export default GlobalStyle;
