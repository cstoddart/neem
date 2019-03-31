import axios from 'axios';

import { FIREBASE_FUNCTION_URL } from 'src/keys';

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

export async function getPaymentMethods({ context, stripeCustomerId }) {
  const { data: { data } } = await axios.request({
    url: `${FIREBASE_FUNCTION_URL}/get-payment-methods`,
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
    params: {
      customerId: stripeCustomerId,
    },
  });
  const paymentMethods = data.map((paymentMethod) => ({
    id: paymentMethod.id,
    brand: paymentMethod.brand,
    lastFour: paymentMethod.last4,
    expirationMonth: paymentMethod.exp_month,
    expirationYear: paymentMethod.exp_year,
    zip: paymentMethod.address_zip,
  }));
  context.updateUser({
    paymentMethods,
  });
  return data;
}

export function updatePaymentMethod({ context, paymentMethodId, updatedPaymentMethod }) {
  // context.updateUser({
  //   paymentMethods,
  // });
  const data = {
    stripeCustomerId: context.user.stripeCustomerId,
    paymentMethodId,
    updatedPaymentMethod,
  };
  return axios.request({
    url: `${FIREBASE_FUNCTION_URL}/update-payment-method`,
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    data: JSON.stringify(data),
  });
}
