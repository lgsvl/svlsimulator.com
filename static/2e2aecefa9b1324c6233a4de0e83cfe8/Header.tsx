import { withTheme } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import { useTranslation } from 'src/hooks/useTranslations';
import styled, { css } from 'styled-components';
import { IconLGSVLSimulator, IconLogin, IconMenu, IconX } from './Icons';
import Link from './Link';
import LinkButton from './LinkButton';

const buttonColors = css`
  &.MuiButton-textPrimary,
  &.MuiButton-textSecondary {
    &:hover {
      background-color: transparent;
    }
  }
`;

const MenuButton = withTheme(styled(Button)`
  ${buttonColors}
`);

const StyledLinkButton = withTheme(styled(LinkButton)`
  ${buttonColors}
`);

const NavGrid = withTheme(styled(Grid)``);

const StyledDrawer = withTheme(styled(({ className, ...other }: DrawerProps) => (
  <Drawer classes={{ paper: className }} {...other} />
))`
  ${({ theme }) => `
    background: ${theme.palette.background.default};
    width: auto;
    max-width: 100%;
    overflow: hidden;
    transition: ${theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })};
  `}
`);

const DrawerHeader = withTheme(styled(Box)`
  ${({ theme }) => theme.mixins.toolbar}
`);

const Header = React.forwardRef((props, ref) => {
  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  // const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const { t } = useTranslation();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
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
            <StyledLinkButton to='/' color='secondary' startIcon={<IconLGSVLSimulator />} title='Home' />
          </Grid>
          <Hidden mdUp>
            <IconButton edge='end' color='secondary' onClick={handleDrawer}>
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
              <DrawerHeader display='flex' alignItems='center' justifyContent='space-between' pl={1} pr={3}>
                <LinkButton to='/' color='primary' startIcon={<IconLGSVLSimulator />} title='Home' />
                <IconButton edge='end' color='secondary' onClick={handleDrawer}>
                  <IconX />
                </IconButton>
              </DrawerHeader>
              <List>
                <ListItem button component={Link} to='/product/simulation/'>
                  <ListItemText primary={t('main.header.simulation')} />
                </ListItem>
                <ListItem button component={Link} to='/product/cloud/'>
                  <ListItemText primary={t('main.header.cloud')} />
                </ListItem>
                <ListItem button component={Link} to='/product/digitaltwin/'>
                  <ListItemText primary={t('main.header.digitaltwin')} />
                </ListItem>
                <ListItem button component={Link} to='/applications/'>
                  <ListItemText primary={t('main.header.applications')} />
                </ListItem>
                <ListItem button component={Link} to='/news/'>
                  <ListItemText primary={t('main.header.news')} />
                </ListItem>
                <ListItem button component={Link} to='/about'>
                  <ListItemText primary={t('main.header.about')} />
                </ListItem>
                <ListItem button component={Link} to='/'>
                  <ListItemText primary={t('main.header.login')} />
                  <ListItemIcon>
                    <IconLogin />
                  </ListItemIcon>
                </ListItem>
              </List>
            </StyledDrawer>
          </Hidden>
          <Hidden smDown>
            <Grid item>
              <Grid container spacing={2}>
                <Grid item xs={3} sm='auto'>
                  <MenuButton
                    color='secondary'
                    fullWidth
                    onMouseEnter={handleToggle}
                    onMouseLeave={handleToggle}
                    ref={anchorRef}
                  >
                    {t('main.header.products')}
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
                                {t('main.header.simulation')}
                              </MenuItem>
                              <MenuItem component={Link} to='/product/cloud/' onClick={handleClose}>
                                {t('main.header.cloud')}
                              </MenuItem>
                              <MenuItem component={Link} to='/product/digitaltwin/' onClick={handleClose}>
                                {t('main.header.digitaltwin')}
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
                  <StyledLinkButton color='secondary' fullWidth to='/applications/'>
                    {t('main.header.applications')}
                  </StyledLinkButton>
                </Grid>
                <Grid item xs={3} sm='auto'>
                  <StyledLinkButton color='secondary' fullWidth to='/news/'>
                    {t('main.header.news')}
                  </StyledLinkButton>
                </Grid>
                <Grid item xs={3} sm='auto'>
                  <StyledLinkButton color='secondary' fullWidth to='/about'>
                    {t('main.header.about')}
                  </StyledLinkButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <StyledLinkButton color='primary' to='/' endIcon={<IconLogin />}>
                {t('main.header.login')}
              </StyledLinkButton>
            </Grid>
          </Hidden>
        </NavGrid>
      </Toolbar>
    </AppBar>
  );
});

export default Header;
export { Header };
