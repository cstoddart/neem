import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { COLORS, BORDER_RADIUS_SMALL } from '../../../constants';

export const StyledButton = styled(Link)`
  background-color: ${COLORS.GREEN};
  color: white;
  padding: 15px 25px;
  font-weight: bold;
  border-radius: ${BORDER_RADIUS_SMALL};
  display: inline-flex;
  align-items: center;
  border: 3px solid ${COLORS.GREEN};
  font-size: 16px;
  cursor: pointer;

  ${({ fullWidth }) => fullWidth && `
    display: flex;
    width: 100%;
    justify-content: center;
  `}

  &:hover {
    background-color: transparent;
    color: ${COLORS.GREEN};
  }
`;
