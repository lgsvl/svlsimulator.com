import Typography from '@material-ui/core/Typography';
import React from 'react';
import Page from 'src/components/Page';
import { useTranslation } from 'src/hooks/useTranslations';

const TypoWrapper = (str: string) => <Typography>{str}</Typography>;

export default function About() {
  const { t, tMap } = useTranslation();
  return (
    <Page>
      <Typography variant='h1'>{t('about.title')}</Typography>
      <Typography variant='h2'>{t('about.mission.title')}</Typography>
      {tMap('about.mission.body', TypoWrapper)}
      <Typography variant='h2'>{t('about.vision.title')}</Typography>
      {tMap('about.vision.body', TypoWrapper)}
    </Page>
  );
}
