import React, { Component } from 'react';

import { AppContext } from '../../AppContext';
import {
  PageContainer,
  PageHeader,
  PageContent,
  OrderSummary,
} from '../ui';
import { DateTimePicker } from './dateTimePicker/DateTimePicker'
import {
  StyledButton,
} from './dateTimeStyles';

export class DateTime extends Component {
  static contextType = AppContext;

  state = {
    selectedDay: this.context.order.day,
    selectedTime: this.context.order.time,
    selectedFrequency: this.context.order.frequency,
  };

  setSelectedDay = (day) => {
    this.setState({ selectedDay: day });
    this.context.updateOrder({ day });
  }

  setSelectedTime = (time) => {
    this.setState({ selectedTime: time });
    this.context.updateOrder({ time });
  };

  setSelectedFrequency = (frequency) => {
    this.setState({ selectedFrequency: frequency });
    this.context.updateOrder({ frequency });
  }

  render() {
    return (
      <PageContainer>
        <PageHeader title="What Day Do You Need Us?" />
        <PageContent>
          <DateTimePicker
            selectedDay={this.state.selectedDay}
            selectDay={this.setSelectedDay}
            selectedTime={this.state.selectedTime}
            selectTime={this.setSelectedTime}
            selectedFrequency={this.state.selectedFrequency}
            selectFrequency={this.setSelectedFrequency}
          />
          <OrderSummary />
        </PageContent>
        <StyledButton to="/payment" showArrow>Payment</StyledButton>
      </PageContainer>
    );
  }
}
