import { withTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid, { GridProps } from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import BackgroundVideo, { BackgroundVideoProps } from 'src/components/BackgroundVideo';
import { LinkButton, RequestDemoButton } from 'src/components/Button';
import Center from 'src/components/Center';
import MoreArrows from 'src/components/MoreArrows';
import Page, { PageSection } from 'src/components/Page';
import { SectionContent, VisualizationSection } from 'src/components/Section';
import SubscribeBox from 'src/components/SubscribeBox';
import { useTranslation } from 'src/hooks/useTranslations';
import srcCloudPoster from 'src/images/cloud-simulation.jpg';
import srcDigitalTwinPoster from 'src/images/digital-twin.jpg';
import srcSimulationPoster from 'src/images/simulation-platform.jpg';
import srcDigitalTwinVideo from 'src/videos/digital-twin.mp4';
import srcSimulationVideo from 'src/videos/simulation-platform.mp4';
import srcCloudVideo from 'src/videos/vis-2.mp4';
import styled from 'styled-components';
import videoSrcPlaceholder1 from '../videos/Placeholder1.mp4';
import videoSrcPlaceholder2 from '../videos/Placeholder2.mp4';
import videoSrcHero from '../videos/vis-1.mp4';

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
                <Typography>{t('home.body')}</Typography>
                <Box mt={6}>
                  <Grid container spacing={4} justify='center'>
                    <Grid item>
                      <RequestDemoButton variant='outlined' />
                    </Grid>
                    <Grid item>
                      <LinkButton color='primary' buttonVariant='contained' to='/docs/getting-started/' target='_blank'>
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

      <PageSection>
        <Box my={15}>
          <VisualizationSection title={t('home.section1.title')} variant='h3' video={videoSrcPlaceholder1}>
            {t('home.section1.body')}
          </VisualizationSection>
        </Box>
      </PageSection>

      <PageSection>
        <Box my={15}>
          <VisualizationSection title={t('home.section2.title')} flip variant='h3' video={videoSrcPlaceholder2}>
            {t('home.section2.body')}
          </VisualizationSection>
        </Box>
      </PageSection>

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
                {t('home.features.0.body')}
              </SectionContent>
            </Grid>
            <Grid item xs={12} sm={4}>
              <SmallVideo poster={srcCloudPoster} src={srcCloudVideo} />
              <SectionContent
                title={t('home.features.1.title')}
                buttonText='readMore'
                buttonProps={{ to: '/product/cloud/', title: t('home.features.1.title') }}
              >
                {t('home.features.1.body')}
              </SectionContent>
            </Grid>
            <Grid item xs={12} sm={4}>
              <SmallVideo poster={srcDigitalTwinPoster} src={srcDigitalTwinVideo} />
              <SectionContent
                title={t('home.features.2.title')}
                buttonText='readMore'
                buttonProps={{ to: '/product/digitaltwin/', title: t('home.features.2.title') }}
              >
                {t('home.features.2.body')}
              </SectionContent>
            </Grid>
          </Grid>
        </PageSection>
      </Box>

      <SubscribeBox />
    </Page>
  );
}
