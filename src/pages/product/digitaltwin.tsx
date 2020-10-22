import Typography from '@material-ui/core/Typography';
import React from 'react';
import Page from 'src/components/Page';
import Section from 'src/components/Section';
import { useTranslation } from 'src/hooks/useTranslations';

const TypoWrapper = (str: string) => <Typography>{str}</Typography>;

export default function DigitalTwin() {
  const { t, tMap } = useTranslation();
  return (
    <Page>
      <Section title={t('digitaltwin.title')} variant='h2' buttonText='getDemo'>
        {tMap('digitaltwin.body', TypoWrapper)}
      </Section>

      <Section title={t('digitaltwin.section1.title')} flip>
        {tMap('digitaltwin.section1.body', TypoWrapper)}
      </Section>

      <Section title={t('digitaltwin.section2.title')}>{tMap('digitaltwin.section2.body', TypoWrapper)}</Section>
    </Page>
  );
}
