import styled from 'styled-components';

import { SITE_WIDTH } from '../../../constants';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  padding: 50px 0;
  width: 90%;
  max-width: ${SITE_WIDTH};
  margin: 0 auto;
`;
