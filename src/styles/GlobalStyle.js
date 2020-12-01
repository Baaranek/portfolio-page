import { createGlobalStyle } from 'styled-components';
import media from '@utils/media';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Acme&family=Open+Sans:wght@300;400&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Acme', sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.ground};
  }
  html {
    font-size: 16px;
    overflow: hidden;

    ${media.medium`
      font-size: 14px;
    `}

    ${media.small`
    font-size: 12px;
    `}
  }
`;

export default GlobalStyle;
