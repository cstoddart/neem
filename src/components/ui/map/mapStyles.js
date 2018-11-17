import styled from 'styled-components';

export const StyledMap = styled.div`
  pointer-events: none;
  
  a[href^="http://maps.google.com/maps"]{display:none !important}
  a[href^="https://maps.google.com/maps"]{display:none !important}

  .gmnoprint a, .gmnoprint span, .gm-style-cc {
      display:none;
  }
  .gmnoprint div {
      background:none !important;
  }
`;
