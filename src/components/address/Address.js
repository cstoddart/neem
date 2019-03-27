import React, { Component, Fragment } from 'react';
import axios from 'axios';

import { AppContext } from '../../AppContext';
import { ZILLOW_API_KEY } from '../../keys';
import {
  PageContainer,
  PageHeader,
} from '../ui';
import { PlacesSearch } from './placesSearch/PlacesSearch';
import { Map } from './map/Map';
import { StyledButton } from './addressStyles';

export class Address extends Component {
  static contextType = AppContext;

  state = {
    address: this.context.order.address,
    lat: this.context.order.lat,
    lng: this.context.order.lng,
    zip: '',
    error: false,
  };

  setAddress = async ({ address, lat, lng, streetNumber, street, zip }) => {
    this.setState({ address, lat, lng, zip });
    if (zip.slice(0, 5) !== '76005') return false;

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
        ? 2250
        : 2350
      : 0;
    const taxes = netLotSize > 0
      ? netLotSize < 10000
        ? 150
        : 250
      : 0;
    const total = netLotSize > 0
      ? netLotSize < 10000
        ? 2400
        : 2600
      : 0;
    this.context.updateOrder({
      address,
      lat,
      lng,
      lotSize,
      subtotal,
      taxes,
      total,
    });
  };
  
  handleClick = () => {
    if (this.state.zip.slice(0, 5) === '76005') {
      return this.props.history.push('/date-time');
    }
    return this.setState({ error: true });
  };

  render() {
    const { lat, lng } = this.state;
    return(
      <PageContainer>
        {this.state.error
          ? <PageHeader
              title="Ohhh Noo!!! 🎉🌳"
              subtitle="Unfortunately we are not serving your area."
            />
          : <Fragment>
            <PageHeader
                title="Enter Your Home Address"
                subtitle="We use this to locate your home ensuring you are within range."
              />
              <PlacesSearch
                handleChange={this.setAddress}
                defaultValue={this.state.address}
                buttonOnClick={this.handleClick}
              />
              <Map address={{ lat, lng }} />
              <StyledButton onClick={this.handleClick} showArrow>Date + Time</StyledButton>
            </Fragment>
        }
      </PageContainer>
    );
  }
}
