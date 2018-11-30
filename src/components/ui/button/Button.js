import React, { Fragment } from 'react';

import { LinkButton, OnClickButton } from './buttonStyles';

export const Button = ({ onClick, to, children }) => (
  <Fragment>
    {to && <LinkButton to={to}>{children}</LinkButton>}
    {onClick && <OnClickButton onClick={onClick}>{children}</OnClickButton>}
  </Fragment>
);
