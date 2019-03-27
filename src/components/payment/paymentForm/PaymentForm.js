import React, { Component, Fragment } from 'react';
import {
  Elements,
  injectStripe,
} from 'react-stripe-elements';

import { AppContext } from '../../../AppContext';
import { processPayment } from '../../../services/stripe';
import { createUser, updateUser, getUser } from '../../../services/firebase';
import {
  SectionContainer,
  Input,
  InputRow,
  Button,
} from '../../ui';

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

  handleSubmit = async (event) => {
    event.preventDefault();
    const isNewUser = this.state.email && this.state.password;
    const isExistingUser = this.context.user.loggedIn;
    const paymentResult = await processPayment({
      stripe: this.props.stripe,
      amount: this.context.order.total,
      name: this.state.name,
      email: this.state.email,
      stripeCustomerId: this.context.user.stripeCustomerId,
      isNewUser,
      isExistingUser,
    });
    console.log('PAYMENT RESULT', paymentResult);
    if (isNewUser) {
      await createUser({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        context: this.context,
        stripeCustomerId: paymentResult.data.customer.id,
      });
    } else if (isExistingUser) {
      await updateUser({
        id: this.context.user.id,
        name: this.state.name,
        context: this.context,
      });
    } 
    this.context.updateOrder({ paid: true });
    this.props.redirect();
  };
  
  handleChange = (event) => this.setState({ [event.target.name]: event.target.value });

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <InputRow>
          <Input width="50%" value={this.state.cardNumber} name="cardNumber" type="cardNumber" label="Card Number" placeholder="**** **** **** ****" />
          <Input width="25%" value={this.state.expiration} name="expiration" type="expiration" label="Exp" placeholder="MM/YY" />
          <Input width="25%" value={this.state.securityCode} name="securityCode" type="securityCode" label="CVV" placeholder="***" />
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
          <Input width="25%" value={this.state.zip} name="zip" type="zip" label="Zip Code" placeholder="00000" />
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