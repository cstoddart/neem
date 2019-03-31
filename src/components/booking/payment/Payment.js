import React, { Component } from 'react';

import { AppContext } from 'src/AppContext';
import {
  PageContainer,
  PageHeader,
  SplitContent,
  OrderSummary,
} from 'src/components/ui';
import { PaymentForm } from './paymentForm/PaymentForm';
import {
  PaymentContent,
} from './paymentStyles';

export class Payment extends Component {
  static contextType = AppContext;

  state = {
    error: false,
  };

  componentDidMount() {
    const orderIncomplete = (
      !this.context.order.address ||
      !this.context.order.day
    );
    console.log('ORDER INCOMPLETE', orderIncomplete);
    if (orderIncomplete) this.setState({ error: true });
  }

  render() {
    return (
      <PageContainer>
        {this.state.error
          ? <PageHeader
            title="Error"
            subtitle="Finish your order configuration to proceed with payment"
          />
          : <SplitContent>
            <PageHeader
              title="Complete Your Payment"
              subtitle="Submit your payment and we’ll scedule our Neemer pro to come out"
            />
            <PaymentForm redirect={() => this.props.history.push('/order-complete')} />
            <OrderSummary />
          </SplitContent>
        }
      </PageContainer>
    );
  }
}
