import React, { Component } from 'react';
import { withScriptjs } from 'react-google-maps';
import { StandaloneSearchBox } from 'react-google-maps/lib/components/places/StandaloneSearchBox';

import { StyledSearchBox, Input } from './placesSearchStyles';

const SearchBox = withScriptjs((props, ref) => (
  <StandaloneSearchBox
    ref={props.setSearchBoxRef}
    onPlacesChanged={props.handleChange}
    bounds={{ // roughly bound to Texas
      north: 35,
      east: -94,
      south: 29,
      west: -103,
    }}
  >
    <Input
      type="text"
      placeholder="Enter your address..."
    />
  </StandaloneSearchBox>
));

export class PlacesSearch extends Component {
  state = {
    searchBoxRef: {},
  };

  setSearchBoxRef = (searchBoxRef) => this.setState({ searchBoxRef });

  handleChange = () => {
    const place = this.state.searchBoxRef.getPlaces();
    console.log('PLACE', place);
    const address = place[0].formatted_address;
    const lat = place[0].geometry.location.lat();
    const lng = place[0].geometry.location.lng();

    this.props.handleChange({ address, lat, lng });
  }

  render() {
    return (
      <StyledSearchBox>
        <SearchBox
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBoGnPf2a_sSJODSIwaHF3QajDZ_Pqe2DI&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          handleChange={this.handleChange}
          setSearchBoxRef={this.setSearchBoxRef}
        />
      </StyledSearchBox>
    );
  }
}
