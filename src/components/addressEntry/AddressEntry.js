import React, { Component } from 'react';

import { StyledAddressEntry } from './addressEntryStyles';
import { Map } from '../ui/map/Map';
import { PlacesSearch } from '../ui/placesSearch/PlacesSearch';

class AddressEntry extends Component {
  state = {
    address: undefined,
  };

  setAddress = (address) => this.setState({ address });

  render() {
    return(
      <StyledAddressEntry>
        <h1>Enter Your Home Address</h1>
        <h4>This will allow us to locate your home & estimate your lot if you need help.</h4>
        <PlacesSearch handleChange={this.setAddress} />
        <Map address={this.state.address} />
      </StyledAddressEntry>
    );
  }
}

export default AddressEntry;
