import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Hidden, withTheme } from '@material-ui/core';
import React from 'react';
import Page from 'src/components/Page';
import { useTranslation } from 'src/hooks/useTranslations';
import { px } from 'src/utils/theme';
import styled from 'styled-components';
import { ButtonGetDemo } from 'src/components/Button';

const Center = withTheme(styled(Container)`
  text-align: center;
  max-width: ${({ theme }) => px(theme.spacing(100))};
`);

const HeroGrid = withTheme(styled(Grid)`
  height: 100%;
`);

const TypoWrapper = (str: string) => <Typography paragraph>{str}</Typography>;

export default function About() {
  const { t, tMap } = useTranslation();
  return (
    <Page title={t('about.title')}>
      <Box height='70vh'>
        <HeroGrid container alignItems='center' justify='center'>
          <Center>
            <Typography variant='h6'>{t('about.body')}</Typography>
          </Center>
        </HeroGrid>
      </Box>
      <Grid container>
        <Grid item xs={12} sm={5}>
          <Box mb={7}>
            <Typography variant='h6' gutterBottom>
              {t('about.mission.title')}
            </Typography>
            {tMap('about.mission.body', TypoWrapper)}
          </Box>
          <Box mb={7}>
            <Typography variant='h6' gutterBottom>
              {t('about.vision.title')}
            </Typography>
            {tMap('about.vision.body', TypoWrapper)}
          </Box>
          <Box mb={7}>
            <ButtonGetDemo />
          </Box>
        </Grid>
        <Hidden only='xs'>
          <Grid item sm={1} />
        </Hidden>
        <Grid item xs={12} sm={6}>
          <Box mb={7}>{tMap('about.details', TypoWrapper)}</Box>
        </Grid>
      </Grid>
    </Page>
  );
}
