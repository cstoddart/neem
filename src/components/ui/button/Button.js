import React, { Fragment } from 'react';

import { ArrowIcon } from '../';
import { LinkButton, OnClickButton } from './buttonStyles';

export const Button = ({ onClick, to, children, showArrow, ...props }) => (
  <Fragment>
    {to && <LinkButton to={to} {...props}>
      <Fragment>
        {children}
        {showArrow && <ArrowIcon width={20} height={20} marginLeft={15} />}
      </Fragment>
    </LinkButton>}
    {onClick && <OnClickButton onClick={onClick} {...props}>
      <Fragment>
        {children}
        {showArrow && <ArrowIcon width={20} height={20} marginLeft={15} />}
      </Fragment>
    </OnClickButton>}
  </Fragment>
);
