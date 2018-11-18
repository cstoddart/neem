import React, { Component } from 'react';

import { Map, PageContainer, PageHeader, PlacesSearch, Button } from '../ui';

export class Address extends Component {
  state = {
    address: undefined,
  };

  setAddress = (address) => this.setState({ address });

  render() {
    return(
      <PageContainer>
        <PageHeader>
          <h1>Enter Your Home Address</h1>
          <h5>This will allow us to locate your home & estimate your lot if you need help.</h5>
        </PageHeader>
        <PlacesSearch handleChange={this.setAddress} />
        <Map address={this.state.address} />
        <Button to="/date-time">Date + Time</Button>
      </PageContainer>
    );
  }
}
