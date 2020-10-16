import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'gatsby';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const StyledAppBar = styled(AppBar)`
  font-weight: bold;
`;

const Header = ({ children }: { children?: React.ReactNode }) => {
  return (
    <StyledAppBar position='static'>
      <List component='nav'>
        <ListItem component={Link} to='/'>
          (LOGO HERE) Home
        </ListItem>
        <ListItem component={Link} to='/product/simulation/'>
          Product -- Simulation
        </ListItem>
        <ListItem component={Link} to='/product/cloud/'>
          Product -- Cloud simulation as-a-service
        </ListItem>
        <ListItem component={Link} to='/product/digitaltwin/'>
          Product -- Digital Twin creation service
        </ListItem>
        <ListItem component={Link} to='/applications/'>
          Applications
        </ListItem>
        <ListItem component={Link} to='/news/'>
          News
        </ListItem>
        <ListItem component={Link} to='/about'>
          About
        </ListItem>
      </List>
    </StyledAppBar>
  );
};

export { Header };
