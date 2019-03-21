import React from 'react';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement
} from 'react-stripe-elements';

import { COLORS } from '../../../constants';
import {
  Container,
  Label,
  StyledInput,
} from './inputStyles';

const stripeElementStyle = {
  base: {
    color: COLORS.TEXT_LIGHT,
    fontWeight: 'bold',
    width: '100%',
  },
};

export const Input = ({
    type = 'text',
    placeholder = '',
    label,
    width,
    inverted,
    onChange,
    ...rest,
}) => (
  <Container width={width}>
    {console.log('INVERTED', inverted)}
    <Label>{label}</Label>
    <StyledInput inverted={inverted ? 1 : 0}>
      {type === 'text' && <input placeholder={placeholder} onChange={onChange} {...rest} />}
      {type === 'card' && <CardNumberElement style={stripeElementStyle} onChange={onChange} />}
      {type === 'expiry' && <CardExpiryElement style={stripeElementStyle} onChange={onChange} />}
      {type === 'cvc' && <CardCVCElement style={stripeElementStyle} onChange={onChange} />}
      {type === 'zip' && <PostalCodeElement style={stripeElementStyle} onChange={onChange} />}
    </StyledInput>
  </Container>
)
