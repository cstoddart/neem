import React, { Fragment } from 'react';

import { LinkButton, OnClickButton } from './buttonStyles';

export const Button = ({ onClick, to, children, ...props }) => (
  <Fragment>
    {to && <LinkButton to={to} {...props}>{children}</LinkButton>}
    {onClick && <OnClickButton onClick={onClick} {...props}>{children}</OnClickButton>}
  </Fragment>
);
