import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { COLORS, BORDER_RADIUS_SMALL } from '../../../constants';

const buttonStyles = `
  background-color: ${COLORS.GREEN};
  color: white;
  padding: 15px 25px;
  font-weight: bold;
  border-radius: ${BORDER_RADIUS_SMALL};
  display: inline-flex;
  align-items: center;
  border: 3px solid ${COLORS.GREEN};
  font-size: 16px;

  &:hover {
    background-color: transparent;
    color: ${COLORS.GREEN};
  }
`;

export const LinkButton = styled(Link)`
  ${buttonStyles}
`;

export const OnClickButton = styled.button`
  ${buttonStyles}
`;
