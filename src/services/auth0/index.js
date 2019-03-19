import auth0 from 'auth0-js';

const auth = new auth0.WebAuth({
  domain: 'neem.auth0.com',
  clientID: 'hGB8sVVcqOvNnG4LcadvmcvCeMiSteoA',
  responseType: 'code',
});

export function login({ email, password }) {
  const login = auth.login({
    email,
    password,
    realm: 'neem',
  }, console.log);
  console.log('LOGIN', login);
  return login;
}
