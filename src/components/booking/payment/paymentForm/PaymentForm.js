import React, { Component, Fragment } from 'react';
import {
  Elements,
  injectStripe,
} from 'react-stripe-elements';

import { AppContext } from 'src/AppContext';
import { processPayment } from 'src/services/stripe';
import { createUser, updateUser, getUser } from 'src/services/firebase';
import {
  SectionContainer,
  Input,
  InputRow,
  Button,
} from 'src/components/ui';

class PaymentInputs extends Component {
  static contextType = AppContext;

  state = { // credit card related state handled by react-stripe-elements
    email: '',
    password: '',
    name: '',
    address: '',
    unit: '',
    state: '',
  }

  componentDidMount() {
    if (this.context.user.loggedIn) {
      getUser(this.context.user.id);
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.processOrder({ formData: this.state });
  };

  handleChange = (event) => this.setState({ [event.target.name]: event.target.value });

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <InputRow>
          <Input width="50%" type="cardNumber" name="cardNumber" label="Card Number" placeholder="**** **** **** ****" />
          <Input width="25%" type="expiration" name="expiration" label="Exp" placeholder="MM/YY" />
          <Input width="25%" type="securityCode" name="securityCode" label="CVV" placeholder="***" />
        </InputRow>
        {!this.context.user.loggedIn && (
          <InputRow>
            <Input width="50%" value={this.state.email} onChange={this.handleChange} name="email" label="Email Address" placeholder="johnathandoe@gmail.com" inverted />
            <Input width="50%" value={this.state.password} onChange={this.handleChange} name="password" type="password" label="Create Password" placeholder="**********" inverted />
          </InputRow>
        )}
        <InputRow>
          <Input width="50%" value={this.state.name} onChange={this.handleChange} name="name" label="Cardholder Name" placeholder="John Doe" />
          <Input width="50%" value={this.state.address} onChange={this.handleChange} name="address" label="Full Street Address" placeholder="123 Neem Street" />
        </InputRow>
        <InputRow>
          <Input width="50%" value={this.state.unit} onChange={this.handleChange} name="unit" label="Apt, Floor, Unit" placeholder="Apt 0000" />
          <Input width="25%" value={this.state.state} onChange={this.handleChange} name="state" label="State" placeholder="TX" />
          <Input width="25%" type="zip" name="zip" label="Zip Code" placeholder="00000" />
        </InputRow>
        <Button type="submit" onClick={this.handleSubmit} fullWidth>Submit Payment</Button>
      </form>
    );
  }
}

const PaymentInputsWithStripe = injectStripe(PaymentInputs);

export const PaymentForm = (props) => (
  <SectionContainer>
    <Elements>
      <PaymentInputsWithStripe style={{ base: { fontSize: '18px' } }} {...props} />
    </Elements>
  </SectionContainer>
);
