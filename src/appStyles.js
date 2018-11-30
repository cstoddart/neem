import { createGlobalStyle } from 'styled-components';
import LatoRegular from './assets/fonts/Lato-Regular.ttf';
import LatoBold from './assets/fonts/Lato-Bold.ttf';

import { COLORS } from './constants';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Lato';
    src: url(${LatoRegular});
    font-weight: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Lato';
    src: url(${LatoBold});
    font-weight: bold;
    font-display: fallback;
  }

  body {
    font-family: 'Lato';
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  input {
    background-color: transparent;
    border: none;
    outline: none;
    color: ${COLORS.TEXT_LIGHT};
    font-weight: bold;
  }

  .pac-logo:after {
    content: initial;
  }
`;
