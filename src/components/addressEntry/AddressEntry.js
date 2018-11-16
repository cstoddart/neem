import React, { Component } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

import { StyledAddressEntry } from './addressEntryStyles';

class AddressEntry extends Component {
  state = {
    address: ''
  };

  handleChange = (address) => this.setState({ address });

  render() {
    return(
      <StyledAddressEntry>
        <h1>Enter Your Home Address</h1>
        <h4>This will allow us to locate your home & estimate your lot if you need help.</h4>
        <PlacesAutocomplete value={this.state.address} onChange={this.handleChange}>
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className: 'location-search-input',
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </StyledAddressEntry>
    );
  }
}

export default AddressEntry;
