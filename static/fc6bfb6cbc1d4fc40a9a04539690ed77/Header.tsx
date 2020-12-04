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
                          {t('simulation.navTitle')}
                        </MenuItem>
                        <MenuItem
                          component={Link}
                          to='/product/cloud/'
                          onClick={handleMenuDeactivate}
                          alia-label='Go to Cloud product page'
                        >
                          {t('cloud.navTitle')}
                        </MenuItem>
                        <MenuItem
                          component={Link}
                          to='/product/digitaltwin/'
                          onClick={handleMenuDeactivate}
                          alia-label='Go to Digital-twin product page'
                        >
                          {t('digitaltwin.navTitle')}
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Grid>
          <Grid item xs={3} sm='auto'>
            <StyledLinkButton color='secondary' fullWidth to='/applications/' alia-label='Go to Applications page'>
              {t('applications.navTitle')}
            </StyledLinkButton>
          </Grid>
          <Grid item xs={3} sm='auto'>
            <StyledLinkButton color='secondary' fullWidth to='/news/' alia-label='Go to News page'>
              {t('news.navTitle')}
            </StyledLinkButton>
          </Grid>
          <Grid item xs={3} sm='auto'>
            <StyledLinkButton color='secondary' fullWidth to='/about/' alia-label='Go to About page'>
              {t('about.navTitle')}
            </StyledLinkButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <StyledLinkButton
          color='primary'
          to='https://account.lgsvlsimulator.com/'
          // to='https://wise.staging.lgsvlsimulator.com/sign-in'
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
          <LinkButton to='/' color='primary' startIcon={<IconLGSVLSimulator />} title={t('home.navTitle')} />
          <IconButton edge='end' color='secondary' onClick={handleDrawer}>
            <IconX />
          </IconButton>
        </DrawerHeader>
        <List>
          <ListItem button component={Link} to='/product/simulation/'>
            <ListItemText primary={t('simulation.navTitle')} />
          </ListItem>
          <ListItem button component={Link} to='/product/cloud/'>
            <ListItemText primary={t('cloud.navTitle')} />
          </ListItem>
          <ListItem button component={Link} to='/product/digitaltwin/'>
            <ListItemText primary={t('digitaltwin.navTitle')} />
          </ListItem>
          <ListItem button component={Link} to='/applications/'>
            <ListItemText primary={t('applications.navTitle')} />
          </ListItem>
          <ListItem button component={Link} to='/news/'>
            <ListItemText primary={t('news.navTitle')} />
          </ListItem>
          <ListItem button component={Link} to='/about/'>
            <ListItemText primary={t('about.navTitle')} />
          </ListItem>
          {/* <ListItem button component={Link} to='https://wise.staging.lgsvlsimulator.com/sign-in'> */}
          <ListItem button component={Link} to='https://account.lgsvlsimulator.com/'>
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
