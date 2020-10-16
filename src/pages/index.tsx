import React from 'react';
import { Link } from 'gatsby';
import Page from '../components/Page';
import { Header } from '../components';

export default function Home() {
  return (
    <Page>
      <Header>Gatsby Website</Header>
      <div>Hello world!</div>
      <br />
      <Link to='/product/simulation/'>Product -- Simulation</Link>
      {' | '}
      <Link to='/product/cloud/'>Product -- Cloud simulation as-a-service</Link>
      {' | '}
      <Link to='/product/digitaltwin/'>Product -- Digital Twin creation service</Link>
      {' | '}
      <Link to='/applications/'>Applications</Link>
      {' | '}
      <Link to='/news/'>News</Link>
      {' | '}
      <Link to='/about'>About</Link>
    </Page>
  );
}
