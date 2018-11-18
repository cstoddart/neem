import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Navigation from './components/ui/navigation/Navigation';
import { Address } from './components/address/Address';
import { Payment } from './components/payment/Payment';
import { DateTime } from './components/dateTime/DateTime';
import { GlobalStyles } from './indexStyles';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <GlobalStyles />
          <Navigation />
          <Route path="/" render={() => <Redirect to="/address" />} />
          <Route path="/address" render={() => <Address />} />
          <Route path="/date-time" render={() => <DateTime />} />
          <Route path="/payment" render={() => <Payment />} />
        </Fragment>
      </BrowserRouter>
    );
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
