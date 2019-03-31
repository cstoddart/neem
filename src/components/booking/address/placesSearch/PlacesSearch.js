import React, { Component } from 'react';
import { withScriptjs } from 'react-google-maps';
import { StandaloneSearchBox } from 'react-google-maps/lib/components/places/StandaloneSearchBox';

import { GOOGLE_API_KEY } from 'src/keys';
import { ArrowIcon } from 'src/components/ui';
import {
  StyledSearchBox,
  Input,
  SearchButton,
} from './placesSearchStyles';

const SearchBox = withScriptjs((props, ref) => (
  <StandaloneSearchBox
    ref={props.setSearchBoxRef}
    onPlacesChanged={props.handleChange}
    bounds={{ // roughly bound to the great state of Texas
      north: 35,
      east: -94,
      south: 29,
      west: -103,
    }}
  >
    <Input
      type="text"
      placeholder="Enter your address..."
      defaultValue={props.defaultValue}
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

    const address = place[0].formatted_address;
    const lat = place[0].geometry.location.lat();
    const lng = place[0].geometry.location.lng();
    const streetNumber = place[0].address_components.filter((addressComponent) => (
      addressComponent.types.includes('street_number')
    ))[0].long_name;
    const street = place[0].address_components.filter((addressComponent) => (
      addressComponent.types.includes('route')
    ))[0].long_name;
    const zip = place[0].address_components.filter((addressComponent) => (
      addressComponent.types.includes('postal_code')
    ))[0].long_name;

    this.props.handleChange({
      address,
      lat,
      lng,
      streetNumber,
      street,
      zip,
    });
  }

  render() {
    return (
      <StyledSearchBox>
        <SearchBox
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          handleChange={this.handleChange}
          setSearchBoxRef={this.setSearchBoxRef}
          defaultValue={this.props.defaultValue}
        />
        <SearchButton onClick={this.props.buttonOnClick}>
          <ArrowIcon width={20} height={20} />
        </SearchButton>
      </StyledSearchBox>
    );
  }
}
