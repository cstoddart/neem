import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { BORDER, BOX_SHADOW, COLORS } from '../../../constants';

export const StyledNavigation = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: ${BOX_SHADOW};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: ${BORDER};
`;

export const Logo = styled.div`
  font-size: 35px;
  font-weight: bold;
`;

export const StyledSteps = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  color: ${COLORS.TEXT_LIGHT};

  &.active {
    color: ${COLORS.GREEN};
  }
`;

export const NumberCircle = styled.span`
  line-height: 1;
  border: 1px solid ${COLORS.TEXT_LIGHT};
  border-radius: 100px;
  height: 20px;
  width: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  margin: 0 5px;

  .active & {
    background-color: ${COLORS.GREEN};
    border-color: ${COLORS.GREEN};
    color: white;
  }
`;

export const XButton = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: red;
`;

export const Dash = styled.div`
  background-color: ${COLORS.TEXT_LIGHT};
  height: 2px;
  width: 20px;
  margin: 0 10px;
  display: inline-block;
`;
