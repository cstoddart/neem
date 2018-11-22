import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { StripeProvider } from 'react-stripe-elements';

import { AppContext } from './AppContext';
import { Navigation } from './components/ui';
import { Address } from './components/address/Address';
import { Payment } from './components/payment/Payment';
import { DateTime } from './components/dateTime/DateTime';
import { GlobalStyles } from './appStyles';

class App extends Component {
  constructor() {
    super();

    const updateOrder = (currentOrder, newOrder) => this.setState({
      order: {
        ...currentOrder,
        ...newOrder,
      },
    });

    this.state = {
      order: {
        address: '',
        lat: '',
        lng: '',
        day: '',
        time: '',
        frequency: '',
      },
      updateOrder,
    };
  }

  render() {
    return (
      <BrowserRouter>
        <StripeProvider apiKey="pk_test_bYk0WG2byZHmv3YbPiMdpL8U">
          <AppContext.Provider value={this.state}>
            <GlobalStyles />
            <Navigation />
            <Route exact path="/" render={() => <Redirect to="/address" />} />
            <Route path="/address" render={() => <Address />} />
            <Route path="/date-time" render={() => <DateTime />} />
            <Route path="/payment" render={() => <Payment />} />
          </AppContext.Provider>
        </StripeProvider>
      </BrowserRouter>
    );
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
