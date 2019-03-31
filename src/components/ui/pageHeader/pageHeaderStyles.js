import styled from 'styled-components';

import { SPACING, COLORS } from 'src/constants';

export const StyledPageHeader = styled.div`
  margin-bottom: ${SPACING.MEDIUM};
`;

export const Title = styled.h1`
  margin-bottom: 5px;
`;

export const Subtitle = styled.h4`
  color: ${COLORS.TEXT_LIGHT};
  font-weight: normal;
`;
