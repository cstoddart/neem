import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import { AppContext } from './AppContext';
import { Navigation } from './components/ui';
import { Address } from './components/address/Address';
import { Payment } from './components/payment/Payment';
import { DateTime } from './components/dateTime/DateTime';
import { GlobalStyles } from './indexStyles';

class App extends Component {
  constructor() {
    super();

    const updateOrder = (order) => {
      this.setState({ order });
    };

    this.state = {
      order: {
        address: '',
        date: '',
        services: '',
      },
      updateOrder,
    };
  }

  render() {
    return (
      <BrowserRouter>
        <AppContext.Provider value={this.state}>
          <GlobalStyles />
          <Navigation />
          <Route exact path="/" render={() => <Redirect to="/address" />} />
          <Route path="/address" render={() => <Address />} />
          <Route path="/date-time" render={() => <DateTime />} />
          <Route path="/payment" render={() => <Payment />} />
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
