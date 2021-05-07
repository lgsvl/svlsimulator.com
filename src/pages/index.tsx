import { useTheme, withTheme } from '@material-ui/core';
import Box, { BoxProps } from '@material-ui/core/Box';
import Grid, { GridProps } from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React, { useCallback, useState } from 'react';
import BackgroundImage, { BackgroundImageProps } from 'src/components/BackgroundImage';
import BackgroundVideo, { BackgroundVideoProps } from 'src/components/BackgroundVideo';
import { Button, LinkButton, ReadMoreButton, RequestDemoButton } from 'src/components/Button';
import Center from 'src/components/Center';
import EntranceAnimation from 'src/components/EntranceAnimation';
import { IconApollo, IconUnity, IconVelodyne } from 'src/components/Icons';
import LayoutGrid from 'src/components/LayoutGrid';
import MoreArrows from 'src/components/MoreArrows';
import Page, { PageSection } from 'src/components/Page';
import { SectionContent, VisualizationSection } from 'src/components/Section';
import SubscribeBox from 'src/components/SubscribeBox';
import { useTranslation } from 'src/hooks/useTranslations';
import srcCloud from 'src/images/feature/cloud-simulation.jpg';
import srcDigitalTwin from 'src/images/feature/digital-twin.jpg';
import srcSimulation from 'src/images/feature/simulation-platform.jpg';
import videoSrcHero from 'src/videos/vis-1.mp4';
import srcWiseVisLeft from 'src/images/cloud-simulation-preview-left.jpg';
import srcWiseVisRight from 'src/images/cloud-simulation-preview-right.jpg';
import videoSrcWiseVis from 'src/videos/vis-borregas.mp4';
import styled from 'styled-components';
import Link from 'src/components/Link';
import { DownloadButton } from 'src/components/Button';

const FeatureImage: React.FC<BackgroundImageProps> = props => (
  <BackgroundImage
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

const ShadowTypography = styled(Typography)`
  text-shadow: black 0px 1px 3px, rgb(0 0 0 / 70%) 0px 1px 20px;
`;

const SilhouettedContent = withTheme(styled(Box)`
  // Commented out shadow, in case there's a picture or video behind the logos in the future. -BS
  // ${({ theme }) => `
  //   filter:
  //     drop-shadow(0px 0px 2px ${theme.palette.background.default})
  //     drop-shadow(0 0px 4px ${theme.palette.background.default})
  //     drop-shadow(0 0px 20px ${theme.palette.background.default});
  // `}
`) as React.FC<BoxProps>;

const brandIconProps = { height: 40, width: '100%' };

export default function Home() {
  const { t, tMap } = useTranslation();
  const theme = useTheme();
  const isXs = !useMediaQuery(theme.breakpoints.up('sm'));
  const [downloadOpen, setDownloadOpen] = useState(false);
  const downloadClick = useCallback(() => setDownloadOpen(true), [setDownloadOpen]);
  const downloadClose = useCallback(() => setDownloadOpen(false), [setDownloadOpen]);

  return (
    <Page animate>
      <Box bgcolor='#141926'>
        <PageSection maxWidth={false}>
          <Box mb={15} height={`calc(100vh - ${theme.spacing(15) + 80}px)`} position='relative'>
            <BackgroundVideo src={videoSrcHero} position='absolute' style={{ position: 'absolute' }} zIndex='auto'>
              <Typography>
                A video of Lidar scanning an environment, with a simulated vehicle driving down a street.
              </Typography>
            </BackgroundVideo>
            <HeroGrid container direction='column' alignItems='center' justify='center'>
              <Grid item>
                <EntranceAnimation>
                  <ShadowTypography variant='h1'>{t('home.title')}</ShadowTypography>
                </EntranceAnimation>
              </Grid>
              <Grid item>
                <EntranceAnimation>
                  <Center disableGutters maxWidth={720}>
                    <ShadowTypography>{t('home.body')}</ShadowTypography>
                    <Box mt={6}>
                      <Grid container spacing={4} justify='center'>
                        <Grid item>
                          <RequestDemoButton variant='outlined' />
                        </Grid>
                        <Grid item>
                          <DownloadButton />
                        </Grid>
                        <Grid item>
                          <LinkButton
                            color='primary'
                            buttonVariant='contained'
                            to='/docs/getting-started/getting-started/'
                            target='_blank'
                          >
                            {t('main.buttons.getStarted')}
                          </LinkButton>
                        </Grid>
                      </Grid>
                    </Box>
                  </Center>
                </EntranceAnimation>
              </Grid>
            </HeroGrid>
            <Box p={2} textAlign='center' zIndex={-1} position='relative'>
              <MoreArrows />
            </Box>
          </Box>
        </PageSection>
      </Box>

      <PageSection>
        <Box my={15}>
          <VisualizationSection
            title={t('home.section1.title')}
            variant='h3'
            src={srcWiseVisRight}
            bgPosition='right'
            animate
          >
            {t('home.section1.body')}
          </VisualizationSection>
        </Box>
      </PageSection>

      <PageSection>
        <Box my={15}>
          <VisualizationSection
            title={t('home.section2.title')}
            flip
            variant='h3'
            src={srcWiseVisLeft}
            bgPosition='left'
            animate
          >
            {t('home.section2.body')}
          </VisualizationSection>
        </Box>
      </PageSection>

      {/*<SilhouettedContent my={15}>
        <Center maxWidth={720}>
          <LayoutGrid xs={2} sm={2 //Set to the amount of logos for one row} spacing={2} alignItems='center'>
            <IconApollo {...brandIconProps} color={'#1E64DD'} />
            <IconVelodyne {...brandIconProps} color={'#0038A5'} />
          </LayoutGrid>
        </Center>
      </SilhouettedContent>*/}

      <Box my={15}>
        <PageSection>
          <LayoutGrid xs={1} sm={3} spacing={3}>
            <EntranceAnimation>
              <Box flex={1}>
                <FeatureImage src={srcSimulation} />
                <SectionContent title={t('home.features.0.title')}>{t('home.features.0.body')}</SectionContent>
              </Box>
              <Box order={isXs ? null : 4} mt={1}>
                {/* DEV NOTE: Rather than using the normal readMore button that's built into SectionContent,
                 * We've specifically broken the button out into its own grid element box, so it can be
                 * assigned a custom order based on the screen size. When the screen is sm or larger,
                 * the grid is actually a 3x2 matrix, with the content on the first row and the buttons
                 * on the second row, so they all vertically line up. `4` used below just represents a
                 * number, greater than 3. When order number is the same, DOM order is used.
                 */}
                <ReadMoreButton to='/product/simulation/' />
              </Box>
            </EntranceAnimation>
            <EntranceAnimation delay={isXs ? 0 : 0.4}>
              <Box flex={1}>
                <FeatureImage src={srcCloud} />
                <SectionContent title={t('home.features.1.title')}>{t('home.features.1.body')}</SectionContent>
              </Box>
              <Box order={isXs ? null : 4} mt={1}>
                <ReadMoreButton to='/product/cloud/' />
              </Box>
            </EntranceAnimation>
            <EntranceAnimation delay={isXs ? 0 : 0.8}>
              <Box flex={1}>
                <FeatureImage src={srcDigitalTwin} />
                <SectionContent title={t('home.features.2.title')}>{t('home.features.2.body')}</SectionContent>
              </Box>
              <Box order={isXs ? null : 4} mt={1}>
                <ReadMoreButton to='/product/digitaltwin/' />
              </Box>
            </EntranceAnimation>
          </LayoutGrid>
        </PageSection>
      </Box>
      <SubscribeBox animate />
    </Page>
  );
}
