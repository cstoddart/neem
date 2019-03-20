import auth0 from 'auth0-js';

const auth = new auth0.WebAuth({
  domain: 'neem.auth0.com',
  clientID: 'hGB8sVVcqOvNnG4LcadvmcvCeMiSteoA',
  responseType: 'code',
  redirectUri: 'https://leeif-cstoddart.c9users.io/',
});

export function login({ email, password }) {
  const login = auth.login({
    email,
    password,
    realm: 'Neem',
  }, function(error){
    console.log('LOGIN ERROR', error);
  });
  console.log('LOGIN', login);
  return login;
}

export function getLoginResult() {
  const result = auth.parseHash({}, function(error, result) {
    console.log('ERROR', error);
    console.log('RESULT', result);
  });
  console.log('RESULT', result);
}
