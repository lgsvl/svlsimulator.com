import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import React from 'react';
import { ButtonGetDemo } from 'src/components/Button';
import Page from 'src/components/Page';
import Section from 'src/components/Section';
import { useTranslation } from 'src/hooks/useTranslations';

const TypoWrapper = (str: string) => <Typography>{str}</Typography>;

const Caption = (props: TypographyProps) => <Typography variant='caption' display='block' {...props} />;

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
            <TableCell></TableCell>
            <TableCell>
              {t('simulation.featuresTable.products.0.title')}
              <Caption>{t('simulation.featuresTable.products.0.body')}</Caption>
            </TableCell>
            <TableCell>
              {t('simulation.featuresTable.products.1.title')}
              <Caption>{t('simulation.featuresTable.products.1.body')}</Caption>
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

      <ButtonGetDemo />
    </Page>
  );
}
