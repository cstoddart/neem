import React, { Component, Fragment } from 'react';

import { AppContext } from '../../../AppContext';
import {
  SectionHeader,
} from '../../ui';
import {
  PaymentMethod,
} from './paymentMethodsStyles';

export class PaymentMethods extends Component {
  static contextType = AppContext;

  render() {
    return (
      <Fragment>
        <SectionHeader>Payment Methods</SectionHeader>
        {this.context.user.paymentMethods.map((paymentMethod, index) => (
          <PaymentMethod key={index}>
            <div>{paymentMethod.brand}</div>
            <div>{paymentMethod.lastFour}</div>
            <div>{paymentMethod.expirationMonth}/{paymentMethod.expirationYear}</div>
            <div>{paymentMethod.zip}</div>
          </PaymentMethod>
        ))}
      </Fragment>
    )
  }
}
