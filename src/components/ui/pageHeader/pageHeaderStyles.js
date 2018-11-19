import styled from 'styled-components';

import { SPACING, COLORS } from '../../../constants';

export const StyledPageHeader = styled.div`
  margin-bottom: ${SPACING.MEDIUM};
`;

export const Title = styled.h1`
  margin-bottom: 10px;
`;

export const Subtitle = styled.h5`
  color: ${COLORS.TEXT_LIGHT};
  font-weight: normal;
`;
