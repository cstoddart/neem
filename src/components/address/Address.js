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
    address: undefined,
    lat: undefined,
    lng: undefined,
  };

  setAddress = ({ address, lat, lng }) => {
    console.log('CONTEXT', this.context);
    this.setState({ lat, lng });
    this.context.updateOrder({ order: { address } });
  };

  render() {
    const { lat, lng } = this.state;
    console.log('aa', lat, lng);
    return(
      <PageContainer>
        <PageHeader
          title="Enter Your Home Address"
          subtitle="This will allow us to locate your home & estimate your lot size"
        />
        <PlacesSearch handleChange={this.setAddress} />
        <Map address={{ lat, lng }} />
        <StyledButton to="/date-time">Date + Time</StyledButton>
      </PageContainer>
    );
  }
}
