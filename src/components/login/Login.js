import React, { Component } from 'react';

import { AppContext } from '../../AppContext';
import { login, getLoginResult } from '../../services/auth0'
import {
  PageContainer,
  Input,
  Button,
} from '../ui';

export class Login extends Component {
  static contextType = AppContext;
  
  state = {
    email: '',
    password: '',
  }
  
  handleSubmit = () => {
    const { email, password } = this.state;
    login({ email, password });
  }
  
  handleChange = (event) => this.setState({ [event.target.name]: event.target.value })
  
  render() {
    getLoginResult();
    return(
      <PageContainer>
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
        <Button onClick={this.handleSubmit}>Login</Button>
      </PageContainer>
    );
  }
}
