import styled from 'styled-components';

import {
  Button,
  Input,
} from 'src/components/ui';

export const LoginForm = styled.div`
  max-width: 350px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
`;

export const LoginInput = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 15px;
  }
`;

export const LoginButton = styled(Button)`
  width: 100%;
  margin-top: 15px;
  text-align: center;
  display: inline-block;
`;
