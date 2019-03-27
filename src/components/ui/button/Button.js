import React, { Fragment } from 'react';

import { ArrowIcon } from '../';
import { StyledButton } from './buttonStyles';

export const Button = ({ onClick, to, children, showArrow, fullWidth, ...props }) => (
  <Fragment>
    {to && <LinkButton to={to} fullWidth={fullWidth ? 1 : 0} {...props}>
      <Fragment>
        {children}
        {showArrow && <ArrowIcon width={20} height={20} marginLeft={15} />}
      </Fragment>
    </LinkButton>}
    {onClick && <OnClickButton onClick={onClick} fullWidth={fullWidth ? 1 : 0} {...props}>
      <Fragment>
        {children}
        {showArrow && <ArrowIcon width={20} height={20} marginLeft={15} />}
      </Fragment>
    </OnClickButton>}
  </Fragment>
);
