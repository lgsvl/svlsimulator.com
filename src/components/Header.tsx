import { withTheme } from '@material-ui/core';
import AppBar, { AppBarProps } from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import { useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from 'react';
import { px } from 'src/utils/theme';
import styled from 'styled-components';
import Link from './Link';
import LinkButton from './LinkButton';
import { IconLGSVLSimulator, IconLogin, IconMenu, IconX } from './Icons';

const MenuButton = withTheme(styled(Button)``);

const NavGrid = withTheme(styled(Grid)`
  // height: ${({ theme }) => px(theme.spacing(10))};
  .MuiButton-textPrimary {
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`);

const StyledDrawer = withTheme(styled(({ className, ...other }: DrawerProps) => (
  <Drawer classes={{ paper: className }} {...other} />
))`
  ${({ theme }) => `
    background: ${theme.palette.background.default};
    width: auto;
    max-width: 100%;
    transition: ${theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  })};
  `}
`);

const CloseDrawerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(0, 1)};
  ${({ theme }) => theme.mixins.toolbar}
`;

const Header = React.forwardRef((props, ref) => {
  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  // const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const isHamburgerAvailable = !useMediaQuery(theme.breakpoints.up('md'));
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleDrawer = () => {
    setDrawerOpen(prevOpen => !prevOpen);
  };

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
    <AppBar position='fixed' color='default' {...props} ref={ref}>
      <Toolbar component='nav'>
        <NavGrid container alignItems='center' justify='space-between'>
          <Grid item>
            <LinkButton to='/' color='primary' startIcon={<IconLGSVLSimulator />} title='Home' />
          </Grid>
          {isHamburgerAvailable ? (
            <>
              <IconButton edge='end' color='primary' onClick={handleDrawer}>
                <IconMenu />
              </IconButton>
              <StyledDrawer
                anchor='left'
                onClose={handleDrawer}
                ModalProps={{
                  keepMounted: true // Better open performance on mobile.
                }}
                open={drawerOpen}
              >
                <CloseDrawerDiv theme={theme}>
                  <LinkButton to='/' color='primary' startIcon={<IconLGSVLSimulator />} title='Home' />
                  <IconButton edge='end' color='primary' onClick={handleDrawer}>
                    <IconX />
                  </IconButton>
                </CloseDrawerDiv>
                <List>
                  <ListItem button component={Link} to='/product/simulation/'>
                    <ListItemText primary='Simulation' />
                  </ListItem>
                  <ListItem button component={Link} to='/product/cloud/'>
                    <ListItemText primary='Cloud simulation as-a-service' />
                  </ListItem>
                  <ListItem button component={Link} to='/product/digitaltwin/'>
                    <ListItemText primary='Digital Twin creation service' />
                  </ListItem>
                  <ListItem button component={Link} to='/applications/'>
                    <ListItemText primary='Applications' />
                  </ListItem>
                  <ListItem button component={Link} to='/news/'>
                    <ListItemText primary='News' />
                  </ListItem>
                  <ListItem button component={Link} to='/about'>
                    <ListItemText primary='About' />
                  </ListItem>
                  <ListItem button component={Link} to='/about'>
                    <ListItemText primary='Log in' />
                    <ListItemIcon>
                      <IconLogin />
                    </ListItemIcon>
                  </ListItem>
                </List>
              </StyledDrawer>
            </>
          ) : (
            <>
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
                  <LinkButton fullWidth onMouseEnter={handleClick} onMouseLeave={handleClose}>
                    Products
                  </LinkButton>
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
                    <LinkButton color='primary' fullWidth to='/applications/'>
                      Applications
                    </LinkButton>
                  </Grid>
                  <Grid item xs={3} sm='auto'>
                    <LinkButton color='primary' fullWidth to='/news/'>
                      News
                    </LinkButton>
                  </Grid>
                  <Grid item xs={3} sm='auto'>
                    <LinkButton color='primary' fullWidth to='/about'>
                      About
                    </LinkButton>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <LinkButton color='primary' to='/about' endIcon={<IconLogin />}>
                  Log in
                </LinkButton>
              </Grid>
            </>
          )}
        </NavGrid>
      </Toolbar>
    </AppBar>
  );
});

export default Header;
export { Header };
