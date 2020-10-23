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

const StyledContainer = withTheme(styled(Paper)`
  --styled-container: 1;
`);

const Image = withTheme(styled(Box)`
  height: 40px;
  width: 94px;
  background-image: linear-gradient(-205deg, white, #9c27b0 30%, black);
  border-radius: 20px;
`);

const TypoWrapper = (str: string) => <Typography>{str}</Typography>;

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
    <Box mt={2}>
      <StyledContainer elevation={0}>
        <Box>
          <Grid container>
            <Hidden mdDown xlUp>
              <Grid item xs={1} />
            </Hidden>
            <Grid item xs={6} sm={5} lg={4}>
              <Image />
              {tMap('footer.body', TypoWrapper)}
              <Typography variant='caption'> {t('footer.copyright')}</Typography>
            </Grid>
            <Grid item xs={1} />
            <Hidden xsDown>
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
            <Hidden smUp>
              <Grid item xs={5}>
                {forDevs}
                {social}
              </Grid>
            </Hidden>
          </Grid>
        </Box>
      </StyledContainer>
    </Box>
  );
};

export default Footer;
export { Footer };
