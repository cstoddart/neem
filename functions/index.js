const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(functions.config().stripe.token);

const app = express();

app.use(cors({ origin: true }));

app.post('/', (request, response) => {
  const body = request.body;
  const tokenId = body.token.id;
  const amount = body.charge.amount;
  const currency = body.charge.currency;
  const description = body.charge.description;

  stripe.charges.create({
    amount,
    currency,
    description,
    source: tokenId,
  })
  .then((charge) => response.status(200).send(charge))
  .catch(response.status(500).send);
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

