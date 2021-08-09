import { withTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid, { GridProps } from '@material-ui/core/Grid';
// import Hidden from '@material-ui/core/Hidden';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import React from 'react';
import Konami from 'react-konami-code';
import { RequestDemoFormMode } from 'src/@types/shared.d';
import { MapFunction } from 'src/@types/utils';
import { RequestDemoButton } from 'src/components/Button';
import Center from 'src/components/Center';
import Image from 'src/components/Image';
import Page, { PageSection } from 'src/components/Page';
import SubscribeBox from 'src/components/SubscribeBox';
import { useTranslation } from 'src/hooks/useTranslations';
import srcSVLLogo from 'src/images/about.jpg';
import { px } from 'src/utils/theme';
import styled from 'styled-components';

const HeroGrid = withTheme(styled(Grid)`
  height: 100%;
  position: relative;
`) as React.FC<GridProps>;

const StyledTypography = withTheme(styled(Typography)`
  display: inline-block;

  &.MuiTypography-gutterBottom {
    margin-bottom: ${({ theme }) => px(theme.spacing(2))};
  }
`) as React.FC<TypographyProps>;

const HeadingWrapper: MapFunction<string> = (str, i) => (
  <Typography variant='h4' key={`heading${i}`}>
    {str}
  </Typography>
);

const TypoWrapper: MapFunction<string> = (str, i) => (
  <Typography paragraph key={`paragraph${i}`}>
    {str}
  </Typography>
);

const easterEgg = () => {
  import('emojisplosion').then(({ emojisplosions }) => {
    const { cancel } = emojisplosions({
      emojiCount: 35,
      physics: {
        gravity: 0.25,
        initialVelocities: {
          rotation: {
            max: 45,
            min: -45
          },
          x: {
            max: 17,
            min: -17
          },
          y: {
            max: 14,
            min: -21.7
          }
        }
      }
    });
    setTimeout(cancel, 15000);
  });
};

export default function About() {
  const { t, tMap } = useTranslation();
  return (
    <Page title={t('about.title')}>
      <PageSection>
        <Konami action={easterEgg} code={[38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]} />
        <Box height={{ xs: '50vh', md: '70vh' }} maxHeight={720} position='relative'>
          <Image
            src={srcSVLLogo}
            // fit='contain'
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

        <Grid container alignItems='center' direction='column'>
          <Grid item xs={12} sm={10} md={8}>
            <Box mb={7}>
              <Center>
                <StyledTypography variant='overline' gutterBottom>
                  {t('about.mission.title')}
                </StyledTypography>
                {tMap('about.mission.body', HeadingWrapper)}
              </Center>
            </Box>
          </Grid>

          <Grid item xs={12} sm={10} md={8}>
            <Box mb={5}>{tMap('about.details', TypoWrapper)}</Box>
          </Grid>

          <Grid item xs={12} sm={10} md={8}>
            <Box mb={2}>
              <RequestDemoButton mode={RequestDemoFormMode.ContactUs} variant='outlined' color='secondary' />
            </Box>
          </Grid>
        </Grid>

        {/* <Grid container>
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
        </Grid> */}
      </PageSection>

      <SubscribeBox />
    </Page>
  );
}
