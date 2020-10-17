import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Link from './Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Button, { ButtonProps } from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const StyledAppBar = styled(AppBar)`
  font-weight: bold;
`;

const Logo = styled(Box)`
  position: absolute;
`;

const MenuButton = styled(Button)<ButtonProps>`
  // display: flex;
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
    <StyledAppBar position='fixed' color='default'>
      <Grid component='nav' container justify='space-between'>
        <Grid item>
          <MenuButton component={Link} to='/' startIcon='(LOGO)'>
            Home
          </MenuButton>
        </Grid>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <MenuButton fullWidth onMouseEnter={handleClick}>
                Products
              </MenuButton>
              <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
              >
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
            </Grid>
            <Grid item xs={3}>
              <MenuButton fullWidth component={Link} to='/applications/'>
                Applications
              </MenuButton>
            </Grid>
            <Grid item xs={3}>
              <MenuButton fullWidth component={Link} to='/news/'>
                News
              </MenuButton>
            </Grid>
            <Grid item xs={3}>
              <MenuButton fullWidth component={Link} to='/about'>
                About
              </MenuButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <MenuButton component={Link} to='/about' endIcon='(ICON)'>
            Log in
          </MenuButton>
        </Grid>
      </Grid>
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
