import { withTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText, { ListItemTextProps } from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { RequestDemoFormMode } from 'src/@types/shared.d';
// import { MapFunction } from 'src/@types/utils';
import { useAppState } from 'src/context/AppState';
import { useTranslation } from 'src/hooks/useTranslations';
import styled from 'styled-components';
import { IconLgColor } from './Icons';
import Link, { LinkProps } from './Link';
import { PageSection } from './Page';

const Copyright = withTheme(styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary.dark};
  a {
    color: inherit;
  }
`);

const StyledLink = withTheme(styled(Link)`
  display: block;
  color: inherit;
  cursor: pointer;
`);

// const TypoWrapper: MapFunction<string> = (str, i) => (
//   <Typography paragraph color='secondary' key={`paragraph${i}`}>
//     {str}
//   </Typography>
// );

const FooterLink = withTheme(styled(({ children, primary, to, ...rest }: LinkProps & ListItemTextProps) => (
  <ListItem disableGutters dense>
    <ListItemText primaryTypographyProps={{ variant: 'body2' }} {...rest}>
      <StyledLink to={to} color='textSecondary'>
        {primary || children}
      </StyledLink>
    </ListItemText>
  </ListItem>
))`
  color: ${({ theme }) => theme.palette.secondary.dark};
`);

const Footer: React.FC = () => {
  const { setAppState } = useAppState();
  const { t, tMap } = useTranslation();

  const handleRequestDemoClick = React.useCallback(() => {
    setAppState(RequestDemoFormMode.ContactUs, 'requestDemoForm.mode');
    setAppState(true, 'requestDemoForm.open');
  }, [setAppState]);

  const branding = (
    <>
      <Box mt={{ xs: 3, sm: 2 }}>
        <IconLgColor />
      </Box>
      <Copyright variant='body2'>
        {t('main.footer.copyright')}
        &nbsp;•&nbsp;
        <Link to='/terms'>{t('main.footer.terms')}</Link>
        &nbsp;&amp;&nbsp;
        <Link to='https://www.lg.com/us/privacy'>{t('main.footer.policy')}</Link>
      </Copyright>
    </>
  );
  const forDevs = (
    <>
      <Typography variant='overline' component='h6' color='textSecondary'>
        {t('main.footer.forDevelopers')}
      </Typography>
      <List>
        <FooterLink primary={t('main.links.github')} to='https://github.com/lgsvl/simulator' />
        <FooterLink primary={t('main.links.documentation')} to='/docs/' target='_blank' />
        <FooterLink primary={t('main.footer.content')} to='https://wise.svlsimulator.com' />
      </List>
    </>
  );
  const about = (
    <>
      <Typography variant='overline' component='h6' color='textSecondary'>
        {t('main.footer.about')}
      </Typography>
      <List>
        <FooterLink primary={t('main.footer.aboutUs')} to='/about/' />
        <FooterLink primary={t('news.navTitle')} to='/news/' />
        <FooterLink primary={t('main.footer.contactUs')} onClick={handleRequestDemoClick} />
      </List>
    </>
  );
  const social = (
    <>
      <Typography variant='overline' component='h6' color='textSecondary'>
        {t('main.footer.social')}
      </Typography>
      <List>
        <FooterLink primary={t('main.links.twitter')} to='https://twitter.com/LGSVLSimulator' />
        <FooterLink primary={t('main.links.youtube')} to='https://www.youtube.com/channel/UChrPZIYAnKEKiQjmPmBwPKA' />
      </List>
    </>
  );

  return (
    <PageSection>
      <Box mt={2} p={{ xs: 3, sm: 5, md: 10 }}>
        <Grid container>
          {/* Logo moves to the bottom for "xs" (extra small) screens */}
          <Hidden smDown>
            <Grid item md={6}>
              {branding}
            </Grid>
          </Hidden>
          <Hidden xsDown mdUp>
            <Grid item xs={1} />
          </Hidden>
          <Grid item xs={12} sm={4} md={3}>
            {forDevs}
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            {about}
          </Grid>
          <Grid item xs={12} sm={3} md={1}>
            {social}
          </Grid>
          <Hidden mdUp>
            <Grid item xs={12}>
              {branding}
            </Grid>
          </Hidden>
        </Grid>
        {/* <Grid container>
          <Hidden mdDown xlUp>
            <Grid item xs={1} />
          </Hidden>
          <Grid item xs={6} md={5} lg={4}>
            <Box mb={{ xs: 3, sm: 2 }}>
              <IconLgColor />
            </Box>
            {tMap('main.footer.body', TypoWrapper)}
            <Copyright variant='body2'>
              {t('main.footer.copyright')}
              &nbsp;•&nbsp;
              <Link to='/terms'>{t('main.footer.terms')}</Link>
              &nbsp;&amp;&nbsp;
              <Link to='https://www.lg.com/us/privacy'>{t('main.footer.policy')}</Link>
            </Copyright>
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
        </Grid> */}
      </Box>
    </PageSection>
  );
};

export default Footer;
export { Footer };
