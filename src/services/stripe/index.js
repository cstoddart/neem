import axios from 'axios';

import { FIREBASE_FUNCTION_URL } from '../../keys';

export function processPayment({ stripe, amount, name, email, stripeCustomerId, isNewUser, isExistingUser }) {
  return stripe.createToken({ name: name }).then(function({ token }) {
    const data = {
      token,
      charge: {
        amount,
        currency: 'usd',
        description: 'Neem service charge',
      },
      customer: {
        id: stripeCustomerId,
        name,
        email,
        isNewUser,
        isExistingUser,
      },
    };

    return axios.request({
      url: `${FIREBASE_FUNCTION_URL}/process-payment`,
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      data: JSON.stringify(data),
    });
  })
}

export function getStripeCustomer(stripeCustomerId) {
  return axios.request({
    url: `${FIREBASE_FUNCTION_URL}/get-customer`,
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
    params: {
      customerId: stripeCustomerId,
    },
  });
}
