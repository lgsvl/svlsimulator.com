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
import srcCloudVideo from 'src/videos/cloud-simulation.mp4';
import srcDigitalTwinVideo from 'src/videos/digital-twin.mp4';
import srcSimulationVideo from 'src/videos/simulation-platform.mp4';

const TypoWrapper: MapFunction<string> = (str, i) => (
  <Typography paragraph key={`paragraph${i}`}>
    {str}
  </Typography>
);

export default function Applications() {
  const { t, tMap } = useTranslation();

  return (
    <Page title={t('applications.title')}>
      <Section buttonText='getDemo' src={srcFuture} title={t('applications.title')} tuckImage variant='h3'>
        {tMap('applications.body', TypoWrapper)}
      </Section>

      <Section
        flip
        title={t('applications.section1.title')}
        src={srcSimulationPoster}
        video={srcSimulationVideo}
        buttonText='readMore'
        buttonProps={{ to: '/product/simulation/', title: t('home.features.0.title') }}
      >
        {tMap('applications.section1.body', TypoWrapper)}
      </Section>

      <Section
        title={t('applications.section2.title')}
        src={srcDigitalTwinPoster}
        video={srcDigitalTwinVideo}
        buttonText='readMore'
        buttonProps={{ to: '/product/digitaltwin/', title: t('home.features.2.title') }}
      >
        {tMap('applications.section2.body', TypoWrapper)}
      </Section>

      <Section
        flip
        title={t('applications.section3.title')}
        src={srcCloudPoster}
        video={srcCloudVideo}
        buttonText='readMore'
        buttonProps={{ to: '/product/cloud/', title: t('home.features.1.title') }}
      >
        {tMap('applications.section3.body', TypoWrapper)}
      </Section>

      <DocumentBox
        title={t('applications.files.0')}
        label={t('main.documentTypes.technical')}
        buttonText={t('main.buttons.download')}
      />

      <Section contained title={t('applications.section4.title')} src={srcAcademics} tuckImage buttonText='getDemo'>
        {tMap('applications.section4.body', TypoWrapper)}
      </Section>

      <DocumentBox
        title={t('applications.files.1')}
        label={t('main.documentTypes.technical')}
        buttonText={t('main.buttons.download')}
      />

      <Section contained flip title={t('applications.section5.title')} src={srcRobotics} tuckImage buttonText='getDemo'>
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
