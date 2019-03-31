import { createGlobalStyle } from 'styled-components';
import Formular from './assets/fonts/Formular.ttf';
import FormularBold from './assets/fonts/Formular-Bold.ttf';

import { COLORS } from './constants';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Formular';
    src: url(${Formular});
    font-weight: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Formular';
    src: url(${FormularBold});
    font-weight: bold;
    font-display: fallback;
  }

  body {
    font-family: 'Formular';
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    color: ${COLORS.TEXT};
  }

  p {
    margin: 0;
    color: ${COLORS.GREY_LIGHT};
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
