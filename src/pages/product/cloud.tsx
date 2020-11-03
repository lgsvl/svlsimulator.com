import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import React from 'react';
import { MapFunction } from 'src/@types/utils';
import Li from 'src/components/Li';
import Page from 'src/components/Page';
import { SimulationPreviewBox, DigitalTwinPreviewBox } from 'src/components/PagePreviewBox';
import Section from 'src/components/Section';
import SubscribeBox from 'src/components/SubscribeBox';
import { useTranslation } from 'src/hooks/useTranslations';
import srcCloudPoster from 'src/images/cloud-simulation.jpg';

const ListItemWrapper: MapFunction = (str, i) => (
  <ListItem key={`${str}${i}`}>
    <Li>{str}</Li>
  </ListItem>
);

export default function CloudSimAAS() {
  const { t, tMap } = useTranslation();
  return (
    <Page title={t('cloud.title')}>
      <Section title={t('cloud.title')} variant='h2' buttonText='getDemo' src={srcCloudPoster} tuckImage flip>
        <List>{tMap('cloud.body', ListItemWrapper)}</List>
      </Section>

      <Grid container>
        <Grid item xs={12} sm={6}>
          <SimulationPreviewBox />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DigitalTwinPreviewBox />
        </Grid>
      </Grid>

      <SubscribeBox />
    </Page>
  );
}
