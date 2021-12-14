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
// import Collapse from '@material-ui/core/Collapse';
// import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
// import IconButton from '@material-ui/core/IconButton';
// import List from '@material-ui/core/List';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import React from 'react';
import { RequestDemoFormMode } from 'src/@types/shared.d';
import { MapFunction } from 'src/@types/utils';
import { RequestDemoButton, UseFreeButton } from 'src/components/Button';
import { IconCheck, IconPartial, IconX } from 'src/components/Icons';
import Li, { LiText } from 'src/components/Li';
import Page, { PageSection } from 'src/components/Page';
import Section from 'src/components/Section';
import { useTranslation } from 'src/hooks/useTranslations';
import srcTools from 'src/images/diverse-set-of-scenario-generation-tools-for-scalable-testing.png';
import srcExtensible from 'src/images/open-source-and-extensible-simulation-engine.jpg';
import srcSimulationPoster from 'src/images/simulation-platform.jpg';
import videoSrcLidar from 'src/videos/lidar.mp4';
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

const Partial = ({ height = 32, width = 32, ...rest }: FeatureMark) => {
  const theme = useTheme();
  return (
    <span role='img' aria-label='partial' {...rest}>
      <IconPartial color={theme.palette.secondary.light} height={height} width={width} />
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

enum SupportLevel {
  None,
  Unsupported,
  Partial,
  Supported
}

interface SupportIconProps extends FeatureMark {
  level: SupportLevel;
}

const SupportIcon = ({ level, ...rest }: SupportIconProps) => {
  if (level === SupportLevel.Supported) {
    return <Yes {...rest} />;
  } else if (level === SupportLevel.Partial) {
    return <Partial {...rest} />;
  } else if (level === SupportLevel.Unsupported) {
    return <No {...rest} />;
  }
  return null;
};

type RowType = {
  name: string;
  free: SupportLevel;
  premium: SupportLevel;
};

interface FeatureRow extends RowType {
  subFeatures?: RowType[];
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
  buildRow('0.name', SupportLevel.None, SupportLevel.None, [
    buildRow('0.subFeatures.0', SupportLevel.Supported, SupportLevel.Supported),
    buildRow('0.subFeatures.1', SupportLevel.Supported, SupportLevel.Supported),
    buildRow('0.subFeatures.2', SupportLevel.Supported, SupportLevel.Supported),
    buildRow('0.subFeatures.3', SupportLevel.Supported, SupportLevel.Supported),
    buildRow('0.subFeatures.4', SupportLevel.Supported, SupportLevel.Supported),
    buildRow('0.subFeatures.5', SupportLevel.Supported, SupportLevel.Supported),
    buildRow('0.subFeatures.6', SupportLevel.Unsupported, SupportLevel.Supported)
  ]),
  buildRow('1.name', SupportLevel.None, SupportLevel.None, [
    buildRow('1.subFeatures.0', SupportLevel.Supported, SupportLevel.Supported),
    buildRow('1.subFeatures.1', SupportLevel.Supported, SupportLevel.Supported),
    buildRow('1.subFeatures.2', SupportLevel.Supported, SupportLevel.Supported),
    buildRow('1.subFeatures.3', SupportLevel.Unsupported, SupportLevel.Supported),
    buildRow('1.subFeatures.4', SupportLevel.Unsupported, SupportLevel.Supported),
    buildRow('1.subFeatures.5', SupportLevel.Unsupported, SupportLevel.Supported),
    buildRow('1.subFeatures.6', SupportLevel.Unsupported, SupportLevel.Supported)
  ])
];
// const rows: FeatureRow[] = [
//   buildRow('0.name', SupportLevel.Supported, SupportLevel.Supported, [
//     buildRow('0.subFeatures.0', SupportLevel.Supported, SupportLevel.Supported),
//     buildRow('0.subFeatures.1', SupportLevel.Supported, SupportLevel.Supported),
//     buildRow('0.subFeatures.2', SupportLevel.Supported, SupportLevel.Supported),
//     buildRow('0.subFeatures.3', SupportLevel.Supported, SupportLevel.Supported),
//     buildRow('0.subFeatures.4', SupportLevel.Supported, SupportLevel.Supported),
//     buildRow('0.subFeatures.5', SupportLevel.Supported, SupportLevel.Supported),
//     buildRow('0.subFeatures.6', SupportLevel.Supported, SupportLevel.Supported),
//     buildRow('0.subFeatures.7', SupportLevel.Supported, SupportLevel.Supported),
//     buildRow('0.subFeatures.8', SupportLevel.Supported, SupportLevel.Supported),
//     buildRow('0.subFeatures.9', SupportLevel.Supported, SupportLevel.Supported),
//     buildRow('0.subFeatures.10', SupportLevel.Supported, SupportLevel.Supported),
//     buildRow('0.subFeatures.11', SupportLevel.Supported, SupportLevel.Supported),
//     buildRow('0.subFeatures.12', SupportLevel.Supported, SupportLevel.Supported),
//     buildRow('0.subFeatures.13', SupportLevel.Supported, SupportLevel.Supported),
//     buildRow('0.subFeatures.14', SupportLevel.Supported, SupportLevel.Supported),
//     buildRow('0.subFeatures.15', SupportLevel.Supported, SupportLevel.Supported)
//   ]),
//   buildRow('1.name', SupportLevel.Unsupported, SupportLevel.Supported, [
//     buildRow('1.subFeatures.0', SupportLevel.Unsupported, SupportLevel.Supported),
//     buildRow('1.subFeatures.1', SupportLevel.Unsupported, SupportLevel.Supported),
//     buildRow('1.subFeatures.2', SupportLevel.Unsupported, SupportLevel.Supported),
//     buildRow('1.subFeatures.3', SupportLevel.Unsupported, SupportLevel.Supported),
//     buildRow('1.subFeatures.4', SupportLevel.Unsupported, SupportLevel.Supported),
//     buildRow('1.subFeatures.5', SupportLevel.Unsupported, SupportLevel.Supported)
//   ]),
//   buildRow('2.name', SupportLevel.Unsupported, SupportLevel.Supported, [
//     buildRow('2.subFeatures.0', SupportLevel.Unsupported, SupportLevel.Supported),
//     buildRow('2.subFeatures.1', SupportLevel.Unsupported, SupportLevel.Supported),
//     buildRow('2.subFeatures.2', SupportLevel.Unsupported, SupportLevel.Supported),
//     buildRow('2.subFeatures.3', SupportLevel.Unsupported, SupportLevel.Supported),
//     buildRow('2.subFeatures.4', SupportLevel.Unsupported, SupportLevel.Supported)
//   ]),
//   buildRow('3.name', SupportLevel.Unsupported, SupportLevel.Supported, [
//     buildRow('3.subFeatures.0', SupportLevel.Unsupported, SupportLevel.Supported),
//     buildRow('3.subFeatures.1', SupportLevel.Unsupported, SupportLevel.Supported),
//     buildRow('3.subFeatures.2', SupportLevel.Unsupported, SupportLevel.Supported),
//     buildRow('3.subFeatures.3', SupportLevel.Unsupported, SupportLevel.Supported),
//     buildRow('3.subFeatures.4', SupportLevel.Unsupported, SupportLevel.Supported),
//     buildRow('3.subFeatures.5', SupportLevel.Unsupported, SupportLevel.Supported)
//   ]),
//   buildRow('4.name', SupportLevel.Partial, SupportLevel.Partial, [
//     buildRow('4.subFeatures.0', SupportLevel.Supported, SupportLevel.Supported),
//     buildRow('4.subFeatures.1', SupportLevel.Unsupported, SupportLevel.Supported),
//     buildRow('4.subFeatures.2', SupportLevel.Unsupported, SupportLevel.Supported),
//     buildRow('4.subFeatures.3', SupportLevel.Unsupported, SupportLevel.Unsupported)
//   ]),
//   buildRow('5.name', SupportLevel.Unsupported, SupportLevel.Supported, [
//     buildRow('5.subFeatures.0', SupportLevel.Unsupported, SupportLevel.Supported),
//     buildRow('5.subFeatures.1', SupportLevel.Unsupported, SupportLevel.Supported),
//     buildRow('5.subFeatures.2', SupportLevel.Unsupported, SupportLevel.Supported),
//     buildRow('5.subFeatures.3', SupportLevel.Unsupported, SupportLevel.Supported),
//     buildRow('5.subFeatures.4', SupportLevel.Unsupported, SupportLevel.Supported),
//     buildRow('5.subFeatures.5', SupportLevel.Unsupported, SupportLevel.Supported),
//     buildRow('5.subFeatures.6', SupportLevel.Unsupported, SupportLevel.Supported)
//   ])
// ];

function Row({ row, index }: { row: FeatureRow; index: number }) {
  // const [open, setOpen] = React.useState(index === 0);
  const { t } = useTranslation();
  const firstRow = index === 0;

  return (
    <React.Fragment>
      <TableRow>
        <FeatureCell noBorder={firstRow}>
          <Typography>
            {t(row.name)}
            {/* <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
              {open ? <IconChevronUp title='collapse feature list' /> : <IconChevronDown title='expand feature list' />}
            </IconButton> */}
          </Typography>
        </FeatureCell>
        <StyledTableCell noBorder={firstRow}>
          <SupportIcon level={row.free} />
        </StyledTableCell>
        <StyledTableCell noBorder={firstRow}>
          <SupportIcon level={row.premium} />
        </StyledTableCell>
      </TableRow>
      {row.subFeatures && row.subFeatures.length ? (
        <TableRow>
          <StyledSubTableCell padding='none' colSpan={3}>
            {/* <Collapse in={open} timeout='auto' unmountOnExit> */}
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
                      <SupportIcon level={subFeature.free} height={24} width={24} />
                    </StyledSubTableCell>
                    <StyledSubTableCell>
                      <SupportIcon level={subFeature.premium} height={24} width={24} />
                    </StyledSubTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {/* </Collapse> */}
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
      <Section
        buttonText='useFree'
        contained
        src={srcSimulationPoster}
        title={t('simulation.title')}
        tuckImage
        variant='h3'
        video={videoSrcLidar}
      >
        {t('simulation.body')}
      </Section>

      <Section title={t('simulation.section1.title')} imageColumns={7} flip src={srcExtensible}>
        {t('simulation.section1.body')}
      </Section>

      <Section title={t('simulation.section2.title')} imageColumns={7} src={srcTools}>
        {t('simulation.section2.body')}
      </Section>

      <PageSection>
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

            <TableRow>
              <StyledTableCell noBorder></StyledTableCell>
              <StyledTableCell noBorder>
                <UseFreeButton buttonVariant='outlined' title={t('simulation.featuresTable.try')} />
              </StyledTableCell>
              <StyledTableCell noBorder>
                {/* <RequestDemoButton mode={RequestDemoFormMode.ContactUs} /> */}
              </StyledTableCell>
            </TableRow>
          </TableBody>
        </StyledTable>
      </PageSection>

      {/* <PageSectionFullWidth>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <CloudPreviewBox />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DigitalTwinPreviewBox />
          </Grid>
        </Grid>
      </PageSectionFullWidth> */}
    </Page>
  );
}
