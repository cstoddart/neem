import React, { Component} from 'react';
import {
  Elements,
  injectStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement
} from 'react-stripe-elements';
import axios from 'axios';

import { FIREBASE_FUNCTION_URL } from '../../../keys';

class PaymentForm extends Component {
  handleSubmit = async (event) => {
    console.log('EVENT', event.target);
    event.preventDefault();
    const { token } = await this.props.stripe.createToken({ name: 'Test Name' });
    console.log('TOKEN', token);
    axios.post(FIREBASE_FUNCTION_URL, {
      token,
      charge: {
        boats: 'hoes',
      },
    });
  };

  render() {
    return (
      <form style={{ width: '500px' }} onSubmit={this.handleSubmit}>
        <CardNumberElement />
        <CardExpiryElement />
        <CardCVCElement />
        <PostalCodeElement />
      </form>
    );
  }
}

const PaymentFormWithStripe = injectStripe(PaymentForm);

export const PaymentInput = () => (
  <Elements>
    <div>
      <PaymentFormWithStripe style={{ base: { fontSize: '18px' } }} />
    </div>
  </Elements>
);
