import React, { Component, Fragment } from 'react';
import {
  Elements,
  injectStripe,
} from 'react-stripe-elements';

import { updatePaymentMethod } from 'src/services/stripe'
import { AppContext } from 'src/AppContext';
import {
  SectionHeader,
  SectionContainer,
  InputRow,
  Input,
} from 'src/components/ui';
import {
  PaymentMethodDetails,
} from './editPaymentMethodStyles';

export class EditPaymentMethodClass extends Component {
  static contextType = AppContext;

  state = { // credit card related state handled by react-stripe-elements
    name: '',
    address: '',
    unit: '',
    state: '',
  };

  handleSubmit = () => {
    updatePaymentMethod({
      context: this.context,
      paymentMethodId: this.props.paymentMethodId,
    });
  };

  handleChange = (event) => this.setState({ [event.target.name]: event.target.value });

  render() {
    return (
      <Fragment>
        <SectionHeader>Update Payment Method</SectionHeader>
        <PaymentMethodDetails>
          <form>
            <InputRow>
              <Input width="50%" value={this.state.cardNumber} name="cardNumber" type="cardNumber" label="Card Number" placeholder="**** **** **** ****" />
              <Input width="25%" value={this.state.expiration} name="expiration" type="expiration" label="Exp" placeholder="MM/YY" />
              <Input width="25%" value={this.state.securityCode} name="securityCode" type="securityCode" label="CVV" placeholder="***" />
            </InputRow>
            <InputRow>
              <Input width="50%" value={this.state.name} onChange={this.handleChange} name="name" label="Cardholder Name" placeholder="John Doe" />
              <Input width="50%" value={this.state.address} onChange={this.handleChange} name="address" label="Full Street Address" placeholder="123 Neem Street" />
            </InputRow>
            <InputRow>
              <Input width="50%" value={this.state.unit} onChange={this.handleChange} name="unit" label="Apt, Floor, Unit" placeholder="Apt 0000" />
              <Input width="25%" value={this.state.state} onChange={this.handleChange} name="state" label="State" placeholder="TX" />
              <Input width="25%" value={this.state.zip} name="zip" type="zip" label="Zip Code" placeholder="00000" />
            </InputRow>
          </form>
        </PaymentMethodDetails>
      </Fragment>
    )
  }
}

const EditPaymentMethodWithStripe = injectStripe(EditPaymentMethodClass);

export const EditPaymentMethod = (props) => (
  <SectionContainer>
    <Elements>
      <EditPaymentMethodWithStripe style={{ base: { fontSize: '18px' } }} {...props} />
    </Elements>
  </SectionContainer>
);