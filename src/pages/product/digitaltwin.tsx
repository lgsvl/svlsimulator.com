import Typography from '@material-ui/core/Typography';
import React from 'react';
import { MapFunction } from 'src/@types/utils';
import Page from 'src/components/Page';
import Section from 'src/components/Section';
import SubscribeBox from 'src/components/SubscribeBox';
import { useTranslation } from 'src/hooks/useTranslations';
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
        contained
        src={srcTwinImg1}
        title={t('digitaltwin.title')}
        tuckImage
        variant='h3'
        video={srcDigitalTwinVideo}
      >
        {t('digitaltwin.body')}
      </Section>

      <Section imageColumns={7} flip src={srcTwinImg2}>
        {t('digitaltwin.section1.body')}
      </Section>

      <Section imageColumns={7} src={srcTwinImg3}>
        {t('digitaltwin.section2.body')}
      </Section>

      <Section imageColumns={7} flip src={srcTwinImg4}>
        {t('digitaltwin.section3.body')}
      </Section>

      <SubscribeBox />
    </Page>
  );
}
