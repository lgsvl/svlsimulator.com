import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { MapFunction } from 'src/@types/utils';
import Page, { PageSection, PageSectionFullWidth } from 'src/components/Page';
import { CloudPreviewBox, SimulationPreviewBox } from 'src/components/PagePreviewBox';
import Section, { FullWidthSection } from 'src/components/Section';
import SubscribeBox from 'src/components/SubscribeBox';
import { useTranslation } from 'src/hooks/useTranslations';
import srcDigitalTwinFull from 'src/images/digital-twin-full-environment.jpg';
import srcDigitalTwinLite from 'src/images/digital-twin-lite-environment.jpg';
import srcDigitalTwinPoster from 'src/images/digital-twin.jpg';
import srcDigitalTwinVideo from 'src/videos/digital-twin.mp4';

const TypoWrapper: MapFunction<string> = (str, i) => (
  <Typography paragraph key={`paragraph${i}`}>
    {str}
  </Typography>
);

export default function DigitalTwin() {
  const { t, tMap } = useTranslation();
  return (
    <Page title={t('digitaltwin.title')}>
      <Section
        buttonText='getDemo'
        src={srcDigitalTwinPoster}
        video={srcDigitalTwinVideo}
        title={t('digitaltwin.title')}
        tuckImage
        variant='h3'
      >
        {tMap('digitaltwin.body', TypoWrapper)}
      </Section>

      <PageSection>
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
      </PageSection>

      <PageSectionFullWidth>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <CloudPreviewBox />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SimulationPreviewBox />
          </Grid>
        </Grid>
      </PageSectionFullWidth>

      <SubscribeBox />
    </Page>
  );
}
