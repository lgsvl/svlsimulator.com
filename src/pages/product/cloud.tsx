import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import React from 'react';
import Li from 'src/components/Li';
import Page from 'src/components/Page';
import Section from 'src/components/Section';
import SubscribeBox from 'src/components/SubscribeBox';
import { useTranslation } from 'src/hooks/useTranslations';

const ListItemWrapper = (str: string) => (
  <ListItem>
    <Li>{str}</Li>
  </ListItem>
);

export default function CloudSimAAS() {
  const { t, tMap } = useTranslation();
  return (
    <Page title={t('cloud.title')}>
      <Section title={t('cloud.title')} variant='h2' buttonText='getDemo'>
        <List>{tMap('cloud.body', ListItemWrapper)}</List>
      </Section>

      <SubscribeBox />
    </Page>
  );
}
