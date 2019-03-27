import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

import { BORDER, BOX_SHADOW, COLORS, SITE_WIDTH } from '../../../constants';

export const StyledNavigation = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${BORDER};
`;

export const NavigationContent = styled.div`
  width: 90%;
  max-width: ${SITE_WIDTH};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 15px 0;
`;

export const Logo = styled(Link)`
  font-size: 35px;
  z-index: 1;
  color: ${COLORS.TEXT};
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
  font-size: 13px;
  letter-spacing: 2px;
  color: ${COLORS.TEXT_LIGHT};

  &.active {
    color: ${COLORS.GREEN};
  }
`;

export const NumberCircle = styled.span`
  line-height: 1;
  border: 1.5px solid ${COLORS.TEXT_LIGHT};
  border-radius: 100px;
  height: 20px;
  width: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  margin-right: 7px;
  padding-left: 2px;

  .active & {
    background-color: ${COLORS.GREEN};
    border-color: ${COLORS.GREEN};
    color: white;
  }
`;

export const SignOut = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #e86c60;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    margin-right: 5px;
  }
`;

export const SignIn = styled(Link)`
  font-size: 14px;
  font-weight: bold;
  color: #e86c60;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Dash = styled.div`
  background-color: ${COLORS.TEXT_LIGHT};
  height: 2px;
  width: 20px;
  margin: 0 10px;
  display: inline-block;
`;
