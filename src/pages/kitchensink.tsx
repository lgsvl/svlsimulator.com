import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import LayoutGrid from 'src/components/LayoutGrid';
import Page, { PageSection } from 'src/components/Page';

export default function About() {
  return (
    <Page title='Kitchen Sink Component Demo'>
      <PageSection>
        <Typography variant='h3'>Button Types</Typography>
        <LayoutGrid xs={3} md={6} spacing={1}>
          <Button>Plain</Button>
          <Button color='primary'>primary</Button>
          <Button color='secondary'>secondary</Button>
          <Button disabled>Plain</Button>
          <Button disabled color='primary'>
            primary
          </Button>
          <Button disabled color='secondary'>
            secondary
          </Button>
        </LayoutGrid>

        <LayoutGrid xs={3} md={6} spacing={1}>
          <Button variant='contained'>Contained</Button>
          <Button variant='contained' color='primary'>
            primary
          </Button>
          <Button variant='contained' color='secondary'>
            secondary
          </Button>
          <Button disabled variant='contained'>
            Contained
          </Button>
          <Button disabled variant='contained' color='primary'>
            primary
          </Button>
          <Button disabled variant='contained' color='secondary'>
            secondary
          </Button>
        </LayoutGrid>

        <LayoutGrid xs={3} md={6} spacing={1}>
          <Button variant='outlined'>Outlined</Button>
          <Button variant='outlined' color='primary'>
            primary
          </Button>
          <Button variant='outlined' color='secondary'>
            secondary
          </Button>
          <Button disabled variant='outlined'>
            Outlined
          </Button>
          <Button disabled variant='outlined' color='primary'>
            primary
          </Button>
          <Button disabled variant='outlined' color='secondary'>
            secondary
          </Button>
        </LayoutGrid>
      </PageSection>
    </Page>
  );
}
