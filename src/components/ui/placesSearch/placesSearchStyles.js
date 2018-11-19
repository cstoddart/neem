import styled from 'styled-components';

import { BORDER, BORDER_RADIUS, BOX_SHADOW, SPACING } from '../../../constants';

export const StyledSearchBox = styled.div`
  margin-bottom: ${SPACING.MEDIUM};
  width: 100%;
`;

export const Input = styled.input`
  border: ${BORDER};
  width: 100%;
  max-width: 500px;
  font-size: 14px;
  font-weight: bold;
  padding: 15px 20px;
  border-radius: ${BORDER_RADIUS};
  box-shadow: ${BOX_SHADOW};
  outline: none;
  line-height: 1;
  text-overflow: ellipsis;
`;
