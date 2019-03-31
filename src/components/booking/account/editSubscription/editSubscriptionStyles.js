import styled from 'styled-components';

import { COLORS } from 'src/constants';
import { SectionCard } from 'src/components/ui';

export const SubscriptionDetails = styled(SectionCard)`
  border: 3px solid ${COLORS.GREY_LIGHT};

  ${({ active }) => active ? `
    background-color: ${COLORS.GREY_LIGHT};
  ` : null}
`;
