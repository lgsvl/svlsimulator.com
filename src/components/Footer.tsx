import { Hidden, withTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import styled from 'styled-components';
import Link from './Link';
import { useTranslation } from 'src/hooks/useTranslations';
import { IconLgColor } from './Icons';

const StyledPaperWrapper = withTheme(styled(Paper)`
  --styled-paper-wrapper: 1;
`);

const Copyright = withTheme(styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary.dark};
`);

const TypoWrapper = (str: string) => (
  <Typography paragraph color='secondary'>
    {str}
  </Typography>
);

const Footer = ({ children }: { children?: React.ReactNode }) => {
  const { t, tMap } = useTranslation();

  const forDevs = (
    <>
      <Typography variant='body1' component='h6'>
        For Developers
      </Typography>
      <List>
        <ListItem disableGutters component={Link} to='/'>
          Github
        </ListItem>
        <ListItem disableGutters component={Link} to='/'>
          Documentation
        </ListItem>
        <ListItem disableGutters component={Link} to='/'>
          Request demo
        </ListItem>
      </List>
    </>
  );
  const social = (
    <>
      <Typography variant='body1' component='h6'>
        Social
      </Typography>
      <List>
        <ListItem disableGutters component={Link} to='/'>
          Twitter
        </ListItem>
        <ListItem disableGutters component={Link} to='/'>
          YouTube
        </ListItem>
        <ListItem disableGutters component={Link} to='/'>
          Subscribe
        </ListItem>
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
              {tMap('footer.body', TypoWrapper)}
              <Copyright variant='body2'>{t('footer.copyright')}</Copyright>
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
