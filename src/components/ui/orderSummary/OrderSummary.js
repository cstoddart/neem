import React, { Component } from 'react';
import format from 'date-fns/format';

import { AppContext } from '../../../AppContext';
import { numberWithCommas } from '../../../utils';
import {
  SectionContainer,
  SectionHeader,
} from '../';
import {
  EditButton,
  AddressSummary,
  CostSummary,
  OrderTotal,
  SummaryPoint,
  SummaryPointTitle,
  SummaryPointDetails,
} from './orderSummaryStyles';

export class OrderSummary extends Component {
  static contextType = AppContext;

  render() {
    return (
      <SectionContainer>
        <SectionHeader>Order Summary</SectionHeader>
        <AddressSummary>
          <EditButton to="/address">Change</EditButton>
          <SummaryPoint>
            <SummaryPointTitle>Home Address -</SummaryPointTitle>
            <SummaryPointDetails>{this.context.order.address || '--'}</SummaryPointDetails>
          </SummaryPoint>
          <SummaryPoint>
            <SummaryPointTitle>Your Lot Size -</SummaryPointTitle>
            <SummaryPointDetails>{numberWithCommas(this.context.order.lotSize) || '--'}</SummaryPointDetails>
          </SummaryPoint>
          <SummaryPoint>
            <SummaryPointTitle>Service Date & Time -</SummaryPointTitle>
            <SummaryPointDetails>{
              this.context.order.day && this.context.order.time
                ? `${format(this.context.order.day, 'dddd MMMM Do')} from ${this.context.order.time}`
                : '--'
            }</SummaryPointDetails>
          </SummaryPoint>
          <SummaryPoint>
            <SummaryPointTitle>Subscription Options -</SummaryPointTitle>
            <SummaryPointDetails>{this.context.order.frequency || '--'}</SummaryPointDetails>
          </SummaryPoint>
        </AddressSummary>
        <CostSummary>
          <SummaryPoint>
            <SummaryPointTitle>Subtotal -</SummaryPointTitle>
            <SummaryPointDetails>{numberWithCommas(this.context.order.subtotal) || '--'}</SummaryPointDetails>
          </SummaryPoint>
          <SummaryPoint>
            <SummaryPointTitle>State Tax & Fees -</SummaryPointTitle>
            <SummaryPointDetails>{numberWithCommas(this.context.order.taxes) || '--'}</SummaryPointDetails>
          </SummaryPoint>
        </CostSummary>
        <OrderTotal>
          <SummaryPoint>
            <SummaryPointTitle>Final Payment -</SummaryPointTitle>
            <SummaryPointDetails>{numberWithCommas(this.context.order.total) || '--'}</SummaryPointDetails>
          </SummaryPoint>
        </OrderTotal>
      </SectionContainer>
    );
  }
}
