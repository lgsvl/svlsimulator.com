import { withTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Center from 'src/components/Center';
import Page from 'src/components/Page';
import SubscribeBox from 'src/components/SubscribeBox';
import styled from 'styled-components';
import { navigate } from 'gatsby';

const HeroGrid = withTheme(styled(Grid)`
  height: 100%;
`);

export default function About() {
  // const { t } = useTranslation();
  if (typeof window !== 'undefined' && window.location.pathname.startsWith('/docs/')) {
    window.location.pathname = '/docs/404.html';
    return;
  }
  return (
    <Page>
      <Box height='70vh' maxHeight={720}>
        <HeroGrid container alignItems='center' justify='center'>
          <Center maxWidth={800}>
            <Typography variant='h1' color='primary'>
              Oops!
            </Typography>
            <Typography variant='h3'>Can't simulate this page.</Typography>
            <Typography variant='caption' color='textSecondary'>
              (Status: 404, page not found)
            </Typography>
            <Typography>
              You can simulate most of the things most of the time, but this page isn't one of them.
            </Typography>
          </Center>
        </HeroGrid>
      </Box>

      <SubscribeBox />
    </Page>
  );
}
