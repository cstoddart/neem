import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { COLORS, BORDER_RADIUS_SMALL } from '../../../constants';

export const Button = styled(Link)`
  background: ${COLORS.GREEN};
  color: white;
  padding: 15px 25px;
  font-weight: bold;
  border-radius: ${BORDER_RADIUS_SMALL};
  display: inline-block;
`;
