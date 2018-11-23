import React, { Component} from 'react';
import {
  Elements,
  injectStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement
} from 'react-stripe-elements';

import { FIREBASE_FUNCTION_URL } from '../../../keys';

class PaymentForm extends Component {
  handleSubmit = (event) => {
    console.log('EVENT', event.target);
    event.preventDefault();
    this.props.stripe.createToken({ name: 'Test Name' }).then((result) => {
      console.log('Received Stripe token:', result);
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
