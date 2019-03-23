import axios from 'axios';

import { FIREBASE_FUNCTION_URL } from '../../keys';

export function processPayment({ stripe, customerName, amount }) {
  stripe.createToken({ name: customerName }).then(function({ token }) {
    const data = {
      token,
      charge: {
        amount,
        currency: 'usd',
        description: 'Neem service charge',
      },
    };

    return axios.request({
      url: FIREBASE_FUNCTION_URL,
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      data: JSON.stringify(data),
    });
  })
}
