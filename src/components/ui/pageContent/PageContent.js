import styled from 'styled-components';

import { SPACING } from '../../../constants';

export const PageContent = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: ${SPACING.MEDIUM};

  & > *:not(:last-of-type) {
    margin-right: 50px;
  }
`;
