import { Hidden, withTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { MapFunction } from 'src/@types/utils';
import RequestDemoButton from 'src/components/RequestDemoButton';
import Center from 'src/components/Center';
import Page from 'src/components/Page';
import SubscribeBox from 'src/components/SubscribeBox';
import { useTranslation } from 'src/hooks/useTranslations';
import styled from 'styled-components';

const HeroGrid = withTheme(styled(Grid)`
  height: 100%;
`);

const HeadingWrapper: MapFunction<string> = (str, i) => (
  <Typography variant='h5' key={`heading${i}`}>
    {str}
  </Typography>
);

const TypoWrapper: MapFunction<string> = (str, i) => (
  <Typography paragraph key={`paragraph${i}`}>
    {str}
  </Typography>
);

export default function About() {
  const { t, tMap } = useTranslation();
  return (
    <Page title={t('about.title')}>
      <Box height='70vh'>
        <HeroGrid container alignItems='center' justify='center'>
          <Center maxWidth={100}>
            <Typography variant='h4'>{t('about.body')}</Typography>
          </Center>
        </HeroGrid>
      </Box>
      <Grid container>
        <Grid item xs={12} sm={5}>
          <Box mb={7}>
            <Box mb={2}>
              <Typography variant='overline'>{t('about.mission.title')}</Typography>
            </Box>
            {tMap('about.mission.body', HeadingWrapper)}
          </Box>
          <Box mb={7}>
            <Box mb={2}>
              <Typography variant='overline'>{t('about.vision.title')}</Typography>
            </Box>
            {tMap('about.vision.body', HeadingWrapper)}
          </Box>
          <Box mb={7}>
            <RequestDemoButton />
          </Box>
        </Grid>
        <Hidden only='xs'>
          <Grid item sm={1} />
        </Hidden>
        <Grid item xs={12} sm={6}>
          <Box mb={7}>{tMap('about.details', TypoWrapper)}</Box>
        </Grid>
      </Grid>

      <SubscribeBox />
    </Page>
  );
}
