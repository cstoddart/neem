import React, { Component } from 'react';
import { Elements, injectStripe } from 'react-stripe-elements';

import { AppContext } from '../../AppContext';
import { getUser } from '../../services/firebase';
import { getStripeCustomer } from '../../services/stripe';
import {
  PageContainer,
  PageHeader,
  SplitContent,
  SectionContainer,
} from '../ui';
import { ManageSubscriptions } from './manageSubscriptions/ManageSubscriptions';
import { PaymentMethods } from './paymentMethods/PaymentMethods';
import { OrderHistory } from './orderHistory/OrderHistory';
import { CurrentSubscription } from './currentSubscription/CurrentSubscription';

const accountSections = {
  manageSubscriptions: 'manageSubscriptions',
  paymentMethods: 'paymentMethods',
  orderHistory: 'orderHistory',
};

export class Account extends Component {
  static contextType = AppContext;

  state = {
    activeSection: accountSections.manageSubscriptions,
  };

  async componentDidMount() {
    const user = await getUser(this.context);
    await getStripeCustomer(this.context, user.stripeCustomerId);
  }

  render() {
    return (
      <PageContainer>
        <PageHeader
          title="Account Details"
          subtitle="Manage subscriptions, payment methods, & order history."
        />
        <SplitContent>
          <SectionContainer>
            <ManageSubscriptions active={this.state.activeSection === accountSections.manageSubscriptions} />
            <PaymentMethods active={this.state.activeSection === accountSections.paymentMethods} />
            <OrderHistory active={this.state.activeSection === accountSections.orderHistory} />
          </SectionContainer>
          <SectionContainer>
            <CurrentSubscription />
          </SectionContainer>
        </SplitContent>
      </PageContainer>
    );
  }
}