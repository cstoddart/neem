import React, { Fragment } from 'react';

import { ArrowIcon } from 'src/components/ui';
import { StyledButton } from './buttonStyles';

export const Button = ({
  onClick,
  to,
  children,
  showArrow,
  fullWidth,
  alignRight,
  ...props,
}) => (
  <StyledButton
    as={onClick && 'button'}
    to={to}
    onClick={onClick}
    fullWidth={fullWidth ? 1 : 0}
    alignRight={alignRight ? 1 : 0}
    {...props}
  >
    <Fragment>
      {children}
      {showArrow && <ArrowIcon width={20} height={20} marginLeft={15} />}
    </Fragment>
  </StyledButton>
);
