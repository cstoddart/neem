import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { BORDER_RADIUS_SMALL, COLORS } from '../../../constants';

export const EditButton = styled(Link)`
  position: absolute;
  top: 15px;
  right: 25px;
  font-size: 15px;
  font-weight: bold;
  color: ${COLORS.TEXT};
`;

const SummaryBox = styled.div`
  padding: 15px 25px;
  border-radius: ${BORDER_RADIUS_SMALL};
  position: relative;
  
  &:not(:last-of-type) {
    margin-bottom: 15px;
  }
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

export const AddressSummary = styled(SummaryBox)`
  border: 3px solid ${COLORS.GREY_LIGHT};
`;

export const CostSummary = styled(SummaryBox)`
  background-color: ${COLORS.GREY_LIGHT};

  ${SummaryPoint} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ${SummaryPointDetails} {
    color: ${COLORS.TEXT};
  }
`;

export const OrderTotal = styled(SummaryBox)`
  background-color: ${COLORS.BROWN_LIGHT};

  ${SummaryPoint} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ${SummaryPointDetails} {
    color: ${COLORS.TEXT};
  }
`;
