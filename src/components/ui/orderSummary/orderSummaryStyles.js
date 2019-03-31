import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { COLORS } from 'src/constants';
import { SectionCard } from 'src/components/ui/sectionCard/SectionCard';

export const EditButton = styled(Link)`
  position: absolute;
  top: 15px;
  right: 25px;
  font-size: 15px;
  font-weight: bold;
  color: ${COLORS.TEXT};
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

export const AddressSummary = styled(SectionCard)`
  border: 3px solid ${COLORS.GREY_LIGHT};
`;

export const CostSummary = styled(SectionCard)`
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

export const OrderTotal = styled(SectionCard)`
  background-color: ${COLORS.BROWN_LIGHT};

  ${SummaryPoint} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ${SummaryPointDetails} {
    color: ${COLORS.TEXT};
  }

  ${({ paid }) => paid && `
    background-color: ${COLORS.GREEN};
    color: white;

    ${SummaryPointDetails} {
      color: white;
    }
  `}
`;
