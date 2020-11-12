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
import { LinkButton } from './Button';
import { IconLGSVLSimulator, IconLogin, IconMenu, IconX } from './Icons';
import Link from './Link';

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

const DesktopMenu = () => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleMenuActivate = () => {
    setOpen(true);
  };

  const handleMenuDeactivate = (ev: React.MouseEvent<EventTarget>) => {
    // DEV NOTE: We _may_ not need this, as it is normally present to keep from
    // sending the close signal when the cursor leaves the activator, but our
    // menu directly touches and instantly reopens the menu, so we may not need
    // this. Its presence prevents the menu from closing if hoving the Products
    // button and moving the cursor over to the adjcent button, which is undesirable.
    //
    // if (anchorRef.current && anchorRef.current.contains(ev.target as HTMLElement)) {
    //   return;
    // }

    setOpen(false);
  };

  const handleListKeyDown = (ev: React.KeyboardEvent) => {
    if (ev.key === 'Tab') {
      ev.preventDefault();
      setOpen(false);
    }
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false && anchorRef.current) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Grid item>
        <Grid container spacing={2}>
          <Grid item xs={3} sm='auto'>
            <MenuButton
              color='secondary'
              fullWidth
              onMouseEnter={handleMenuActivate}
              onMouseLeave={handleMenuDeactivate}
              ref={anchorRef}
              alia-label='Open Product List Menu'
            >
              {t('main.header.products')}
            </MenuButton>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
              // keepMounted
              onMouseEnter={handleMenuActivate}
              onMouseLeave={handleMenuDeactivate}
              placement='bottom-start'
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    marginTop: '30px',
                    transformOrigin: placement.match('bottom') ? 'left top' : 'left bottom'
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleMenuDeactivate}>
                      <MenuList autoFocusItem={open} id='menu-list-grow' onKeyDown={handleListKeyDown}>
                        <MenuItem
                          component={Link}
                          to='/product/simulation/'
                          onClick={handleMenuDeactivate}
                          alia-label='Go to Simulation product page'
                        >
                          {t('main.header.simulation')}
                        </MenuItem>
                        <MenuItem
                          component={Link}
                          to='/product/cloud/'
                          onClick={handleMenuDeactivate}
                          alia-label='Go to Cloud product page'
                        >
                          {t('main.header.cloud')}
                        </MenuItem>
                        <MenuItem
                          component={Link}
                          to='/product/digitaltwin/'
                          onClick={handleMenuDeactivate}
                          alia-label='Go to Digital-twin product page'
                        >
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
            <StyledLinkButton color='secondary' fullWidth to='/applications/' alia-label='Go to Applications page'>
              {t('main.header.applications')}
            </StyledLinkButton>
          </Grid>
          <Grid item xs={3} sm='auto'>
            <StyledLinkButton color='secondary' fullWidth to='/news/' alia-label='Go to News page'>
              {t('main.header.news')}
            </StyledLinkButton>
          </Grid>
          <Grid item xs={3} sm='auto'>
            <StyledLinkButton color='secondary' fullWidth to='/about/' alia-label='Go to About page'>
              {t('main.header.about')}
            </StyledLinkButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <StyledLinkButton
          color='primary'
          to='https://wise.staging.lgsvlsimulator.com/sign-in'
          endIcon={<IconLogin />}
          alia-label='Log in Button'
        >
          {t('main.header.login')}
        </StyledLinkButton>
      </Grid>
    </>
  );
};

const MobileMenu = () => {
  const { t } = useTranslation();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const handleDrawer = () => {
    setDrawerOpen(prevOpen => !prevOpen);
  };

  return (
    <>
      <Grid item>
        <IconButton edge='end' color='secondary' onClick={handleDrawer} alia-label='Go to the main homepage'>
          <IconMenu />
        </IconButton>
      </Grid>
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
          <ListItem button component={Link} to='/about/'>
            <ListItemText primary={t('main.header.about')} />
          </ListItem>
          <ListItem button component={Link} to='https://wise.staging.lgsvlsimulator.com/sign-in'>
            <ListItemText primary={t('main.header.login')} />
            <ListItemIcon>
              <IconLogin />
            </ListItemIcon>
          </ListItem>
        </List>
      </StyledDrawer>
    </>
  );
};

const Header = React.forwardRef((props, ref) => (
  <AppBar position='fixed' color='default' {...props} elevation={0} ref={ref}>
    <Toolbar component='nav'>
      <NavGrid container alignItems='center' justify='space-between'>
        <Grid item>
          <StyledLinkButton to='/' color='secondary' startIcon={<IconLGSVLSimulator />} title='Home' />
        </Grid>
        <Hidden smDown>
          <DesktopMenu />
        </Hidden>
        <Hidden mdUp>
          <MobileMenu />
        </Hidden>
      </NavGrid>
    </Toolbar>
  </AppBar>
));

export default Header;
export { Header };
