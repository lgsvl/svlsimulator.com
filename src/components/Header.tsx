import { withTheme } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import React from 'react';
import styled from 'styled-components';
import Link from './Link';

// const StyledAppBar = withTheme(styled(AppBar)`
//   font-weight: bold;
// `);

const Logo = withTheme(styled(Box)`
  position: absolute;
`);

const MenuButton = withTheme(styled(Button)``);

const Header = ({ children, forwardRef }: { children?: React.ReactNode; forwardRef: React.Ref<{}> }) => {
  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  // const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false && anchorRef.current) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <AppBar position='fixed' color='default' ref={forwardRef}>
      <Grid component='nav' container justify='space-between'>
        <Grid item>
          <MenuButton component={Link} to='/' startIcon='(LOGO)'>
            Home
          </MenuButton>
        </Grid>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item xs={3} sm='auto'>
              <MenuButton fullWidth onMouseEnter={handleToggle} onMouseLeave={handleToggle} ref={anchorRef}>
                Products
              </MenuButton>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                onMouseEnter={handleToggle}
                onMouseLeave={handleToggle}
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === 'bottom' ? 'left top' : 'left bottom' }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList autoFocusItem={open} id='menu-list-grow' onKeyDown={handleListKeyDown}>
                          <MenuItem component={Link} to='/product/simulation/' onClick={handleClose}>
                            Simulation
                          </MenuItem>
                          <MenuItem component={Link} to='/product/cloud/' onClick={handleClose}>
                            Cloud simulation as-a-service
                          </MenuItem>
                          <MenuItem component={Link} to='/product/digitaltwin/' onClick={handleClose}>
                            Digital Twin creation service
                          </MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
              {/*
              <MenuButton fullWidth onMouseEnter={handleClick} onMouseLeave={handleClose}>
                Products
              </MenuButton>
              <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
                // onMouseEnter={handleClick}
                // onMouseLeave={handleClose}
              >
                <MenuItem component={Link} to='/product/simulation/'>
                  Simulation
                </MenuItem>
                <MenuItem component={Link} to='/product/cloud/'>
                  Cloud simulation as-a-service
                </MenuItem>
                <MenuItem component={Link} to='/product/digitaltwin/'>
                  Digital Twin creation service
                </MenuItem>
              </Menu> */}
            </Grid>
            <Grid item xs={3} sm='auto'>
              <MenuButton fullWidth component={Link} to='/applications/'>
                Applications
              </MenuButton>
            </Grid>
            <Grid item xs={3} sm='auto'>
              <MenuButton fullWidth component={Link} to='/news/'>
                News
              </MenuButton>
            </Grid>
            <Grid item xs={3} sm='auto'>
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
    </AppBar>
  );
};

export default Header;
export { Header };
