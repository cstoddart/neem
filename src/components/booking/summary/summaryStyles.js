import styled from 'styled-components';

import { COLORS } from 'src/constants';

export const NextSteps = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
`;

export const Step = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  &:not(:last-of-type) {
    margin-bottom: 25px;
  }
`;

export const Number = styled.div`
  background-color: ${COLORS.GREEN};
  border-radius: 50px;
  color: white;
  min-height: 40px;
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
`;

export const Title = styled.h3`
  margin-bottom: 5px;
`;

export const Text = styled.p``;
