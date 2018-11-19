import React from 'react';

import { StyledPageHeader, Title, Subtitle } from './pageHeaderStyles';

export const PageHeader = (props) => (
  <StyledPageHeader>
    <Title>{props.title}</Title>
    <Subtitle>{props.subtitle}</Subtitle>
  </StyledPageHeader>
);
