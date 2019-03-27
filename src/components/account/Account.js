import React, { Component } from 'react';
import { Elements, injectStripe } from 'react-stripe-elements';

import { AppContext } from '../../AppContext';
import { getUser } from '../../services/firebase';
import { getStripeCustomer } from '../../services/stripe';
import {
  PageContainer,
  PageHeader,
  SplitContent,
  OrderSummary,
  SectionContainer,
  SectionHeader,
} from '../ui';
import { ManageSubscriptions } from './manageSubscriptions/ManageSubscriptions';
import { PaymentMethods } from './paymentMethods/PaymentMethods';
import { OrderHistory } from './orderHistory/OrderHistory';
import { CurrentSubscription } from './currentSubscription/CurrentSubscription';

export class Account extends Component {
  static contextType = AppContext;

  async componentDidMount() {
    const user = await getUser(this.context);
    const stripeCustomer = await getStripeCustomer(user.stripeCustomerId);
    console.log('STRIPE CUSTOMER', stripeCustomer);
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
            {this.context.user.currentSubscription && <ManageSubscriptions />}
            <PaymentMethods />
            <OrderHistory />
          </SectionContainer>
          <SectionContainer>
            <CurrentSubscription />
          </SectionContainer>
        </SplitContent>
      </PageContainer>
    );
  }
}