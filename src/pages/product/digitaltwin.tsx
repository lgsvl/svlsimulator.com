import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { MapFunction } from 'src/@types/utils';
import Page from 'src/components/Page';
import Section, { FullWidthSection } from 'src/components/Section';
import SubscribeBox from 'src/components/SubscribeBox';
import { useTranslation } from 'src/hooks/useTranslations';
import srcDigitalTwinFull from 'src/images/digital-twin-full-environment.jpg';
import srcDigitalTwinLite from 'src/images/digital-twin-lite-environment.jpg';
import srcDigitalTwinPoster from 'src/images/digital-twin.jpg';

const TypoWrapper: MapFunction<string> = (str, i) => (
  <Typography paragraph key={`paragraph${i}`}>
    {str}
  </Typography>
);

export default function DigitalTwin() {
  const { t, tMap } = useTranslation();
  return (
    <Page title={t('digitaltwin.title')}>
      <Section title={t('digitaltwin.title')} variant='h2' buttonText='getDemo' src={srcDigitalTwinPoster} tuckImage>
        {tMap('digitaltwin.body', TypoWrapper)}
      </Section>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FullWidthSection title={t('digitaltwin.section1.title')} src={srcDigitalTwinFull}>
            {tMap('digitaltwin.section1.body', TypoWrapper)}
          </FullWidthSection>
        </Grid>
        <Grid item xs={12} md={6}>
          <FullWidthSection title={t('digitaltwin.section2.title')} src={srcDigitalTwinLite}>
            {tMap('digitaltwin.section2.body', TypoWrapper)}
          </FullWidthSection>
        </Grid>
      </Grid>
      <SubscribeBox />
    </Page>
  );
}
