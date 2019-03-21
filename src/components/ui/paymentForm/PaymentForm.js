import React, { Component, Fragment } from 'react';
import {
  Elements,
  injectStripe,
} from 'react-stripe-elements';
import axios from 'axios';

import { FIREBASE_FUNCTION_URL } from '../../../keys';
import {
  SectionContainer,
  Input,
  InputRow,
  Button,
} from '../';

class PaymentInputs extends Component {
  state = {
    cardNumber: '',
    expiration: '',
    securityCode: '',
    email: '',
    password: '',
    name: '',
    address: '',
    unit: '',
    state: '',
    zip: '',
  }
  handleSubmit = (event) => {
    console.log('EVENT', event.target);
    event.preventDefault();
    this.props.stripe.createToken({ name: 'Test Name' }).then(({ token }) => {
      console.log('TOKEN', token);
      const data = {
        token,
        charge: {
          amount: 99,
          currency: 'usd',
        },
      };

      axios.request({
        url: FIREBASE_FUNCTION_URL,
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        data: JSON.stringify(data),
      });
    })
  };
  
  handleChange = (event) => {
    console.log('CHANGE...', event);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <InputRow>
          <Input onChange={this.handleChange} name="cardNumver" label="Card Number" placeholder="**** **** **** ****" width="50%" />
          <Input onChange={this.handleChange} name="expiraion" label="Exp" placeholder="MM/YY" width="25%" />
          <Input onChange={this.handleChange} name="securityCode" label="CVV" placeholder="***" width="25%" />
        </InputRow>
        <InputRow>
          <Input onChange={this.handleChange} name="email" label="Email Address" placeholder="johnathandoe@gmail.com" width="50%" inverted />
          <Input onChange={this.handleChange} name="password" label="Create Password" placeholder="**********" width="50%" inverted />
        </InputRow>
        <InputRow>
          <Input onChange={this.handleChange} name="name" label="Cardholder Name" placeholder="John Doe" width="50%" />
          <Input onChange={this.handleChange} name="address" label="Full Street Address" placeholder="123 Neem Street" width="50%" />
        </InputRow>
        <InputRow>
          <Input onChange={this.handleChange} name="unit" label="Apt, Floor, Unit" placeholder="Apt 0000" width="50%" />
          <Input onChange={this.handleChange} name="state" label="State" placeholder="TX" width="25%" />
          <Input onChange={this.handleChange} name="zip" label="Zip Code" placeholder="00000" width="25%" />
        </InputRow>
        <Button type="submit" onClick={this.handleSubmit}>Submit Payment</Button>
      </form>
    );
  }
}

const PaymentInputsWithStripe = injectStripe(PaymentInputs);

export const PaymentForm = () => (
  <SectionContainer>
    <Elements>
      <PaymentInputsWithStripe style={{ base: { fontSize: '18px' } }} />
    </Elements>
  </SectionContainer>
);
