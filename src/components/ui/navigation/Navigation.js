import React from 'react';

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
import X from '../../../assets/images/x.svg';

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

export const Navigation = () => (
  <StyledNavigation>
    <Row>
      <Logo to="/">Leeif</Logo>
      <Steps />
      <XButton to="/"><img src={X} /></XButton>
    </Row>
  </StyledNavigation>
);
