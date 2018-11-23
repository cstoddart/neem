import React, { Component } from 'react';

import { AppContext } from '../../AppContext';
import {
  Map,
  PageContainer,
  PageHeader,
  PlacesSearch,
} from '../ui';
import { StyledButton } from './addressStyles';

export class Address extends Component {
  static contextType = AppContext;

  state = {
    address: this.context.order.address,
    lat: this.context.order.lat,
    lng: this.context.order.lng,
  };

  setAddress = ({ address, lat, lng }) => {
    this.setState({ address, lat, lng });
    this.context.updateOrder(this.context.order, { address, lat, lng });
  };

  render() {
    const { lat, lng } = this.state;
    console.log('CONTEXT', this.context);
    return(
      <PageContainer>
        <PageHeader
          title="Enter Your Home Address"
          subtitle="We use this to locate your home ensuring you are within range."
        />
        <PlacesSearch handleChange={this.setAddress} defaultValue={this.state.address} />
        <Map address={{ lat, lng }} />
        <StyledButton to="/date-time">Date + Time</StyledButton>
      </PageContainer>
    );
  }
}
