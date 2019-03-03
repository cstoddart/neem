import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const SearchButton = styled(Link)`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 75px;
  background-color: ${COLORS.GREEN};
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: ${BORDER_RADIUS};
  border-bottom-right-radius: ${BORDER_RADIUS};
  outline: 0;
  color: white;

  &:hover {
    background-color: white;
    border: 2px solid ${COLORS.GREEN};
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
