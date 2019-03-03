import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

import { GOOGLE_API_KEY } from '../../../keys';
import { StyledMap, ContainerElement, MapElement } from './mapStyles';

const ReactGoogleMap = withScriptjs(withGoogleMap(({ lat, lng}) => (
  <GoogleMap
    zoom={(!!lat && !!lng) ? 20 : 15}
    center={(!!lat && !!lng) ? { lat, lng } : { lat: 32.779646, lng: -96.7977977 }}
    defaultOptions={{
      disableDefaultUI: true,
      draggable: false,
      mapTypeId: window.google.maps.MapTypeId.SATELLITE,
    }}
  >
    {(!!lat && !!lng) && <Marker position={{ lat, lng }} />}
  </GoogleMap>
)));

export class Map extends Component {
  render() {
    const { lat, lng } = this.props.address;
    return (
      <StyledMap>
        <ReactGoogleMap
          lat={lat}
          lng={lng}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<ContainerElement />}
          mapElement={<MapElement />}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
        />
      </StyledMap>
    );
  }
}
