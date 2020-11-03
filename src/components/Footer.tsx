import { Hidden, withTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText, { ListItemTextProps } from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { MapFunction } from 'src/@types/utils';
import { useTranslation } from 'src/hooks/useTranslations';
import styled from 'styled-components';
import { IconLgColor } from './Icons';
import Link, { LinkProps } from './Link';

const StyledPaperWrapper = withTheme(styled(Paper)`
  --styled-paper-wrapper: 1;
`);

const Copyright = withTheme(styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary.dark};
`);

const TypoWrapper: MapFunction<string> = (str, i) => (
  <Typography paragraph color='secondary' key={`paragraph${i}`}>
    {str}
  </Typography>
);

const FooterLink = withTheme(styled(({ to, ...rest }: LinkProps & ListItemTextProps) => (
  <ListItem disableGutters component={Link} to={to} color='textSecondary' dense>
    <ListItemText primaryTypographyProps={{ variant: 'body2' }} {...rest} />
  </ListItem>
))`
  color: ${({ theme }) => theme.palette.secondary.dark};
`);

const Footer = ({ children }: { children?: React.ReactNode }) => {
  const { t, tMap } = useTranslation();

  const forDevs = (
    <>
      <Typography variant='overline' component='h6' color='textSecondary'>
        {t('main.footer.forDevelopers')}
      </Typography>
      <List>
        <FooterLink to='https://github.com/lgsvl/simulator' primary={t('main.links.github')} />
        <FooterLink to='https://www.lgsvlsimulator.com/docs/' primary={t('main.links.documentation')} />
        <FooterLink to='/' primary={t('main.links.requestDemo')} />
      </List>
    </>
  );
  const social = (
    <>
      <Typography variant='overline' component='h6' color='textSecondary'>
        {t('main.footer.social')}
      </Typography>
      <List>
        <FooterLink to='https://twitter.com/LGSVLSimulator' primary={t('main.links.twitter')} />
        <FooterLink to='https://www.youtube.com/channel/UChrPZIYAnKEKiQjmPmBwPKA' primary={t('main.links.youtube')} />
        <FooterLink to='http://eepurl.com/go_1w9' primary={t('main.links.subscribe')} />
      </List>
    </>
  );

  return (
    <Box mt={2} p={{ xs: 3, sm: 5, md: 10 }}>
      <StyledPaperWrapper elevation={0}>
        <Box>
          <Grid container>
            <Hidden mdDown xlUp>
              <Grid item xs={1} />
            </Hidden>
            <Grid item xs={6} md={5} lg={4}>
              <Box mb={{ xs: 3, sm: 2 }}>
                <IconLgColor />
              </Box>
              {tMap('main.footer.body', TypoWrapper)}
              <Copyright variant='body2'>{t('main.footer.copyright')}</Copyright>
            </Grid>
            <Grid item xs={1} sm={2} md={1} />
            <Hidden smDown>
              <Grid item xs={6} sm={3}>
                {forDevs}
              </Grid>
              <Hidden lgDown>
                <Grid item xs={1} />
              </Hidden>
              <Grid item xs={6} sm={3}>
                {social}
              </Grid>
            </Hidden>
            <Hidden mdUp>
              <Grid item xs={4}>
                {forDevs}
                {social}
              </Grid>
            </Hidden>
          </Grid>
        </Box>
      </StyledPaperWrapper>
    </Box>
  );
};

export default Footer;
export { Footer };
