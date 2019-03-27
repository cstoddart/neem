import React, { Component, Fragment } from 'react';
import addDays from 'date-fns/add_days';
import addMonths from 'date-fns/add_months';
import format from 'date-fns/format';
import isToday from 'date-fns/is_today';
import isSameDay from 'date-fns/is_same_day';
import isLastDayOfMonth from 'date-fns/is_last_day_of_month';

import { TIME_OPTIONS, FREQUENCY_OPTIONS } from '../../../constants';
import {
  SectionContainer, 
  SectionHeader,
  ArrowIcon,
} from '../../ui';
import {
  Days,
  StyledDay,
  DayOfWeek,
  DayOfMonth,
  BackToDateLink,
  BackToDateArrow,
  StyledTimeOptions,
  TimeOptionsContent,
  TimeOption,
  Time,
  TimeLabel,
  StyledFrequencyOptions,
  FrequencyOptionsContent,
  FrequencyOption,
  FrequencyCheckBox,
} from './dateTimePickerStyles';

const today = new Date();
const dates = [];

for (let i = 0; i < 18; i++) {
  const date = addDays(today, i);
  dates.push(date);
}

function surroundingDates(dateIndex) {
  if (dateIndex < 6) return dates.slice(0, 6);
  else if (dateIndex < 12) return dates.slice(6, 12);
  else return dates.slice(12, 18);
}

const Day = ({ index, day, isSelected, selectDay, currentStep }) => (
  <StyledDay
    index={index}
    isToday={isToday(day)}
    isSelected={isSelected}
    isLastDayOfMonth={isLastDayOfMonth(day)}
    nextMonth={format(addMonths(day, 1), 'MMMM')}
    yearOfNextMonth={format(addMonths(day, 1), 'YYYY')}
    onClick={() => selectDay(day, index)}
    currentStep={currentStep}
  >
    <DayOfWeek>{isToday(day) ? 'Today' : format(day, 'ddd')}</DayOfWeek>
    <DayOfMonth>{format(day, 'D')}</DayOfMonth>
  </StyledDay>
);

const TimeOptions = ({ selectedTime, selectTime }) => (
  <StyledTimeOptions>
    <SectionHeader>Select Your Open Times</SectionHeader>
    <TimeOptionsContent>
      <TimeOption
        onClick={() => selectTime(TIME_OPTIONS.MORNING)}
        isSelected={selectedTime === TIME_OPTIONS.MORNING}
      >
        <Time>7am - 12pm</Time>
        <TimeLabel>Morning</TimeLabel>
      </TimeOption>
      <TimeOption
        onClick={() => selectTime(TIME_OPTIONS.AFTERNOON)}
        isSelected={selectedTime === TIME_OPTIONS.AFTERNOON}
      >
        <Time>12pm - 6pm</Time>
        <TimeLabel>Midday/Evening</TimeLabel>
      </TimeOption>
      <TimeOption
        onClick={() => selectTime(TIME_OPTIONS.ALL_DAY)}
        isSelected={selectedTime === TIME_OPTIONS.ALL_DAY}
      >
        <Time>7am - 6pm</Time>
        <TimeLabel>All Day</TimeLabel>
      </TimeOption>
    </TimeOptionsContent>
  </StyledTimeOptions>
);

const FrequencyOptions = ({ selectedFrequency, selectFrequency }) => (
  <StyledFrequencyOptions>
    <SectionHeader>Subscription Options</SectionHeader>
    <FrequencyOptionsContent>
      <FrequencyOption
        onClick={() => selectFrequency(FREQUENCY_OPTIONS.EVERY_WEEK)}
        isSelected={selectedFrequency === FREQUENCY_OPTIONS.EVERY_WEEK}
      >
        <FrequencyCheckBox isSelected={selectedFrequency === FREQUENCY_OPTIONS.EVERY_WEEK} />
        {FREQUENCY_OPTIONS.EVERY_WEEK}
      </FrequencyOption>
      <FrequencyOption
        onClick={() => selectFrequency(FREQUENCY_OPTIONS.EVERY_TWO_WEEKS)}
        isSelected={selectedFrequency === FREQUENCY_OPTIONS.EVERY_TWO_WEEKS}
      >
        <FrequencyCheckBox isSelected={selectedFrequency === FREQUENCY_OPTIONS.EVERY_TWO_WEEKS} />
        {FREQUENCY_OPTIONS.EVERY_TWO_WEEKS}
      </FrequencyOption>
      <FrequencyOption
        onClick={() => selectFrequency(FREQUENCY_OPTIONS.EVERY_THREE_WEEKS)}
        isSelected={selectedFrequency === FREQUENCY_OPTIONS.EVERY_THREE_WEEKS}
      >
        <FrequencyCheckBox isSelected={selectedFrequency === FREQUENCY_OPTIONS.EVERY_THREE_WEEKS} />
        {FREQUENCY_OPTIONS.EVERY_THREE_WEEKS}
      </FrequencyOption>
      <FrequencyOption
        onClick={() => selectFrequency(FREQUENCY_OPTIONS.EVERY_MONTH)}
        isSelected={selectedFrequency === FREQUENCY_OPTIONS.EVERY_MONTH}
      >
        <FrequencyCheckBox isSelected={selectedFrequency === FREQUENCY_OPTIONS.EVERY_MONTH} />
        {FREQUENCY_OPTIONS.EVERY_MONTH}
      </FrequencyOption>
      <FrequencyOption
        onClick={() => selectFrequency(FREQUENCY_OPTIONS.NO_REPEAT)}
        isSelected={selectedFrequency === FREQUENCY_OPTIONS.NO_REPEAT}
      >
        <FrequencyCheckBox isSelected={selectedFrequency === FREQUENCY_OPTIONS.NO_REPEAT} />
        {FREQUENCY_OPTIONS.NO_REPEAT}
      </FrequencyOption>
    </FrequencyOptionsContent>
  </StyledFrequencyOptions>
);

export class DateTimePicker extends Component {
  state = {
    dates,
    currentDateIndex: 0,
    currentStep: 'DATE',
  }

  selectDay = (day, index) => {
    this.setState({
      dates: surroundingDates(index),
      currentDateIndex: index,
      currentStep: 'TIME',
    });
    this.props.selectDay(day);
  }

  backToDate = () => this.setState({ currentStep: 'DATE', dates });

  render() {
    return (
      <SectionContainer>
        <SectionHeader>Select Your Date</SectionHeader>
        <Days>
          {this.state.dates.map((date, index) => (
            <Day
              key={`day${index}`}
              index={this.state.currentStep === 'DATE' ? index : this.state.currentDateIndex}
              day={date}
              isSelected={isSameDay(date, this.props.selectedDay)}
              selectDay={this.selectDay}
              currentStep={this.state.currentStep}
            />
          ))}
        </Days>
        {this.state.currentStep === 'TIME' &&
          <Fragment>
            <BackToDateLink onClick={this.backToDate}>
              <BackToDateArrow>
                <ArrowIcon width={15} height={15} />
              </BackToDateArrow>
              Choose Another Date
            </BackToDateLink>
            <TimeOptions
              selectedTime={this.props.selectedTime}
              selectTime={this.props.selectTime}
            />
            <FrequencyOptions
              selectedFrequency={this.props.selectedFrequency}
              selectFrequency={this.props.selectFrequency}
            />
          </Fragment>
        }
      </SectionContainer>
    );
  }
}
