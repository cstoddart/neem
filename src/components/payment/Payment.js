import React, { Component } from 'react';

import {
  PageContainer,
  PageHeader,
  PageContent,
  OrderSummary,
} from '../ui';
import { PaymentForm } from './paymentForm/PaymentForm';
import {
  PaymentContent,
} from './paymentStyles';

export class Payment extends Component {
  render() {
    return (
      <PageContainer>
        <PageHeader
          title="Complete Your Payment"
          subtitle="Submit your payment and we’ll scedule our Neemer pro to come out"
        />
        <PageContent>
          <PaymentForm redirect={() => this.props.history.push('/order-complete')} />
          <OrderSummary />
        </PageContent>
      </PageContainer>
    );
  }
}
