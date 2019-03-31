import React, { Component } from 'react';

import { AppContext } from 'src/AppContext';
import {
  PageContainer,
  PageHeader,
  SplitContent,
  OrderSummary,
} from 'src/components/ui';
import { PaymentForm } from './paymentForm/PaymentForm';

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

  processOrder = async ({ formData }) => {
    const isNewUser = formData.email && formData.password;
    const isExistingUser = this.context.user.loggedIn;
    const paymentResult = await processPayment({
      stripe: this.props.stripe,
      amount: this.context.order.total,
      name: formData.name,
      email: formData.email,
      stripeCustomerId: this.context.user.stripeCustomerId,
      isNewUser,
      isExistingUser,
    });
    if (isNewUser) {
      await createUser({
        email: formData.email,
        password: formData.password,
        name: formData.name,
        context: this.context,
        stripeCustomerId: paymentResult.data.customer.id,
      });
    } else if (isExistingUser) {
      await updateUser({
        name: formData.name,
        context: this.context,
      });
    } 
    this.context.updateOrder({ paid: true });
    this.props.redirect();
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
            <PaymentForm redirect={() => this.props.history.push('/order-complete')} processOrder={this.processOrder} />
            <OrderSummary />
          </SplitContent>
        }
      </PageContainer>
    );
  }
}
