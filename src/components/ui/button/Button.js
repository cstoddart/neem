import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { COLORS, BORDER_RADIUS_SMALL } from '../../../constants';
import arrow from '../../../assets/images/arrow.svg';

export const Button = styled(Link)`
  background: ${COLORS.GREEN};
  color: white;
  padding: 15px 25px;
  font-weight: bold;
  border-radius: ${BORDER_RADIUS_SMALL};
  display: inline-block;

  &:after {
    content: url(${arrow});
    margin-left: 10px;
  }
`;
