import styled from 'styled-components';

import {
  Button,
} from '../ui';

export const LoginForm = styled.div`
  max-width: 500px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
`;

export const LoginButton = styled(Button)`
  width: 100%;
  margin-top: 15px;
  text-align: center;
  display: inline-block;
`;
