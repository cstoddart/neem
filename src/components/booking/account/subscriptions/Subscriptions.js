import React, { Component, Fragment } from 'react';

import { AppContext } from 'src/AppContext';
import {
  SectionHeader,
} from 'src/components/ui';
import {
  Subscription,
  Title,
  Detail,
} from './subscriptionsStyles';

export class Subscriptions extends Component {
  static contextType = AppContext;

  render() {
    const frequency = this.context.user.currentSubscription.frequency;
    const address = this.context.user.currentSubscription.address;
    return (
      <Fragment>
        <SectionHeader>Manage Subscriptions</SectionHeader>
        <Subscription
          active={this.props.active ? 1 : 0}
          onClick={this.props.setActiveSection}
        >
          <Title>{frequency}</Title>
          <Detail>{address}</Detail>
        </Subscription>
      </Fragment>
    )
  }
}
