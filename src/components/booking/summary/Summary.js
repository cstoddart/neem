import React, { Component } from 'react';

import {
  PageContainer,
  PageHeader,
  SplitContent,
  OrderSummary,
  SectionContainer,
  SectionHeader,
} from 'src/components/ui';
import {
  NextSteps,
  Step,
  Number,
  Content,
  Title,
  Text,
} from './summaryStyles';

export class Summary extends Component {
  render() {
    return (
      <PageContainer>
        <PageHeader
          title="Hip Hip Hooray! 🎉🌳"
          subtitle="Thanks for trusting Neem with your lawn care, look below for next steps."
        />
        <SplitContent>
          <SectionContainer>
            <SectionHeader>Next Steps...</SectionHeader>
            <NextSteps>
              <Step>
                <Number>1</Number>
                <Content>
                  <Title>On the day of your lawn care service, you’ll be sent a text and email reminder.</Title>
                  <Text>Sometime around 6-8am you’ll be sent an text and email reminder informing you about your upcoming service. You’ll also find details about your Neem Professional.</Text>
                </Content>
              </Step>
              <Step>
                <Number>2</Number>
                <Content>
                  <Title>A Neem Professional will then arrive during your selected time frame.</Title>
                  <Text>A Neemer professional will arrive in a green uniformed polo, assess your front and back yard. Then begin the lawn care services.</Text>
                </Content>
              </Step>
              <Step>
                <Number>3</Number>
                <Content>
                  <Title>Upon service completion. The Neemer pro will leave a door hanger checklist for you.</Title>
                  <Text>Once the service has been completed, the Neemer professional will leave a door hanger checklist for you to fill out. Fill it out and leave it outside for our Neemer Managers who drive around to check your lawn.</Text>
                </Content>
              </Step>
            </NextSteps>
          </SectionContainer>
          <OrderSummary />
        </SplitContent>
      </PageContainer>
    );
  }
}
