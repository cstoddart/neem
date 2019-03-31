import React, { Component, Fragment } from 'react';

import { AppContext } from 'src/AppContext';
import {
  SectionHeader,
} from 'src/components/ui';
import {
  PaymentMethod,
  Title,
  Detail,
} from './paymentMethodsStyles';

export class PaymentMethods extends Component {
  static contextType = AppContext;

  state = {
    activePaymentMethod: 0,
  };

  handleClick = (paymentMethodId) => {
    this.setState({ activePaymentMethod: paymentMethodId });
    this.props.setActiveSection();
    this.props.setActivePaymentId(paymentMethodId);
  }

  render() {
    return (
      <Fragment>
        <SectionHeader>Payment Methods</SectionHeader>
        {this.context.user.paymentMethods.map((paymentMethod) => (
          <PaymentMethod
            key={paymentMethod.id}
            onClick={() => this.handleClick(paymentMethod.id)}
            active={this.props.active && paymentMethod.id === this.state.activePaymentMethod}
          >
            <Title>{paymentMethod.brand} {paymentMethod.lastFour}</Title>
            <Detail>Exp - {paymentMethod.expirationMonth}/{paymentMethod.expirationYear}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Zip Code - {paymentMethod.zip}</Detail>
          </PaymentMethod>
        ))}
      </Fragment>
    )
  }
}
