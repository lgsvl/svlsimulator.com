import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Page from 'src/components/Page';
import Section from 'src/components/Section';
import { useTranslation } from 'src/hooks/useTranslations';

const TypoWrapper = (str: string) => <Typography>{str}</Typography>;

export default function Applications() {
  const { t, tMap } = useTranslation();

  return (
    <Page>
      <Section title={t('applications.title')} variant='h2'>
        {tMap('applications.body', TypoWrapper)}
        <Button color='primary' variant='contained'>
          {t('main.buttons.getDemo')}
        </Button>
      </Section>

      <Section flip title={t('applications.section1.title')}>
        {tMap('applications.section1.body', TypoWrapper)}
      </Section>

      <Section title={t('applications.section2.title')}>{tMap('applications.section2.body', TypoWrapper)}</Section>

      <Section flip title={t('applications.section3.title')}>
        {tMap('applications.section3.body', TypoWrapper)}
      </Section>
    </Page>
  );
}
