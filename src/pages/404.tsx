import { withTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Page from 'src/components/Page';
import SubscribeBox from 'src/components/SubscribeBox';
// import { useTranslation } from 'src/hooks/useTranslations';
import { px } from 'src/utils/theme';
import styled from 'styled-components';

const Center = withTheme(styled(Container)`
  text-align: center;
  max-width: ${({ theme }) => px(theme.spacing(100))};
`);

const HeroGrid = withTheme(styled(Grid)`
  height: 100%;
`);

export default function About() {
  // const { t } = useTranslation();
  return (
    <Page>
      <Box height='70vh'>
        <HeroGrid container alignItems='center' justify='center'>
          <Center>
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
