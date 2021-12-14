import React from 'react';
import { MapFunction } from 'src/@types/utils';
import Li, { LiText } from 'src/components/Li';
import Page from 'src/components/Page';
import Section from 'src/components/Section';
import { useTranslation } from 'src/hooks/useTranslations';
import srcCloudImg1 from 'src/images/cloud1.png';
import srcCloudImg2 from 'src/images/cloud2.png';
import srcCloudImg3 from 'src/images/cloud3.png';
import srcCloudImg4 from 'src/images/cloud4.png';
import videoSrcWiseVis from 'src/videos/vis-borregas.mp4';

const ListItemWrapper: MapFunction = (str, i) => (
  <Li key={`${str}${i}`}>
    <LiText>{str}</LiText>
  </Li>
);

export default function CloudSimAAS() {
  const { t } = useTranslation();
  return (
    <Page title={t('cloud.title')}>
      <Section
        buttonText='useFree'
        contained
        src={srcCloudImg1}
        title={t('cloud.title')}
        tuckImage
        variant='h3'
        video={videoSrcWiseVis}
      >
        {t('cloud.body')}
      </Section>

      <Section title={t('cloud.section1.title')} flip src={srcCloudImg2}>
        {t('cloud.section1.body')}
      </Section>

      <Section title={t('cloud.section2.title')} src={srcCloudImg3}>
        {t('cloud.section2.body')}
      </Section>

      <Section title={t('cloud.section3.title')} flip src={srcCloudImg4}>
        {t('cloud.section3.body')}
      </Section>
    </Page>
  );
}
