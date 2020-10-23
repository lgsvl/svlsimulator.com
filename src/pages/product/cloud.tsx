import Typography from '@material-ui/core/Typography';
import React from 'react';
import Page from 'src/components/Page';
import Section from 'src/components/Section';
import { useTranslation } from 'src/hooks/useTranslations';

const TypoWrapper = (str: string) => <Typography>{str}</Typography>;

export default function CloudSimAAS() {
  const { t, tMap } = useTranslation();
  return (
    <Page title={t('cloud.title')}>
      <Section title={t('cloud.title')} variant='h2' buttonText='getDemo'>
        {tMap('cloud.body', TypoWrapper)}
      </Section>
    </Page>
  );
}
