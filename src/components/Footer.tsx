import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from './Link';
import { themed } from '../utils/theme';

const StyledContainer = themed(Paper)`
  --styled-container: 1;
`;

const Footer = ({ children }: { children?: React.ReactNode }) => (
  <Box mt={2}>
    <StyledContainer>
      <Box p={2}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography variant='h6'>Image</Typography>
            <Typography>Simulator description</Typography>
            <Typography>&copy; copyright</Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant='h6'>Social 2</Typography>
            <List>
              <ListItem component={Link} to='/'>
                A
              </ListItem>
              <ListItem component={Link} to='/'>
                B
              </ListItem>
              <ListItem component={Link} to='/'>
                C
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant='h6'>For Developers</Typography>
            <List>
              <ListItem component={Link} to='/'>
                A
              </ListItem>
              <ListItem component={Link} to='/'>
                B
              </ListItem>
              <ListItem component={Link} to='/'>
                C
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
    </StyledContainer>
  </Box>
);

export default Footer;
export { Footer };
