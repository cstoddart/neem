import styled from 'styled-components';

import { SPACING } from '../../../constants';

export const InputRow = styled.div`
  display: flex;
  margin-bottom: ${SPACING.SMALL};

  & > *:not(:last-of-type) {
    padding-right: ${SPACING.SMALL};
  }
`;
