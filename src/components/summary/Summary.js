import React, { Component } from 'react';

import {
  PageContainer,
  PageHeader,
  PageContent,
  OrderSummary,
  SectionContainer,
  SectionHeader,
} from '../ui';
import {

} from './summaryStyles';

export class Summary extends Component {
  render() {
    return (
      <PageContainer>
        <PageHeader
          title="Hip Hip Hooray! 🎉🌳"
          subtitle="Thanks for trusting Neem with your lawn care, look below for next steps."
        />
        <PageContent>
          <SectionContainer>
            <SectionHeader>Next Steps...</SectionHeader>
          </SectionContainer>
          <OrderSummary />
        </PageContent>
      </PageContainer>
    );
  }
}
