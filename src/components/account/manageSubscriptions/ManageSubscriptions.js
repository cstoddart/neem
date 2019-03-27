import React, { Component, Fragment } from 'react';

import { AppContext } from '../../../AppContext';
import {
  SectionHeader,
} from '../../ui';

export class ManageSubscriptions extends Component {
  static contextType = AppContext;

  render() {
    const frequency = this.context.user.currentSubscription.frequency || '-';
    const address = this.context.user.currentSubscription.address || '-';
    return (
      <Fragment>
        <SectionHeader>Manage Subscriptions</SectionHeader>
        <div>{frequency}</div>
        <div>{address}</div>
      </Fragment>
    )
  }
}
