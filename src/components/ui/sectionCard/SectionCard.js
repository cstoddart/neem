import styled from 'styled-components';

import { BORDER_RADIUS_SMALL } from '../../../constants';

export const SectionCard = styled.div`
  padding: 15px 25px;
  border-radius: ${BORDER_RADIUS_SMALL};
  position: relative;
  
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;
