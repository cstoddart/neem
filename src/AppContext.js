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
  },
  loggedIn: false,
};

const updateOrder = (updateContext) => ({ currentOrder, newOrder }) => {
  return updateContext()({
    order: {
      ...currentOrder,
      ...newOrder,
    },
  })
};

const login = (updateContext) => () => updateContext()({ loggedIn: true });

const logout = (updateContext) => () => updateContext({ loggedIn: false });

export const actions = (updateContext) => {
  return {
    updateOrder: updateOrder(updateContext),
    login: login(updateContext),
    logout: logout(updateContext),
  };
};
