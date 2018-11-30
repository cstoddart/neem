import styled from 'styled-components';

import { BORDER_RADIUS_SMALL, COLORS } from '../../../constants';

export const StyledOrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  text-align: left;
  width: 100%;
`;

const SummaryBox = styled.div`
  padding: 15px 25px;
  border-radius: ${BORDER_RADIUS_SMALL};
  
  &:not(:last-of-type) {
    margin-bottom: 15px;
  }
`;

export const AddressSummary = styled(SummaryBox)`
  border: 3px solid ${COLORS.GREY_LIGHT};
`;

export const CostSummary = styled(SummaryBox)`
  background-color: ${COLORS.GREY_LIGHT};
`;

export const OrderTotal = styled(SummaryBox)`
  background-color: ${COLORS.BROWN_LIGHT};
`;

export const SummaryPoint = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 15px;
  }
`;

export const SummaryPointTitle = styled.h3`
  font-weight: bold;
`;

export const SummaryPointDetails = styled.h4`
  color: ${COLORS.TEXT_LIGHT};
`;
