import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { StripeProvider } from 'react-stripe-elements';
import '@babel/polyfill';

import { STRIPE_PUBLIC_KEY } from './keys';
import { AppContext, initialState, actions } from './AppContext';
import { Navigation } from './components/ui';
import { Address } from './components/address/Address';
import { Payment } from './components/payment/Payment';
import { DateTime } from './components/dateTime/DateTime';
import { Login } from './components/login/Login';
import { GlobalStyles } from './appStyles';

class PrivateRoute extends Component {
  static contextType = AppContext;
  
  render() {
    return this.context.loggedIn
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
    login: () => this.setState({ loggedIn: true }),
    logout: () => this.setState({ loggedIn: false }),
  };

  render() {
    return (
      <BrowserRouter>
        <StripeProvider apiKey={STRIPE_PUBLIC_KEY}>
          <AppContext.Provider value={this.state}>
            <GlobalStyles />
            <Navigation />
            <Switch>
              <PrivateRoute exact path="/" render={() => <Redirect to="/address" />} />
              <PrivateRoute path="/address" component={Address} />
              <PrivateRoute path="/date-time" component={DateTime} />
              <PrivateRoute path="/payment" component={Payment} />
              <Route path="/login" component={Login} />
            </Switch>
          </AppContext.Provider>
        </StripeProvider>
      </BrowserRouter>
    );
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
