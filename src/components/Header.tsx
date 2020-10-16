import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'gatsby';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const StyledAppBar = styled(AppBar)`
  font-weight: bold;
`;

const Header = ({ children }: { children?: React.ReactNode }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledAppBar position='static'>
      <List component='nav'>
        <ListItem component={Link} to='/'>
          (LOGO HERE) Home
        </ListItem>

        <ListItem onClick={handleClick}>Products</ListItem>

        <Menu id='simple-menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
          {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
          <MenuItem component={Link} to='/product/simulation/'>
            Product -- Simulation
          </MenuItem>
          <MenuItem component={Link} to='/product/cloud/'>
            Product -- Cloud simulation as-a-service
          </MenuItem>
          <MenuItem component={Link} to='/product/digitaltwin/'>
            Product -- Digital Twin creation service
          </MenuItem>
        </Menu>

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
      {/* <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
    <Tab label="Item One" />
    <Tab label="Item Two" />
    <Tab label="Item Three" />
  </Tabs> */}
    </StyledAppBar>
  );
};

export default Header;
export { Header };
