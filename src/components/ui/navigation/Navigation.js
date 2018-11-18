import React from 'react';
import { NavLink } from 'react-router-dom';

import { Row } from '../row/Row';

import {
  StyledNavigation,
  Logo,
  StyledSteps,
  StyledNavLink,
  NumberCircle,
  Dash,
  XButton,
} from './navigationStyles';

const Steps = () => (
  <StyledSteps>
    <StyledNavLink 
      to="/address"
      activeClassName="active"
    >
      <NumberCircle>1</NumberCircle>
      Address
    </StyledNavLink>
    <Dash />
    <StyledNavLink
      to="/date-time"
      activeClassName="active"
    >
      <NumberCircle>2</NumberCircle>
      Date + Time
    </StyledNavLink>
    <Dash />
    <StyledNavLink
      to="/payment"
      activeClassName="active"
    >
      <NumberCircle>3</NumberCircle>
      Payment
    </StyledNavLink>
  </StyledSteps>
);

const Navigation = () => (
  <StyledNavigation>
    <Row>
      <Logo>Leeif</Logo>
      <Steps />
      <XButton>X</XButton>
    </Row>
  </StyledNavigation>
);

export default Navigation;