import React, { Component, Fragment, createRef } from 'react';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement
} from 'react-stripe-elements';

import { COLORS } from 'src/constants';
import {
  Container,
  Label,
  InputContainer,
  StyledInput,
  PasswordInput,
  ShowPasswordButton,
} from './inputStyles';

const stripeElementStyle = {
  base: {
    color: COLORS.TEXT_LIGHT,
    fontWeight: 'bold',
    width: '100%',
  },
};

export class Input extends Component {
  state = {
    showPassword: false,
  };

  passwordInput = createRef();

  togglePassword = () => {
    this.passwordInput.current.focus();
    return this.setState((state) => ({ showPassword: !state.showPassword }));
  }

  render() {
    const {
      type = 'text',
      placeholder = '',
      label,
      width,
      inverted,
      onChange,
      ...rest
    } = this.props;
    return (
      <Container width={width}>
        <Label>{label}</Label>
        <InputContainer inverted={inverted ? 1 : 0} isPassword={type === 'password' ? 1 : 0}>
          {type === 'text' && <StyledInput placeholder={placeholder} onChange={onChange} {...rest} />}
          {type === 'password' && <Fragment>
            <PasswordInput ref={this.passwordInput} type={this.state.showPassword ? 'text' : 'password'} placeholder={placeholder} onChange={onChange} {...rest} />
            <ShowPasswordButton onClick={this.togglePassword} />
          </Fragment>}
          {type === 'cardNumber' && <CardNumberElement style={stripeElementStyle} />}
          {type === 'expiration' && <CardExpiryElement style={stripeElementStyle} />}
          {type === 'securityCode' && <CardCVCElement style={stripeElementStyle} />}
          {type === 'zip' && <PostalCodeElement style={stripeElementStyle} />}
        </InputContainer>
      </Container>
    )
  }
}

