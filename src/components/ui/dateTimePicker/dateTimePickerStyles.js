import styled from 'styled-components';

import { BORDER_RADIUS, COLORS } from '../../../constants';
import arrowGrey from '../../../assets/images/arrowGrey.svg';

export const StyledDatePicker = styled.div`
  text-align: left;
  width: 100%;
  position: relative;
`;

export const DateTimeOption = styled.div`
  background-color: ${COLORS.GREY_LIGHT};
  border-radius: ${BORDER_RADIUS};
  border: 3px solid ${COLORS.GREY_LIGHT};
  color: ${COLORS.TEXT};
  cursor: pointer;
  
  ${props => !props.isSelected && `
    &:hover {
      background-color: transparent;
      color: ${COLORS.GREEN};
      border-color: ${COLORS.GREEN};
    }
  `}

  ${props => props.isSelected && `
    background-color: ${COLORS.GREEN};
    border-color: ${COLORS.GREEN}
    color: white;
  `}
`;

export const Days = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  max-width: 570px;
  margin: -5px;
  overflow: hidden;
`;

export const StyledDay = styled(DateTimeOption)`
  width: 85px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin: 5px;

  ${props => props.isToday && !props.isSelected && `
    background-color: ${COLORS.GREY};
    border-color: ${COLORS.GREY};
    color: white;
  `}

  ${props => (
    props.isLastDayOfMonth &&
    props.index < 12 &&
    props.currentStep === 'DATE'
  ) && `
    margin-bottom: 60px;

    &:after {
      position: absolute;
      left: 5px;
      margin-top: 85px;
      font-size: 22px;
      color: ${COLORS.TEXT};
      pointer-events: none;

      content: '${props.nextMonth} ${props.yearOfNextMonth}';
    }
  `}
`;

export const DayOfWeek = styled.h3`
  margin-bottom: 5px;
`;

export const DayOfMonth = styled.h1``;

export const BackToDateLink = styled.h4`
  position: absolute;
  top: 0;
  right: 0;
  color: ${COLORS.TEXT_LIGHT};
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:before {
    content: url(${arrowGrey});
    margin-right: 5px;
  }
`;

export const StyledTimeOptions = styled.div`
  margin-top: 25px;
`;

export const TimeOptionsContent = styled.div`
  display: flex;
  align-items: stretch;
`;

export const TimeOption = styled(DateTimeOption)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  width: 100%;


  &:not(:last-of-type) {
    margin-right: 10px;
  }
`;

export const Time = styled.h2``;

export const TimeLabel = styled.h3``;

export const StyledFrequencyOptions = styled.div`
  margin-top: 25px;
`;

export const FrequencyOptionsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FrequencyOption = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;

  margin-bottom: 15px;
`;

export const FrequencyCheckBox = styled(DateTimeOption)`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`;
