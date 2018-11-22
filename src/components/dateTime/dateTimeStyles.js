import styled from 'styled-components';

import { SPACING } from '../../constants';
import { Button } from '../ui';

export const DateTimeContent = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: ${SPACING.MEDIUM};

  & > *:not(:last-of-type) {
    margin-right: 50px;
  }
`;

export const StyledButton = styled(Button)`
  margin-left: auto;
`;
