import { withTheme } from '@material-ui/core';
import Box, { BoxProps } from '@material-ui/core/Box';
import Grid, { GridProps } from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { MapFunction } from 'src/@types/utils';
// import BackgroundVideo from 'src/components/BackgroundVideo';
import { RequestDemoButton } from 'src/components/Button';
import Center from 'src/components/Center';
import { IconApollo, IconBaidu, IconUnity, IconVelodyne } from 'src/components/Icons';
import Image, { ImageProps } from 'src/components/Image';
import LayoutGrid from 'src/components/LayoutGrid';
import MoreArrows from 'src/components/MoreArrows';
import Ouija, { OuijaAnchor } from 'src/components/Ouija';
import Page from 'src/components/Page';
import Section, { SectionContent } from 'src/components/Section';
import SubscribeBox from 'src/components/SubscribeBox';
import { useTranslation } from 'src/hooks/useTranslations';
import srcCloudPoster from 'src/images/cloud-simulation.jpg';
import srcDigitalTwinPoster from 'src/images/digital-twin.jpg';
import srcSimulationPoster from 'src/images/simulation-platform.jpg';
import styled from 'styled-components';
import videoSrcHero from '../videos/Hero.mp4';
import Visualizer from 'src/components/Visualizer';
// import videoSrcPlaceholder1 from '../videos/Placeholder1.mp4';
// import videoSrcPlaceholder2 from '../videos/Placeholder2.mp4';

const SmallImage = (props: ImageProps) => (
  <Image height={{ xs: 200, sm: 300, md: 456 }} mb={{ xs: 2, md: 5 }} borderRadius='borderRadius' {...props} />
);

const HeroBox = withTheme(styled(Box)``) as React.FC<BoxProps>;

const HeroGrid = withTheme(styled(Grid)`
  height: 100%;
  position: relative;
`) as React.FC<GridProps>;

const SilhouettedContent = withTheme(styled(Box)`
  ${({ theme }) => `
    filter:
      drop-shadow(0px 0px 2px ${theme.palette.background.default})
      drop-shadow(0 0px 4px ${theme.palette.background.default})
      drop-shadow(0 0px 20px ${theme.palette.background.default});
  `}
`) as React.FC<BoxProps>;

const TypoWrapper: MapFunction<string> = (str, i) => <Typography key={`paragraph${i}`}>{str}</Typography>;

const brandIconProps = { color: '#6D7B97', height: 40, width: '100%' };

export default function Home() {
  const { t, tMap } = useTranslation();
  return (
    <Page>
      <Ouija>
        {/* <video
          controls={false}
          loop
          autoPlay
          muted
          style={{ width: '100%', height: '100%', filter: 'saturate(0.7) contrast(1.01)' }}
        >
          <source src={videoSrcHero} type={'video/mp4'} />
        </video> */}
        <Visualizer />
      </Ouija>
      <HeroBox mb={15} height='70vh' position='relative'>
        <OuijaAnchor position='absolute' />
        {/* <BackgroundVideo src={videoSrcHero} position='absolute' style={{ position: 'absolute' }}>
          <Typography>
            A video of Lidar scanning an environment, with a simulated vehicle driving down a street.
          </Typography>
        </BackgroundVideo> */}
        <HeroGrid container direction='column' alignItems='center' justify='center'>
          <Grid item>
            <Typography variant='h1'>{t('home.title')}</Typography>
          </Grid>
          <Grid item>
            <Center disableGutters maxWidth={90}>
              {tMap('home.body', TypoWrapper)}
              <Box mt={6}>
                <RequestDemoButton />
              </Box>
            </Center>
          </Grid>
        </HeroGrid>
        <Box p={2} textAlign='center'>
          <MoreArrows />
        </Box>
      </HeroBox>

      <Box my={15}>
        <Section
          title={t('home.section1.title')}
          buttonText='getDemo'
          contained
          image={
            <OuijaAnchor />
            // <BackgroundVideo src={videoSrcPlaceholder1}>
            //   <Typography>
            //     A different video of Lidar scanning an environment, identifying objects as it moves.
            //   </Typography>
            // </BackgroundVideo>
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
          buttonText='getDemo'
          contained
          flip
          image={
            <OuijaAnchor />
            // <BackgroundVideo src={videoSrcPlaceholder2}>
            //   <Typography>A video of a simulated vehicle autonomously driving down a street.</Typography>
            // </BackgroundVideo>
          }
          tuckImage
          variant='h3'
        >
          {tMap('home.section2.body', TypoWrapper)}
        </Section>
      </Box>

      <SilhouettedContent my={15}>
        <Center disableGutters maxWidth={90}>
          <LayoutGrid xs={2} sm={4} spacing={2}>
            <IconBaidu {...brandIconProps} />
            <IconApollo {...brandIconProps} />
            <IconUnity {...brandIconProps} />
            <IconVelodyne {...brandIconProps} />
          </LayoutGrid>
        </Center>
      </SilhouettedContent>

      <Box my={15}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <SmallImage src={srcCloudPoster} />
            <SectionContent
              title={t('home.features.0.title')}
              buttonText='readMore'
              buttonProps={{ to: '/product/simulation/', title: t('home.features.0.title') }}
            >
              {tMap('home.features.0.body', TypoWrapper)}
            </SectionContent>
          </Grid>
          <Grid item xs={12} sm={4}>
            <SmallImage src={srcDigitalTwinPoster} />
            <SectionContent
              title={t('home.features.1.title')}
              buttonText='readMore'
              buttonProps={{ to: '/product/cloud/', title: t('home.features.1.title') }}
            >
              {tMap('home.features.1.body', TypoWrapper)}
            </SectionContent>
          </Grid>
          <Grid item xs={12} sm={4}>
            <SmallImage src={srcSimulationPoster} />
            <SectionContent
              title={t('home.features.2.title')}
              buttonText='readMore'
              buttonProps={{ to: '/product/digitaltwin/', title: t('home.features.2.title') }}
            >
              {tMap('home.features.2.body', TypoWrapper)}
            </SectionContent>
          </Grid>
        </Grid>
      </Box>

      <SubscribeBox />
    </Page>
  );
}
