import styled from 'styled-components';

import { COLORS, BORDER_RADIUS } from 'src/constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  width: ${({width}) => width || '100%'};
`;

export const Label = styled.h3`
  margin-bottom: 10px;
  text-align: left;
`;

export const InputContainer = styled.div`
  background-color: ${COLORS.GREY_LIGHT};
  border-radius: ${BORDER_RADIUS};
  padding: 15px;
  position: relative;
  
  ${({ inverted }) => inverted && `
    background-color: transparent;
    border: 3px solid ${COLORS.BORDER};
  `}
`;

export const StyledInput = styled.input`
  width: 100%;
`;

export const PasswordInput = styled(StyledInput)`
  padding-right: 25px;
`;

export const ShowPasswordButton = styled.div`
  position: absolute;
  top: calc(50% - 10px);
  right: 10px;
  background-color: grey;
  height: 20px;
  width: 25px;
  z-index: 1;
  cursor: pointer;
  border-radius: 100%;
`;

