/* global localStorage */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { StripeProvider } from 'react-stripe-elements';
import '@babel/polyfill';

import { STRIPE_PUBLIC_KEY } from './keys';
import { AppContext, initialState, actions } from './AppContext';
import { Navigation } from './components/ui';
import { Login } from './components/login/Login';
import { Address } from './components/address/Address';
import { Payment } from './components/payment/Payment';
import { DateTime } from './components/dateTime/DateTime';
import { Summary } from './components/summary/Summary';
import { Account } from './components/account/Account';
import { GlobalStyles } from './appStyles';
import { getUser } from './services/firebase';

class PrivateRoute extends Component {
  static contextType = AppContext;
  
  render() {
    return this.context.user.loggedIn || localStorage.getItem('loggedIn')
      ? <Route {...this.props} />
      : <Redirect 
        to={{
          pathname: "/login",
          state: { from: this.props.location },
        }}
      />
  }
};

class App extends Component {
  state = {
    ...initialState,
    updateOrder: (order) => this.setState((state) => ({
      order: {
        ...state.order,
        ...order,
      },
    })),
    updateUser: (user) => this.setState((state) => ({
      user: {
        ...state.user,
        ...user,
      }
    })),
  };

  async componentDidMount() {
    const userId = localStorage.getItem('loggedIn');
    if (userId) {
      this.setState((state) => ({
        user: {
          ...state.user,
          loggedIn: true,
          id: userId,
        },
      }));
    }
  }

  render() {
    return (
      <BrowserRouter>
        <StripeProvider apiKey={STRIPE_PUBLIC_KEY}>
          <AppContext.Provider value={this.state}>
            <GlobalStyles />
            <Navigation />
            <Switch>
              <Route path="/login" component={Login} />
              <Route exact path="/" render={() => <Redirect to="/address" />} />
              <Route path="/address" component={Address} />
              <Route path="/date-time" component={DateTime} />
              <Route path="/payment" component={Payment} />
              <Route path="/order-complete" component={Summary} />
              <PrivateRoute path="/account" component={Account} />
            </Switch>
          </AppContext.Provider>
        </StripeProvider>
      </BrowserRouter>
    );
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
