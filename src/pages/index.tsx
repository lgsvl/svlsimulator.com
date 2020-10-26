import { withTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import MoreArrows from 'src/components/MoreArrows';
import Page from 'src/components/Page';
import { SectionContent } from 'src/components/Section';
import { useTranslation } from 'src/hooks/useTranslations';
import styled from 'styled-components';
import { px } from 'src/utils/theme';
import { ButtonGetDemo } from 'src/components/Button';
import { IconApollo, IconBaidu, IconUnity, IconVelodyne } from 'src/components/Icons';
import LayoutGrid from 'src/components/LayoutGrid';

const Center = withTheme(styled(Container)`
  text-align: center;
  max-width: ${({ theme }) => px(theme.spacing(90))};
`);

const Image = withTheme(styled(Box)`
  height: 100%;
  width: 100%;
  background-image: linear-gradient(-205deg, #e83d95, #862155 30%, black);
  border-radius: 8px;
`);

const roundTo = (num: number, toPlaces = 0) => Math.round(num * Math.pow(10, toPlaces)) / Math.pow(10, toPlaces);

const twoColumns = roundTo(2 / 12, 4);
// Must double this, since it's being applied inside a box that's half the normal width.
const doubleTwoColumns = twoColumns * 2;

const TuckingImage = withTheme(styled(Image)`
  min-height: 300px;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    width: ${(1 + doubleTwoColumns) * 100}%;
  }
`);

const ReverseTuckingImage = withTheme(styled(TuckingImage)`
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-inline-start: ${roundTo(doubleTwoColumns * -100, 4)}%;
  }
`);

const SmallImage = withTheme(styled(Image)`
  height: 456px;

  ${({ theme }) => `
    ${theme.breakpoints.down('sm')} {
      height: 300px;
    }
    ${theme.breakpoints.down('xs')} {
      height: 200px;
    }
  `}
`);

const HeroBox = withTheme(styled(Box)`
  background-image: linear-gradient(-205deg, #e83d95, #862155 30%, black);
`);

const HeroGrid = withTheme(styled(Grid)`
  height: 100%;
`);

const TypoWrapper = (str: string) => <Typography>{str}</Typography>;

const brandIconProps = { color: '#6D7B97', height: 40, width: '100%' };

export default function Home() {
  const { t, tMap } = useTranslation();
  return (
    <Page>
      <HeroBox mb={15} height='70vh'>
        <HeroGrid container direction='column' alignItems='center' justify='center'>
          <Grid item>
            <Typography variant='h1'>{t('home.title')}</Typography>
          </Grid>
          <Grid item>
            <Center disableGutters>
              {tMap('home.body', TypoWrapper)}
              <Box mt={6}>
                <ButtonGetDemo />
              </Box>
            </Center>
          </Grid>
        </HeroGrid>
        <Box p={2} textAlign='center'>
          <MoreArrows />
        </Box>
      </HeroBox>

      <Box my={15}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <TuckingImage />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SectionContent title={t('home.section1.title')} buttonText='getDemo'>
              {tMap('home.section1.body', TypoWrapper)}
            </SectionContent>
          </Grid>
        </Grid>
      </Box>

      <Box my={15}>
        <Grid container direction='row-reverse'>
          <Grid item xs={12} sm={6}>
            <ReverseTuckingImage />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SectionContent title={t('home.section2.title')} buttonText='getDemo'>
              {tMap('home.section2.body', TypoWrapper)}
            </SectionContent>
          </Grid>
        </Grid>
      </Box>

      <Box my={15}>
        <Center disableGutters>
          <LayoutGrid xs={2} sm={4} spacing={2}>
            <IconBaidu {...brandIconProps} />
            <IconApollo {...brandIconProps} />
            <IconUnity {...brandIconProps} />
            <IconVelodyne {...brandIconProps} />
          </LayoutGrid>
        </Center>
      </Box>

      <Box my={15}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <SmallImage />
            <SectionContent title={t('home.features.0.title')} buttonText='Read More'>
              {tMap('home.features.0.body', TypoWrapper)}
            </SectionContent>
          </Grid>
          <Grid item xs={12} sm={4}>
            <SmallImage />
            <SectionContent title={t('home.features.1.title')} buttonText='Read More'>
              {tMap('home.features.1.body', TypoWrapper)}
            </SectionContent>
          </Grid>
          <Grid item xs={12} sm={4}>
            <SmallImage />
            <SectionContent title={t('home.features.2.title')} buttonText='Read More'>
              {tMap('home.features.2.body', TypoWrapper)}
            </SectionContent>
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
}
