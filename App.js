import React from 'react';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import Test from './components/Test';
import Top from './components/Top';
import Buttons from './components/Buttons';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://manevitakip.herokuapp.com/v1/graphql',
  }),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Top />
        <Layout>
          <Buttons />
        </Layout>
        <Test />
      </ApplicationProvider>
    </ApolloProvider>
  );
}
