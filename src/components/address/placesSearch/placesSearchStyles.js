import styled from 'styled-components';

import {
  Button,
} from '../../ui'
import {
  BORDER,
  BORDER_RADIUS,
  BOX_SHADOW,
  SPACING,
  COLORS,
} from '../../../constants';

export const StyledSearchBox = styled.div`
  margin-bottom: ${SPACING.MEDIUM};
  width: 100%;
  max-width: 500px;
  position: relative;
`;

export const SearchButton = styled(Button)`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 75px;
  border: 2px solid ${COLORS.GREEN};
  justify-content: center;
  border-top-right-radius: ${BORDER_RADIUS};
  border-bottom-right-radius: ${BORDER_RADIUS};
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  outline: 0;
  padding: 0;

  &:hover {
    background-color: white;
    color: ${COLORS.GREEN};
  }
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
