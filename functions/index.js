const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(functions.config().stripe.token);

const app = express();

app.use(cors({ origin: true }));

app.post('/process-payment', (request, response) => {
  const { token, charge, customer } = request.body;
  const tokenId = token.id;
  const amount = charge.amount;
  const currency = charge.currency;
  const description = charge.description;
  const isNewUser = customer.isNewUser;
  const customerName = customer.name;
  const customerEmail = customer.email;
  const customerId = customer.id;

  const handleError = (error) => {
    console.log('BODY', body);
    response.status(500).send(error);
  }

  if (isNewUser) {
    return stripe.customers.create({
      source: tokenId,
      email: customerEmail,
    })
      .then((customer) => stripe.charges.create({
        amount,
        currency,
        customer: customer.id,
      })
        .then((charge) => response.status(200).send({ charge, customer }))
        .catch(handleError)
      )
      .catch(handleError);
  } else if (isExistingUser) {
    return stripe.charges.create({
      amount,
      currency,
      customer: customerId,
    })
      .then((charge) => response.status(200).send({ charge }))
      .catch(handleError);
  }
  return stripe.charges.create({
    amount,
    currency,
    description,
    source: tokenId,
  })
    .then((charge) => response.status(200).send({ charge }))
    .catch(handleError);
});

app.get('/get-customer', (request, response) => {
  return stripe.customers.listCards(request.query.customerId, (error, cards) => {
    if (cards) {
      return response.status(200).send(cards);
    }
    console.log('REQUEST', request);
    return response.status(500).send(error);
  })
});

const firebasePathPatch = (app) => (req, res) => {
  // patch from https://github.com/firebase/firebase-functions/issues/27#issuecomment-292768599
  // https://some-firebase-app-id.cloudfunctions.net/route
  // without trailing "/" will have req.path = null, req.url = null
  // which won't match to your app.get('/', ...) route 
  if (!req.path) {
    // prepending "/" keeps query params, path params intact
    req.url = `/${req.url}`
  }
  return app(req, res);
}

module.exports.stripe = functions.https.onRequest(firebasePathPatch(app));

