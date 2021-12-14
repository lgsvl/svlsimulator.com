import Typography from '@material-ui/core/Typography';
import React from 'react';
import { MapFunction } from 'src/@types/utils';
import DocumentBox from 'src/components/DocumentBox';
import Page, { PageSection } from 'src/components/Page';
import Section from 'src/components/Section';
import { useTranslation } from 'src/hooks/useTranslations';
import srcUseCases from 'src/images/use-cases.png';
import srcFiretruck from 'src/images/firetruck.jpg';
import srcLidar from 'src/images/lidar.png';
import srcObjectDetection from 'src/images/object-detection.png';

const TypoWrapper: MapFunction<string> = (str, i) => (
  <Typography paragraph key={`paragraph${i}`}>
    {str}
  </Typography>
);

export default function UseCases() {
  const { t, tMap } = useTranslation();

  return (
    <Page title={t('usecases.navTitle')}>
      <Section tuckImage contained title={t('usecases.title')} src={srcUseCases} variant='h3'>
        {t('usecases.body')}
      </Section>

      <Section flip title={t('usecases.section1.title')} src={srcLidar}>
        {tMap('usecases.section1.body', TypoWrapper)}
      </Section>

      <Section title={t('usecases.section2.title')} src={srcObjectDetection}>
        {tMap('usecases.section2.body', TypoWrapper)}
      </Section>

      <Section flip title={t('usecases.section3.title')} src={srcFiretruck}>
        {tMap('usecases.section3.body', TypoWrapper)}
      </Section>

      <PageSection>
        <DocumentBox
          title={t('usecases.files.0')}
          label={t('main.documentTypes.technical')}
          buttonText={t('main.buttons.download.title')}
          to='https://arxiv.org/pdf/2005.03778.pdf'
        />

        <DocumentBox
          title={t('usecases.files.1')}
          label={t('main.documentTypes.technical')}
          buttonText={t('main.buttons.download.title')}
          to='https://arxiv.org/pdf/2003.07739.pdf'
        />
      </PageSection>
    </Page>
  );
}
