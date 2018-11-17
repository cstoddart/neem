import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import { StyledMap } from './mapStyles';

const InnerMap = withScriptjs(withGoogleMap((props) => (
  <GoogleMap
    zoom={props.address ? 15 : 1}
    center={props.address || { lat: -32.940922, lng: -60.660506 }}
    defaultOptions={{
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
      draggable: false,
    }}
  >
    {props.showMarker && <Marker position={props.address} />}
  </GoogleMap>
)));

export class Map extends Component {
  render() {
    return (
      <StyledMap>
        <InnerMap
          address={this.props.address}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBoGnPf2a_sSJODSIwaHF3QajDZ_Pqe2DI&v=3.exp&libraries=geometry,drawing,places"
          showMarker
        />
      </StyledMap>
    );
  }
}
