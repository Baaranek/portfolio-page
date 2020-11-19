import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Acme&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Acme', sans-serif;
    background-color: ${({ theme }) => theme.colors.ground}
  }
  html {
    font-size: 16px;
    overflow: hidden;
  }
`;

export default GlobalStyle;
