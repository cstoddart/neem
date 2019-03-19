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

export const Input = ({ type = 'text', label, placeholder = '', ...rest }) => (
  <Container>
    <Label>{label}</Label>
    <StyledInput>
      {type === 'text' && <input placeholder={placeholder} {...rest} />}
      {type === 'card' && <CardNumberElement style={stripeElementStyle} />}
      {type === 'expiry' && <CardExpiryElement style={stripeElementStyle} />}
      {type === 'cvc' && <CardCVCElement style={stripeElementStyle} />}
      {type === 'zip' && <PostalCodeElement style={stripeElementStyle} />}
    </StyledInput>
  </Container>
)
