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
  handleSubmit = (event) => {
    console.log('EVENT', event.target);
    event.preventDefault();
    this.props.stripe.createToken({ name: 'Test Name' }).then(({ token }) => {
      console.log('TOKEN', token);
//       fetch(FIREBASE_FUNCTION_URL, {
//         method: 'POST', // or 'PUT'
//         body: JSON.stringify({ token, boats: 'hoes' }), // data can be `string` or {object}!
//         headers:{
//           'Content-Type': 'application/json'
//         }
//       }).then(res => res.json())
//       .then(response => console.log('Success:', JSON.stringify(response)))
//       .catch(error => console.error('Error:', error));
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
      <form style={{ width: '500px' }} onSubmit={this.handleSubmit}>
        <CardNumberElement />
        <CardExpiryElement />
        <CardCVCElement />
        <PostalCodeElement />
        <button type="submit">Submit</button>
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
