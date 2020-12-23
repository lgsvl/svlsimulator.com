import { withTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid, { GridProps } from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { MapFunction } from 'src/@types/utils';
import BackgroundVideo, { BackgroundVideoProps } from 'src/components/BackgroundVideo';
import { LinkButton, RequestDemoButton } from 'src/components/Button';
import Center from 'src/components/Center';
import MoreArrows from 'src/components/MoreArrows';
import Page, { PageSection } from 'src/components/Page';
import Section, { SectionContent } from 'src/components/Section';
import SubscribeBox from 'src/components/SubscribeBox';
import { useTranslation } from 'src/hooks/useTranslations';
import srcCloudPoster from 'src/images/cloud-simulation.jpg';
import srcDigitalTwinPoster from 'src/images/digital-twin.jpg';
import srcSimulationPoster from 'src/images/simulation-platform.jpg';
import srcCloudVideo from 'src/videos/cloud-simulation.mp4';
import srcDigitalTwinVideo from 'src/videos/digital-twin.mp4';
import srcSimulationVideo from 'src/videos/simulation-platform.mp4';
import styled from 'styled-components';
import videoSrcHero from '../videos/Hero.mp4';
import videoSrcPlaceholder1 from '../videos/Placeholder1.mp4';
import videoSrcPlaceholder2 from '../videos/Placeholder2.mp4';

const SmallVideo: React.FC<BackgroundVideoProps> = props => (
  <BackgroundVideo
    height={{ xs: 200, sm: 300, md: 456 }}
    mb={{ xs: 2, md: 5 }}
    borderRadius='borderRadius'
    fit='cover'
    {...props}
  />
);

const HeroGrid = withTheme(styled(Grid)`
  height: 100%;
  position: relative;
`) as React.FC<GridProps>;

const TypoWrapper: MapFunction<string> = (str, i) => <Typography key={`paragraph${i}`}>{str}</Typography>;

export default function Home() {
  const { t, tMap } = useTranslation();
  return (
    <Page>
      <PageSection>
        <Box mb={15} height='70vh' maxHeight={720} position='relative'>
          <BackgroundVideo src={videoSrcHero} position='absolute' style={{ position: 'absolute' }}>
            <Typography>
              A video of Lidar scanning an environment, with a simulated vehicle driving down a street.
            </Typography>
          </BackgroundVideo>
          <HeroGrid container direction='column' alignItems='center' justify='center'>
            <Grid item>
              <Typography variant='h1'>{t('home.title')}</Typography>
            </Grid>
            <Grid item>
              <Center disableGutters maxWidth={720}>
                {tMap('home.body', TypoWrapper)}
                <Box mt={6}>
                  <Grid container spacing={4} justify='center'>
                    <Grid item>
                      <RequestDemoButton />
                    </Grid>
                    <Grid item>
                      <LinkButton
                        color='primary'
                        buttonVariant='contained'
                        to='/docs/getting-started/'
                      >
                        {t('main.buttons.getStarted')}
                      </LinkButton>
                    </Grid>
                  </Grid>
                </Box>
              </Center>
            </Grid>
          </HeroGrid>
          <Box p={2} textAlign='center'>
            <MoreArrows />
          </Box>
        </Box>
      </PageSection>

      <Box my={15}>
        <Section
          title={t('home.section1.title')}
          // buttonText='getDemo'
          contained
          image={
            <BackgroundVideo src={videoSrcPlaceholder1}>
              <Typography>
                A different video of Lidar scanning an environment, identifying objects as it moves.
              </Typography>
            </BackgroundVideo>
          }
          tuckImage
          variant='h3'
        >
          {tMap('home.section1.body', TypoWrapper)}
        </Section>
      </Box>

      <Box my={15}>
        <Section
          title={t('home.section2.title')}
          // buttonText='getDemo'
          contained
          flip
          image={
            <BackgroundVideo src={videoSrcPlaceholder2}>
              <Typography>A video of a simulated vehicle autonomously driving down a street.</Typography>
            </BackgroundVideo>
          }
          tuckImage
          variant='h3'
        >
          {tMap('home.section2.body', TypoWrapper)}
        </Section>
      </Box>

      <Box my={15}>
        <PageSection>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <SmallVideo poster={srcSimulationPoster} src={srcSimulationVideo} />
              <SectionContent
                title={t('home.features.0.title')}
                buttonText='readMore'
                buttonProps={{ to: '/product/simulation/', title: t('home.features.0.title') }}
              >
                {tMap('home.features.0.body', TypoWrapper)}
              </SectionContent>
            </Grid>
            <Grid item xs={12} sm={4}>
              <SmallVideo poster={srcCloudPoster} src={srcCloudVideo} />
              <SectionContent
                title={t('home.features.1.title')}
                buttonText='readMore'
                buttonProps={{ to: '/product/cloud/', title: t('home.features.1.title') }}
              >
                {tMap('home.features.1.body', TypoWrapper)}
              </SectionContent>
            </Grid>
            <Grid item xs={12} sm={4}>
              <SmallVideo poster={srcDigitalTwinPoster} src={srcDigitalTwinVideo} />
              <SectionContent
                title={t('home.features.2.title')}
                buttonText='readMore'
                buttonProps={{ to: '/product/digitaltwin/', title: t('home.features.2.title') }}
              >
                {tMap('home.features.2.body', TypoWrapper)}
              </SectionContent>
            </Grid>
          </Grid>
        </PageSection>
      </Box>

      <SubscribeBox />
    </Page>
  );
}
