import {
  Table,
  TableBody,
  TableCell,
  TableCellProps,
  TableHead,
  TableRow,
  useTheme,
  withTheme
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import React from 'react';
import { MapFunction } from 'src/@types/utils';
import { RequestDemoButton } from 'src/components/Button';
import Center from 'src/components/Center';
import { IconCheck, IconChevronDown, IconChevronUp, IconX } from 'src/components/Icons';
import Li, { LiText } from 'src/components/Li';
import Page from 'src/components/Page';
import { CloudPreviewBox, DigitalTwinPreviewBox } from 'src/components/PagePreviewBox';
import Section from 'src/components/Section';
import SubscribeBox from 'src/components/SubscribeBox';
import { useTranslation } from 'src/hooks/useTranslations';
import srcTools from 'src/images/diverse-set-of-scenario-generation-tools-for-scalable-testing.jpg';
import srcExtensible from 'src/images/open-source-and-extensible-simulation-engine.jpg';
import srcSimulationPoster from 'src/images/simulation-platform.jpg';
import styled from 'styled-components';

const ListItemWrapper: MapFunction = (str, i) => (
  <Li key={`${str}${i}`}>
    <LiText>{str}</LiText>
  </Li>
);

const Caption = (props: TypographyProps) => <Typography variant='body2' display='block' {...props} />;

const StyledTable = withTheme(styled(Table)`
  border-collapse: separate;
`);

const StyledTableCell = withTheme(styled(({ noBorder, ...rest }: TableCellProps & { noBorder: boolean }) => (
  <TableCell {...rest} />
))`
  border-bottom-style: none;
  ${({ noBorder }) => (noBorder ? '' : 'border-top-style: solid;')}
`);
const StyledSubTableCell = withTheme(styled(TableCell)`
  border-bottom-style: none;
`);
const FeatureCell = withTheme(styled((props: TableCellProps) => (
  <StyledTableCell component='th' scope='row' {...props} />
))`
  width: 50%;
`);
const SubFeatureCell = withTheme(styled(FeatureCell)`
  border-top-style: none;
`);

interface FeatureMark {
  height?: React.SVGAttributes<SVGElement>['height'];
  width?: React.SVGAttributes<SVGElement>['width'];
}

const Yes = ({ height = 32, width = 32, ...rest }: FeatureMark) => {
  const theme = useTheme();
  return (
    <span role='img' aria-label='yes' {...rest}>
      <IconCheck color={theme.palette.success.light} height={height} width={width} />
    </span>
  );
};

const No = ({ height = 32, width = 32, ...rest }: FeatureMark) => {
  const theme = useTheme();
  return (
    <span role='img' aria-label='no' {...rest}>
      <IconX color={theme.palette.error.light} height={height} width={width} />
    </span>
  );
};

type Row = {
  name: string;
  free: boolean;
  premium: boolean;
};

interface FeatureRow extends Row {
  subFeatures?: Row[];
}

interface BuildRow {
  (
    arg0: FeatureRow['name'],
    arg1: FeatureRow['free'],
    arg2: FeatureRow['premium'],
    arg3?: FeatureRow['subFeatures']
  ): FeatureRow;
}

const buildRow: BuildRow = function (name, free, premium, subFeatures): FeatureRow {
  return {
    name: 'simulation.featuresTable.features.' + name,
    free,
    premium,
    subFeatures
  };
};

const rows: FeatureRow[] = [
  buildRow('0.name', true, true, [
    buildRow('0.subFeatures.0', true, true),
    buildRow('0.subFeatures.1', true, true),
    buildRow('0.subFeatures.2', true, true),
    buildRow('0.subFeatures.3', true, true),
    buildRow('0.subFeatures.4', true, true),
    buildRow('0.subFeatures.5', true, true),
    buildRow('0.subFeatures.6', true, true),
    buildRow('0.subFeatures.7', true, true),
    buildRow('0.subFeatures.8', true, true),
    buildRow('0.subFeatures.9', true, true),
    buildRow('0.subFeatures.10', true, true),
    buildRow('0.subFeatures.11', true, true),
    buildRow('0.subFeatures.12', true, true),
    buildRow('0.subFeatures.13', true, true),
    buildRow('0.subFeatures.14', true, true),
    buildRow('0.subFeatures.15', true, true)
  ]),
  buildRow('1.name', false, true, [
    buildRow('1.subFeatures.0', false, true),
    buildRow('1.subFeatures.1', false, true),
    buildRow('1.subFeatures.2', false, true),
    buildRow('1.subFeatures.3', false, true),
    buildRow('1.subFeatures.4', false, true),
    buildRow('1.subFeatures.5', false, true)
  ]),
  buildRow('2.name', false, true, [
    buildRow('2.subFeatures.0', false, true),
    buildRow('2.subFeatures.1', false, true),
    buildRow('2.subFeatures.2', false, true),
    buildRow('2.subFeatures.3', false, true),
    buildRow('2.subFeatures.4', false, true)
  ]),
  buildRow('3.name', false, true, [
    buildRow('3.subFeatures.0', false, true),
    buildRow('3.subFeatures.1', false, true),
    buildRow('3.subFeatures.2', false, true),
    buildRow('3.subFeatures.3', false, true),
    buildRow('3.subFeatures.4', false, true),
    buildRow('3.subFeatures.5', false, true)
  ]),
  buildRow('4.name', false, true, [
    buildRow('4.subFeatures.0', false, true),
    buildRow('4.subFeatures.1', false, true),
    buildRow('4.subFeatures.2', false, true),
    buildRow('4.subFeatures.3', false, true)
  ]),
  buildRow('5.name', false, true, [
    buildRow('5.subFeatures.0', false, true),
    buildRow('5.subFeatures.1', false, true),
    buildRow('5.subFeatures.2', false, true),
    buildRow('5.subFeatures.3', false, true),
    buildRow('5.subFeatures.4', false, true),
    buildRow('5.subFeatures.5', false, true),
    buildRow('5.subFeatures.6', false, true)
  ])
];

function Row({ row, index }: { row: FeatureRow; index: number }) {
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();
  const firstRow = index === 0;

  return (
    <React.Fragment>
      <TableRow>
        <FeatureCell noBorder={firstRow}>
          <Typography>
            {t(row.name)}
            <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
              {open ? <IconChevronUp title='collapse feature list' /> : <IconChevronDown title='expand feature list' />}
            </IconButton>
          </Typography>
        </FeatureCell>
        <StyledTableCell noBorder={firstRow}>{row.free ? <Yes /> : <No />}</StyledTableCell>
        <StyledTableCell noBorder={firstRow}>{row.premium ? <Yes /> : <No />}</StyledTableCell>
      </TableRow>
      {row.subFeatures && row.subFeatures.length ? (
        <TableRow>
          <StyledSubTableCell padding='none' colSpan={3}>
            <Collapse in={open} timeout='auto' unmountOnExit>
              <Table size='small' aria-label='sub-features'>
                <TableBody>
                  {row.subFeatures.map(subFeature => (
                    <TableRow key={subFeature.name}>
                      <SubFeatureCell>
                        <Box ml={2}>
                          <Typography variant='body2'>{t(subFeature.name)}</Typography>
                        </Box>
                      </SubFeatureCell>
                      <StyledSubTableCell>
                        {subFeature.free ? <Yes height={24} width={24} /> : <No height={24} width={24} />}
                      </StyledSubTableCell>
                      <StyledSubTableCell>
                        {subFeature.premium ? <Yes height={24} width={24} /> : <No height={24} width={24} />}
                      </StyledSubTableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Collapse>
          </StyledSubTableCell>
        </TableRow>
      ) : null}
    </React.Fragment>
  );
}

export default function Simulation() {
  const { t, tMap } = useTranslation();
  return (
    <Page title={t('simulation.title')}>
      <Section buttonText='getDemo' src={srcSimulationPoster} title={t('simulation.title')} tuckImage variant='h3'>
        <List disablePadding>{tMap('simulation.body', ListItemWrapper)}</List>
      </Section>

      <Section title={t('simulation.section1.title')} flip src={srcExtensible}>
        <List disablePadding>{tMap('simulation.section1.body', ListItemWrapper)}</List>
      </Section>

      <Section title={t('simulation.section2.title')} src={srcTools}>
        <List disablePadding>{tMap('simulation.section2.body', ListItemWrapper)}</List>
      </Section>

      <StyledTable>
        <TableHead>
          <TableRow>
            <StyledTableCell noBorder></StyledTableCell>
            <StyledTableCell noBorder>
              <Typography variant='h4'>{t('simulation.featuresTable.products.0.title')}</Typography>
              <Hidden smDown>
                <Caption>{t('simulation.featuresTable.products.0.body')}</Caption>
              </Hidden>
            </StyledTableCell>
            <StyledTableCell noBorder>
              <Typography variant='h4'>{t('simulation.featuresTable.products.1.title')}</Typography>
              <Hidden smDown>
                <Caption>{t('simulation.featuresTable.products.1.body')}</Caption>
              </Hidden>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <Row key={row.name} row={row} index={index} />
          ))}
        </TableBody>
      </StyledTable>

      <Center>
        <RequestDemoButton />
      </Center>

      <Grid container>
        <Grid item xs={12} sm={6}>
          <CloudPreviewBox />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DigitalTwinPreviewBox />
        </Grid>
      </Grid>

      <SubscribeBox />
    </Page>
  );
}
