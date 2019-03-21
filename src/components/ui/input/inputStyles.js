import styled from 'styled-components';

import { COLORS, BORDER_RADIUS } from '../../../constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  width: 100%;
`;

export const Label = styled.h3`
  margin-bottom: 10px;
  text-align: left;
`;

export const StyledInput = styled.div`
  background-color: ${COLORS.GREY_LIGHT};
  border-radius: ${BORDER_RADIUS};
  padding: 15px;
`;
