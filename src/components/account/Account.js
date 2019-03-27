import React, { Component } from 'react';

import { AppContext } from '../../AppContext';
import { getUser } from '../../services/firebase';
import {
  PageContainer,
  PageHeader,
  PageContent,
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

  componentDidMount() {
    getUser(this.context);
  }

  render() {
    console.log('CONTEXT', this.context);
    return (
      <PageContainer>
        <PageHeader
          title="Account Details"
          subtitle="Manage subscriptions, payment methods, & order history."
        />
        <PageContent>
          <SectionContainer>
            {this.context.user.currentSubscription && <ManageSubscriptions />}
            <PaymentMethods />
            <OrderHistory />
          </SectionContainer>
          <SectionContainer>
            <CurrentSubscription />
          </SectionContainer>
        </PageContent>
      </PageContainer>
    );
  }
}
