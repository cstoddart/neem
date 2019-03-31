import styled from 'styled-components';

import { COLORS } from 'src/constants';
import { SectionCard } from 'src/components/ui';

export const PaymentMethodDetails = styled(SectionCard)`
  padding: 0;

  ${({ active }) => active ? `
    background-color: ${COLORS.GREY_LIGHT};
  ` : null}
`;
