import React, { Component } from 'react';
import axios from 'axios';

import { AppContext } from '../../AppContext';
import { formatNumber } from '../../utils';
import { ZILLOW_API_KEY } from '../../keys';
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

  setAddress = async ({ address, lat, lng, streetNumber, street, zip }) => {
    this.setState({ address, lat, lng });

    const params = new URLSearchParams();
    params.append('zws-id', ZILLOW_API_KEY);
    params.append('address', `${streetNumber} ${street}`);
    params.append('citystatezip', zip);
    const propertyDetails = await axios.post('https://cors-anywhere.herokuapp.com/https://www.zillow.com/webservice/GetDeepSearchResults.htm', params);
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(propertyDetails.data, "text/xml");
    const statusCode = xmlDoc.getElementsByTagName("code")[0].childNodes[0].nodeValue;
    const netLotSize = statusCode === '0' && xmlDoc.getElementsByTagName("lotSizeSqFt")[0]
      ? xmlDoc.getElementsByTagName("lotSizeSqFt")[0].childNodes[0].nodeValue - 
        xmlDoc.getElementsByTagName("finishedSqFt")[0].childNodes[0].nodeValue
      : 0;
    const lotSize = netLotSize > 0
      ? netLotSize < 10000
        ? `${netLotSize}sq - Average Size - $24.00 Base Price`
        : `${netLotSize}sq - Larger Size - $26.00 Base Price`
      : 'Unable To Determine';
    const subtotal = netLotSize > 0
      ? netLotSize < 10000
        ? '$22.50'
        : '$23.50'
      : 0;
    const taxes = netLotSize > 0
      ? netLotSize < 10000
        ? '$1.50'
        : '$2.50'
      : 0;
    const total = netLotSize > 0
      ? netLotSize < 10000
        ? '$24.00'
        : '$26.00'
      : 0;

    this.context.updateOrder(this.context.order, {
      address,
      lat,
      lng,
      lotSize,
      subtotal,
      taxes,
      total,
    });
  };

  render() {
    const { lat, lng } = this.state;
    return(
      <PageContainer>
        <PageHeader
          title="Enter Your Home Address"
          subtitle="We use this to locate your home ensuring you are within range."
        />
        <PlacesSearch
          handleChange={this.setAddress}
          defaultValue={this.state.address}
          buttonTo="/date-time"
        />
        <Map address={{ lat, lng }} />
        <StyledButton to="/date-time">Date + Time</StyledButton>
      </PageContainer>
    );
  }
}
