import Typography from '@material-ui/core/Typography';
import React from 'react';
import { MapFunction } from 'src/@types/utils';
import DocumentBox from 'src/components/DocumentBox';
import Page from 'src/components/Page';
import Section from 'src/components/Section';
import SubscribeBox from 'src/components/SubscribeBox';
import { useTranslation } from 'src/hooks/useTranslations';
import srcAcademics from 'src/images/academics.jpg';
import srcCloudPoster from 'src/images/cloud-simulation.jpg';
import srcDigitalTwinPoster from 'src/images/digital-twin.jpg';
import srcFuture from 'src/images/future-mobility-solutions.jpg';
import srcRobotics from 'src/images/robotics.jpg';
import srcSimulationPoster from 'src/images/simulation-platform.jpg';

const TypoWrapper: MapFunction<string> = (str, i) => (
  <Typography paragraph key={`paragraph${i}`}>
    {str}
  </Typography>
);

export default function Applications() {
  const { t, tMap } = useTranslation();

  return (
    <Page title={t('applications.title')}>
      <Section title={t('applications.title')} variant='h2' buttonText='getDemo' src={srcFuture} tuckImage>
        {tMap('applications.body', TypoWrapper)}
      </Section>

      <Section flip title={t('applications.section1.title')} src={srcSimulationPoster}>
        {tMap('applications.section1.body', TypoWrapper)}
      </Section>

      <Section title={t('applications.section2.title')} src={srcDigitalTwinPoster}>
        {tMap('applications.section2.body', TypoWrapper)}
      </Section>

      <Section flip title={t('applications.section3.title')} src={srcCloudPoster}>
        {tMap('applications.section3.body', TypoWrapper)}
      </Section>

      <DocumentBox
        title={t('applications.files.0')}
        label={t('main.documentTypes.technical')}
        buttonText={t('main.buttons.download')}
      />

      <Section title={t('applications.section4.title')} src={srcAcademics} tuckImage>
        {tMap('applications.section4.body', TypoWrapper)}
      </Section>

      <DocumentBox
        title={t('applications.files.1')}
        label={t('main.documentTypes.technical')}
        buttonText={t('main.buttons.download')}
      />

      <Section flip title={t('applications.section5.title')} src={srcRobotics} tuckImage>
        {tMap('applications.section5.body', TypoWrapper)}
      </Section>

      <DocumentBox
        title={t('applications.files.0')}
        label={t('main.documentTypes.technical')}
        buttonText={t('main.buttons.download')}
      />

      <DocumentBox
        title={t('applications.files.1')}
        label={t('main.documentTypes.technical')}
        buttonText={t('main.buttons.download')}
      />

      <SubscribeBox />
    </Page>
  );
}
