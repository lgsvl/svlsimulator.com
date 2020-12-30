import Typography from '@material-ui/core/Typography';
import React from 'react';
import styled from 'styled-components';
import { MapFunction } from 'src/@types/utils';
import DocumentBox from 'src/components/DocumentBox';
import Box, { BoxProps } from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { withTheme } from '@material-ui/core/styles';
import Image from 'src/components/Image';
import Page, { PageSection } from 'src/components/Page';
import Section from 'src/components/Section';
import SubscribeBox from 'src/components/SubscribeBox';
import { useTranslation } from 'src/hooks/useTranslations';
import srcAcademics from 'src/images/academics.jpg';
import srcCloudPoster from 'src/images/cloud-simulation.jpg';
import srcDigitalTwinPoster from 'src/images/digital-twin.jpg';
import srcUseCases from 'src/images/use-cases.png';
import srcFutureMobility from 'src/images/future-mobility.png';
import srcRobotics from 'src/images/robotics.jpg';
import srcSimulationPoster from 'src/images/simulation-platform.jpg';
import srcCloudVideo from 'src/videos/cloud-simulation.mp4';
import srcDigitalTwinVideo from 'src/videos/digital-twin.mp4';
import srcSimulationVideo from 'src/videos/simulation-platform.mp4';

const OverlayBox = withTheme(styled(Box)`
  text-shadow: 0px 1px 3px black, 0px 1px 20px rgba(0, 0, 0, 0.7);
`) as React.FC<BoxProps>;

const TypoWrapper: MapFunction<string> = (str, i) => (
  <Typography paragraph key={`paragraph${i}`}>
    {str}
  </Typography>
);

export default function UseCases() {
  const { t, tMap } = useTranslation();

  return (
    <Page title={t('usecases.navTitle')}>
      {/* <Container component='section' maxWidth='lg'>
        <OverlayBox
          position='relative'
          p={6}
          mb={9}
          height={300}
          display='flex'
          alignItems='center'
          borderRadius='borderRadius'
          overflow='hidden'
        >
          <Image position='absolute' top={0} left={0} zIndex={-1} src={srcUseCases} />
          <Typography variant='h3' align='center'>
            {t('usecases.title')}
          </Typography>
        </OverlayBox>
      </Container> */}
      <Section tuckImage title={t('usecases.title')} src={srcUseCases} variant='h3'>
        {''}
      </Section>

      <Section flip title={t('usecases.section1.title')} src={srcFutureMobility} video={srcSimulationVideo}>
        {tMap('usecases.section1.body', TypoWrapper)}
      </Section>

      <Section title={t('usecases.section2.title')} src={srcAcademics}>
        {tMap('usecases.section2.body', TypoWrapper)}
      </Section>

      <Section flip title={t('usecases.section3.title')} src={srcRobotics}>
        {tMap('usecases.section3.body', TypoWrapper)}
      </Section>

      <PageSection>
        <DocumentBox
          title={t('usecases.files.0')}
          label={t('main.documentTypes.technical')}
          buttonText={t('main.buttons.download')}
          to='https://arxiv.org/pdf/2005.03778.pdf'
        />

        <DocumentBox
          title={t('usecases.files.1')}
          label={t('main.documentTypes.technical')}
          buttonText={t('main.buttons.download')}
          to='https://arxiv.org/pdf/2003.07739.pdf'
        />
      </PageSection>

      <SubscribeBox />
    </Page>
  );
}
