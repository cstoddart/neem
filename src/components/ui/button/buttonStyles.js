import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { COLORS, BORDER_RADIUS_SMALL } from '../../../constants';
import arrowGreen from '../../../assets/images/arrow-green.svg';
import arrow from '../../../assets/images/arrow.svg';

const buttonStyles = `
  background: ${COLORS.GREEN};
  color: white;
  padding: 15px 25px;
  font-weight: bold;
  border-radius: ${BORDER_RADIUS_SMALL};
  display: inline-block;
  border: 3px solid ${COLORS.GREEN};

  &:after {
    content: url(${arrow});
    margin-left: 10px;
  }

  &:hover {
    background-color: transparent;
    color: ${COLORS.GREEN};
  }

  &:hover:after {
    content: url(${arrowGreen});
  }
`;

export const LinkButton = styled(Link)`
  ${buttonStyles}
`;

export const OnClickButton = styled.button`
  ${buttonStyles}
`;
