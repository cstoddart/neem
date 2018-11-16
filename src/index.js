import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './components/ui/navigation/Navigation';
import AddressEntry from './components/addressEntry/AddressEntry';
import { GlobalStyles } from './indexStyles';
import { GOOGLE_API_KEY } from './keys';

class App extends Component { 
  componentDidMount() {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`;
    document.body.appendChild(script);
  }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <GlobalStyles />
          <Navigation />
          <Route exact path="/" render={() => <AddressEntry />} />
        </Fragment>
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
