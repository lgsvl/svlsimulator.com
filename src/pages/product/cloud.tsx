import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import React from 'react';
import { MapFunction } from 'src/@types/utils';
import Li, { LiText } from 'src/components/Li';
import Page from 'src/components/Page';
import { SimulationPreviewBox, DigitalTwinPreviewBox } from 'src/components/PagePreviewBox';
import Section from 'src/components/Section';
import SubscribeBox from 'src/components/SubscribeBox';
import { useTranslation } from 'src/hooks/useTranslations';
import srcCloudPoster from 'src/images/cloud-simulation.jpg';
import srcCloudVideo from 'src/videos/cloud-simulation.mp4';
import { withTheme } from '@material-ui/core/styles';
import styled from 'styled-components';

const ListItemWrapper: MapFunction = (str, i) => (
  <Li key={`${str}${i}`}>
    <LiText>{str}</LiText>
  </Li>
);

export default function CloudSimAAS() {
  const { t, tMap } = useTranslation();
  return (
    <Page title={t('cloud.title')}>
      <Section
        buttonText='getDemo'
        flip
        src={srcCloudPoster}
        video={srcCloudVideo}
        title={t('cloud.title')}
        tuckImage
        variant='h3'
      >
        <List disablePadding>{tMap('cloud.body', ListItemWrapper)}</List>
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
