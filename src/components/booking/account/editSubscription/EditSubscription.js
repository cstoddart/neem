import React, { Component, Fragment } from 'react';

import { AppContext } from 'src/AppContext';
import {
  SectionHeader,
} from 'src/components/ui';
import {
  SubscriptionDetails,
} from './editSubscriptionStyles';

export class EditSubscription extends Component {
  static contextType = AppContext;

  render() {
    return (
      <Fragment>
        <SectionHeader>Update Subscription</SectionHeader>
        <SubscriptionDetails>
          <div>Edit This</div>
          <div>Edit That</div>
        </SubscriptionDetails>
      </Fragment>
    )
  }
}
