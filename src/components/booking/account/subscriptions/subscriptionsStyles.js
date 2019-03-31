import styled from 'styled-components';

import { COLORS } from 'src/constants';
import { SectionCard } from 'src/components/ui';

export const Subscription = styled(SectionCard)`
  border: 3px solid ${COLORS.GREY_LIGHT};
  cursor: pointer;
  max-width: 500px;

  ${({ active }) => active ? `
    background-color: ${COLORS.GREY_LIGHT};
  ` : null}
`;

export const Title = styled.h3`
  margin-bottom: 3px;
`;

export const Detail = styled.h5`
  color: ${COLORS.GREY_DARK};
`;
