import React, { Component } from 'react';

import { AppContext } from '../../../AppContext';
import { logout } from '../../../services/firebase';
import {
  StyledNavigation,
  NavigationContent,
  Logo,
  StyledSteps,
  StyledNavLink,
  NumberCircle,
  Dash,
  XButton,
} from './navigationStyles';
import XImg from '../../../assets/images/x.svg';

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

export class Navigation extends Component {
  static contextType = AppContext;

  render() {
    return (
      <StyledNavigation>
        <NavigationContent>
          <Logo to="/">Neem</Logo>
          <Steps />
          <XButton onClick={() => logout({ context: this.context })}><img src={XImg} />Sign Out</XButton>
        </NavigationContent>
      </StyledNavigation>
    );
  }
}
