import { Table, TableBody, TableCell, TableHead, TableRow, withTheme } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Page from 'src/components/Page';
import Section from 'src/components/Section';
import { useTranslation } from 'src/hooks/useTranslations';
import styled from 'styled-components';

const TypoWrapper = (str: string) => <Typography>{str}</Typography>;

const Caption = withTheme(styled(Typography)`
  display: block;
`);

const Yes: React.FC = ({ children, ...rest }) => (
  <span role='img' aria-label='yes' {...rest}>
    ✅{children}
  </span>
);

const No: React.FC = ({ children, ...rest }) => (
  <span role='img' aria-label='no' {...rest}>
    🚫{children}
  </span>
);

export default function Simulation() {
  const { t, tMap } = useTranslation();
  return (
    <Page>
      <Section title={t('about.title')} variant='h2'>
        {tMap('about.mission.body', TypoWrapper)}
        <Button color='primary' variant='contained'>
          {t('main.buttons.getDemo')}
        </Button>
      </Section>

      <Section title={t('simulation.section1.title')} flip>
        {tMap('simulation.section1.body', TypoWrapper)}
      </Section>

      <Section title={t('simulation.section2.title')}>{tMap('simulation.section2.body', TypoWrapper)}</Section>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>
              {t('simulation.featuresTable.products.0.title')}
              <Caption variant='caption'>{t('simulation.featuresTable.products.0.body')}</Caption>
            </TableCell>
            <TableCell>
              {t('simulation.featuresTable.products.1.title')}
              <Caption variant='caption'>{t('simulation.featuresTable.products.1.body')}</Caption>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{t('simulation.featuresTable.features.0')}</TableCell>
            <TableCell>
              <Yes />
            </TableCell>
            <TableCell>
              <Yes />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{t('simulation.featuresTable.features.1')}</TableCell>
            <TableCell>
              <No />
            </TableCell>
            <TableCell>
              <Yes />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{t('simulation.featuresTable.features.2')}</TableCell>
            <TableCell>
              <No />
            </TableCell>
            <TableCell>
              <Yes />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{t('simulation.featuresTable.features.3')}</TableCell>
            <TableCell>
              <No />
            </TableCell>
            <TableCell>
              <Yes />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{t('simulation.featuresTable.features.4')}</TableCell>
            <TableCell>
              <No />
            </TableCell>
            <TableCell>
              <Yes />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{t('simulation.featuresTable.features.5')}</TableCell>
            <TableCell>
              <No />
            </TableCell>
            <TableCell>
              <Yes />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Button color='primary' variant='contained'>
        {t('main.buttons.getDemo')}
      </Button>
    </Page>
  );
}
