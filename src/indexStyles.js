import { createGlobalStyle } from 'styled-components';
import LatoRegular from './assets/fonts/Lato-Regular.ttf';
import LatoBold from './assets/fonts/Lato-Bold.ttf';

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

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Lato';
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`;
