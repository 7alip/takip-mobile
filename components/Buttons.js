import React from 'react';
import { Button, Icon, Layout, Spinner } from '@ui-kitten/components';

const StarIcon = props => <Icon {...props} name="star" />;

const LoadingIndicator = props => (
  <Layout>
    <Spinner size="small" />
  </Layout>
);

const Buttons = () => (
  <Layout level="1">
    <Button status="primary" accessoryLeft={StarIcon}>
      PRIMARY
    </Button>

    <Button status="success" accessoryRight={StarIcon}>
      SUCCESS
    </Button>

    <Button status="danger" accessoryLeft={StarIcon} />

    <Button appearance="ghost" status="danger" accessoryLeft={StarIcon} />

    <Button appearance="outline" accessoryLeft={LoadingIndicator}>
      LOADING
    </Button>
  </Layout>
);

export default Buttons;
