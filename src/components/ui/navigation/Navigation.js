import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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
  SignOut,
  SignIn,
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

class NavigationClass extends Component {
  static contextType = AppContext;

  render() {
    return (
      <StyledNavigation>
        <NavigationContent>
          <Logo to="/">Neem</Logo>
          <Steps />
          {this.context.user.loggedIn
            ? <SignOut onClick={() => logout({
              context: this.context,
              redirect: () => this.props.history.push('/login'),
            })}><img src={XImg} />Sign Out</SignOut>
            : <SignIn to="/login">Sign In</SignIn>
          }
        </NavigationContent>
      </StyledNavigation>
    );
  }
}

export const Navigation = withRouter(NavigationClass);
