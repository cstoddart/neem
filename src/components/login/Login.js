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
  LoginButton,
} from './loginStyles';

export class Login extends Component {
  static contextType = AppContext;
  
  state = {
    email: '',
    password: '',
  }
  
  handleSubmit = () => {
    const { email, password } = this.state;
    const redirect = function() { this.props.history.push('/address') };
    login({ email, password, context: this.context, redirect });
  }
  
  handleChange = (event) => this.setState({ [event.target.name]: event.target.value })
  
  render() {
    return(
      <PageContainer>
        <PageHeader
          title="Log In"
          subtitle="If you're an existing member you can sign in below."
        />
        <LoginForm>
          <Input
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="Email Address"
          />
          <Input
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="Password"
          />
          <LoginButton onClick={this.handleSubmit}>Login</LoginButton>
        </LoginForm>
      </PageContainer>
    );
  }
}
