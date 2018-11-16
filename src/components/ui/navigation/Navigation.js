import React from 'react';

import { StyledNavigation, Logo, StyledSteps, XButton } from './navigationStyles';

const Steps = ({ currentStep }) => (
  <StyledSteps>Address - Date + Time - Payment</StyledSteps>
);

const Navigation = () => (
  <StyledNavigation>
    <Logo>Leeif</Logo>
    <Steps currentStep="ADDRESS" />
    <XButton>X</XButton>
  </StyledNavigation>
);

export default Navigation;