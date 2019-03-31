import React, { Component } from 'react';

import { AppContext } from 'src/AppContext';
import { getUser } from 'src/services/firebase';
import { getPaymentMethods } from 'src/services/stripe';
import {
  PageContainer,
  PageHeader,
  SplitContent,
  SectionContainer,
} from 'src/components/ui';
import { Subscriptions } from './subscriptions/Subscriptions';
import { PaymentMethods } from './paymentMethods/PaymentMethods';
import { OrderHistory } from './orderHistory/OrderHistory';
import { EditSubscription } from './editSubscription/EditSubscription';
import { EditPaymentMethod } from './editPaymentMethod/EditPaymentMethod';

const accountSections = {
  subscriptions: 'subscriptions',
  paymentMethods: 'paymentMethods',
  orderHistory: 'orderHistory',
};

export class Account extends Component {
  static contextType = AppContext;

  state = {
    activeSection: accountSections.subscriptions,
    activePaymentMethod: '',
  };

  async componentDidMount() {
    const { stripeCustomerId } = await getUser(this.context);
    await getPaymentMethods({ context: this.context, stripeCustomerId });
  }

  setActiveSection = (activeSection) => this.setState({ activeSection });

  setActivePaymentMethod = (paymentMethodId) => this.setState({ activePaymentMethod: paymentMethodId });

  render() {
    return (
      <PageContainer>
        <PageHeader
          title="Account Details"
          subtitle="Manage subscriptions, payment methods, & order history."
        />
        <SplitContent>
          <SectionContainer>
            <Subscriptions
              active={this.state.activeSection === accountSections.subscriptions}
              setActiveSection={() => this.setActiveSection(accountSections.subscriptions)}
            />
            <PaymentMethods
              active={this.state.activeSection === accountSections.paymentMethods}
              setActiveSection={() => this.setActiveSection(accountSections.paymentMethods)}
              setActivePaymentMethod={this.setActivePaymentMethod}
            />
            <OrderHistory active={this.state.activeSection === accountSections.orderHistory} />
          </SectionContainer>
          <SectionContainer>
            {this.state.activeSection === accountSections.subscriptions && <EditSubscription />}
            {this.state.activeSection === accountSections.paymentMethods && <EditPaymentMethod paymentMethodId={this.state.activePaymentMethod} />}
          </SectionContainer>
        </SplitContent>
      </PageContainer>
    );
  }
}