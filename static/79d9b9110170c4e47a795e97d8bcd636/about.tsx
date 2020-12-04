import { Hidden, withTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { MapFunction } from 'src/@types/utils';
import { RequestDemoButton } from 'src/components/Button';
import Center from 'src/components/Center';
import Image from 'src/components/Image';
import Page, { PageSection } from 'src/components/Page';
import SubscribeBox from 'src/components/SubscribeBox';
import { useTranslation } from 'src/hooks/useTranslations';
// import srcLgsvlLogo from 'src/images/lgsvl-logo-hollow.svg';
import srcLgsvlLogo from 'src/images/about.jpg';
import styled from 'styled-components';

const HeroGrid = withTheme(styled(Grid)`
  height: 100%;
  position: relative;
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
      <PageSection>
        <Box height='70vh' maxHeight={720} position='relative'>
          <Image
            src={srcLgsvlLogo}
            fit='contain'
            position='absolute'
            style={{
              opacity: 0.4
              // filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.5)) drop-shadow(0px 3px 40px #ff336699) saturate(1.2)'
            }}
          />
          <HeroGrid container alignItems='center' justify='center'>
            <Center maxWidth={800}>
              <Typography
                variant='h4'
                style={{ textShadow: '0 1px 10px rgb(20, 26, 45, 0.7), 0 1px 5px rgb(72, 19, 39, 0.7)' }}
              >
                {t('about.body')}
              </Typography>
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
      </PageSection>

      <SubscribeBox />
    </Page>
  );
}
