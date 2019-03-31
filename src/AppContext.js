import { createContext } from 'react';

export const AppContext = createContext();

export const initialState = {
  order: {
    address: '',
    lat: '',
    lng: '',
    lotSize: '',
    day: '',
    time: '',
    frequency: '',
    subtotal: 0,
    taxes: 0,
    total: 0,
    paid: false,
  },
  user: {
    id: '',
    loggedIn: false,
    currentSubscription: {
      frequency: '',
      address: '',
    },
    paymentMethods: [{
      id: '',
      brand: '',
      lastFour: '',
      expirationMonth: undefined,
      expirationYear: undefined,
      zip: '',
    }],
  },
};
