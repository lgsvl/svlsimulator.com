import React from 'react';
import Page from '../../components/Page';
import Typography from '@material-ui/core/Typography';
import Section from '../../components/Section';
import Button from '@material-ui/core/Button';

export default function CloudSimAAS() {
  return (
    <Page>
      <Section title='Cloud Simulation-as-a-Service' variant='h2'>
        <Typography>Ability to resimulate with local simulation - not just on remote servers</Typography>
        <Typography>Sensor data visualization</Typography>
        <Typography>Test case analysis reports and event detection</Typography>
        <Typography>Content ecosystem - maps, vehicles, sensors, plugins from partners and community</Typography>

        <Button color='primary' variant='contained'>
          Request Demo
        </Button>
      </Section>
    </Page>
  );
}
