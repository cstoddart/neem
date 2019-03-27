import React, { Component } from 'react';

import { AppContext } from '../../AppContext';
import { login } from '../../services/firebase';
import {
  PageContainer,
  PageHeader,
  Input,
  Button,
} from '../ui';
import {
  LoginForm,
  LoginInput,
  LoginButton,
} from './loginStyles';

export class Login extends Component {
  static contextType = AppContext;
  
  state = {
    email: '',
    password: '',
  };
  
  handleSubmit = () => {
    const { email, password } = this.state;
    login({
      email,
      password,
      context: this.context,
      redirect: () => this.props.history.push('/account'),
    });
  };
  
  handleChange = (event) => this.setState({ [event.target.name]: event.target.value });
  
  render() {
    return(
      <PageContainer>
        <PageHeader
          title="Log In"
          subtitle="If you're an existing member you can sign in below."
        />
        <LoginForm>
          <LoginInput>
            <Input
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              label="Email Address"
            />
          </LoginInput>
          <LoginInput>
            <Input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              label="Password"
            />
          </LoginInput>
          <LoginButton onClick={this.handleSubmit}>Login</LoginButton>
        </LoginForm>
      </PageContainer>
    );
  }
}
