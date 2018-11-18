import styled from 'styled-components';

import { SITE_WIDTH } from '../../../constants';

export const Row = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: ${SITE_WIDTH};
  margin: 0 auto;
`;
