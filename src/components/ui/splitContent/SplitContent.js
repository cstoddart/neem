import styled from 'styled-components';

import { SPACING } from 'src/constants';

export const SplitContent = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: ${SPACING.MEDIUM};

  & > *:not(:last-of-type) {
    margin-right: 25px;
  }

  & > *:not(:first-of-type) {
    margin-left: 25px;
  }
`;
