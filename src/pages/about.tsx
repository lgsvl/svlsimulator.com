import Typography from '@material-ui/core/Typography';
import React from 'react';
import Page from '../components/Page';

export default function About() {
  return (
    <Page>
      <Typography variant='h1'>About</Typography>
      <Typography variant='h2'>Mission:</Typography>
      <Typography>To bring Future Mobility powered by Autonomy into reality faster, safer and less costly.</Typography>
      <Typography variant='h2'>Vision:</Typography>
      <Typography>
        Simulation is the key accelerator for Future mobility driven by autonomy We will become the de-facto simulation
        platform for future mobility.
      </Typography>
    </Page>
  );
}
