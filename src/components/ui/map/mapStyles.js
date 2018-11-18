import styled from 'styled-components';

import { BORDER, BORDER_RADIUS, BOX_SHADOW, SPACING } from '../../../constants';

export const StyledMap = styled.div`
  pointer-events: none;
  width: 100%;
  margin-bottom: ${SPACING.MEDIUM};
  
  a[href^="http://maps.google.com/maps"]{display:none !important}
  a[href^="https://maps.google.com/maps"]{display:none !important}

  .gmnoprint a, .gmnoprint span, .gm-style-cc {
      display:none;
  }
  .gmnoprint div {
      background:none !important;
  }
`;

export const ContainerElement = styled.div`
  height: 400px;
  width: 100%;
`;

export const MapElement = styled.div`
  height: 100%;
  width: 100%;
  border-radius: ${BORDER_RADIUS};
  border: ${BORDER};
  box-shadow: ${BOX_SHADOW};
`;
