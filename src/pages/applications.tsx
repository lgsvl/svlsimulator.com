import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import DocumentBox from 'src/components/DocumentBox';
import Page from 'src/components/Page';
import Section from 'src/components/Section';
import { useTranslation } from 'src/hooks/useTranslations';

const TypoWrapper = (str: string) => <Typography paragraph>{str}</Typography>;

export default function Applications() {
  const { t, tMap } = useTranslation();

  return (
    <Page title={t('applications.title')}>
      <Section title={t('applications.title')} variant='h2' buttonText='getDemo'>
        {tMap('applications.body', TypoWrapper)}
      </Section>

      <Section flip title={t('applications.section1.title')}>
        {tMap('applications.section1.body', TypoWrapper)}
      </Section>

      <Section title={t('applications.section2.title')}>{tMap('applications.section2.body', TypoWrapper)}</Section>

      <Section flip title={t('applications.section3.title')}>
        {tMap('applications.section3.body', TypoWrapper)}
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
    </Page>
  );
}
