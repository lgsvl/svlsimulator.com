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
import srcTwinImg1 from 'src/images/digital-twin.jpg';
import srcTwinImg2 from 'src/images/digitaltwin2.png';
import srcTwinImg3 from 'src/images/digitaltwin3.png';
import srcTwinImg4 from 'src/images/digitaltwin4.png';
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
        contained
        src={srcTwinImg1}
        title={t('digitaltwin.title')}
        tuckImage
        variant='h3'
        video={srcDigitalTwinVideo}
      >
        {t('digitaltwin.body')}
      </Section>

      <Section flip src={srcTwinImg2}>
        {t('digitaltwin.section1.body')}
      </Section>

      <Section src={srcTwinImg3}>{t('digitaltwin.section2.body')}</Section>

      <Section flip src={srcTwinImg4}>
        {t('digitaltwin.section3.body')}
      </Section>

      <SubscribeBox />
    </Page>
  );
}
