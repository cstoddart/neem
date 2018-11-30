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

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <InputRow>
            <Input label="Cardholder Name" placeholder="Johnathan Hillcrest" />
            <Input label="Email Address" placeholder="johnhillcrest@gmail.com" />
        </InputRow>
        <InputRow>
          <Input label="Phone Number" placeholder="000.000.0000" />
          <Input label="Password" placeholder="**********" />
        </InputRow>
        <InputRow>
          <Input type="card" label="Credit Card Number" />
          <Input type="expiry" label="Month / Year" />
        </InputRow>
        <InputRow>
          <Input type="cvc" label="Security Code" />
          <Input type="zip" label="Zip Code" />
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
