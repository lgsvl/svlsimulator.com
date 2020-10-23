import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableCellProps,
  TableHead,
  TableRow,
  useTheme,
  withTheme
} from '@material-ui/core';
import styled from 'styled-components';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import React from 'react';
import { ButtonGetDemo } from 'src/components/Button';
import { IconCheck, IconChevronDown, IconChevronUp, IconX } from 'src/components/Icons';
import Page from 'src/components/Page';
import Section from 'src/components/Section';
import { useTranslation } from 'src/hooks/useTranslations';

const TypoWrapper = (str: string) => <Typography>{str}</Typography>;

const Caption = (props: TypographyProps) => <Typography variant='body2' display='block' {...props} />;

const StyledTableCell = withTheme(styled(({ noBorder, ...rest }: TableCellProps & { noBorder: boolean }) => (
  <TableCell {...rest} />
))`
  border-bottom-style: none;

  ${({ noBorder }) =>
    noBorder
      ? ''
      : 'border-top-style: solid;'}//   border-top-style: solid;

  // .MuiTableRow-root:nth-child(n + 2) & {
  //   border-top-style: solid;
  // }
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
    buildRow('0.subFeatures.5', true, true)
  ]),
  buildRow('1.name', false, true),
  buildRow('2.name', false, true),
  buildRow('3.name', false, true),
  buildRow('4.name', false, true),
  buildRow('5.name', false, true)
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
              {open ? <IconChevronUp /> : <IconChevronDown />}
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
    <Page>
      <Section title={t('about.title')} variant='h2' buttonText='getDemo'>
        {tMap('about.mission.body', TypoWrapper)}
      </Section>

      <Section title={t('simulation.section1.title')} flip>
        {tMap('simulation.section1.body', TypoWrapper)}
      </Section>

      <Section title={t('simulation.section2.title')}>{tMap('simulation.section2.body', TypoWrapper)}</Section>

      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell noBorder></StyledTableCell>
            <StyledTableCell noBorder>
              <Typography variant='h6'>{t('simulation.featuresTable.products.0.title')}</Typography>
              <Caption>{t('simulation.featuresTable.products.0.body')}</Caption>
            </StyledTableCell>
            <StyledTableCell noBorder>
              <Typography variant='h6'>{t('simulation.featuresTable.products.1.title')}</Typography>
              <Caption>{t('simulation.featuresTable.products.1.body')}</Caption>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <Row key={row.name} row={row} index={index} />
          ))}
        </TableBody>
      </Table>

      <ButtonGetDemo />
    </Page>
  );
}
