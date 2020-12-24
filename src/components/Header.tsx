import { withTheme } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button, { ButtonProps } from '@material-ui/core/Button';
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
import { LinkButton, LinkButtonProps, RequestDemoButton } from './Button';
import { IconLGSVLSimulator, IconLogin, IconMenu, IconX } from './Icons';
import Link from './Link';

const buttonColors = css`
  font-size: 16px;

  &.MuiButton-textPrimary,
  &.MuiButton-textSecondary {
    &:hover {
      background-color: transparent;
    }
  }
`;

const MenuButton = withTheme(styled(Button)`
  ${buttonColors}
`) as React.FC<ButtonProps>;

const StyledLinkButton = withTheme(styled(LinkButton)`
  ${buttonColors}
`) as React.FC<LinkButtonProps>;

const StyledRequestDemoButton = withTheme(styled(RequestDemoButton)`
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

interface DropdownMenuProps {
  title: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ children, title, ...rest }) => {
  const [open, setOpen] = React.useState(false);
  const preventEarlyClose = React.useRef(false); // Track the early-close availability
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleClick = (ev: React.MouseEvent<EventTarget>) => {
    if (preventEarlyClose.current) {
      ev.preventDefault();
      return;
    }
    // Toggle open
    setOpen(!open);
  };

  const handleButtonEnter = (ev: React.MouseEvent<EventTarget>) => {
    // Mouse has entered the button, enable the cooldown period. The countdown is fired from the useEffect after render.
    preventEarlyClose.current = true;
    handleMenuActivate(ev);
  };

  const handleButtonLeave = (ev: React.MouseEvent<EventTarget>) => {
    handleMenuDeactivate(ev);
  };

  const handleMenuActivate = (ev: React.MouseEvent<EventTarget>) => {
    setOpen(true);
  };

  const handleMenuDeactivate = (ev: React.MouseEvent<EventTarget>) => {
    // Don't close if within the timeout period, bail early.
    if (ev.type === 'click' && preventEarlyClose.current) return;
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

    // Start a cooldown timer to prevent (presumably unintentionally)
    // deactivating the menu just after opening it via hover.
    const timer = setTimeout(() => {
      preventEarlyClose.current = false;
    }, 500);
    return () => clearTimeout(timer);
  }, [open]);

  return (
    <>
      <MenuButton
        color='secondary'
        fullWidth
        onClick={handleClick}
        onMouseEnter={handleButtonEnter}
        onMouseLeave={handleButtonLeave}
        ref={anchorRef}
        {...rest}
      >
        {title}
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
              minWidth: '200px', // Allows really narrow menus to have better mouse-movement behavior
              // (moving the mouse from the button to the menu over empty space doesn't dismiss the menu)
              transformOrigin: placement.match('bottom') ? 'left top' : 'left bottom'
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleMenuDeactivate}>
                <MenuList
                  autoFocusItem={open}
                  id='menu-list-grow'
                  onKeyDown={handleListKeyDown}
                  onClick={handleMenuDeactivate}
                >
                  {children}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

const DrawerHeader = withTheme(styled(Box)`
  ${({ theme }) => theme.mixins.toolbar}
`);

const DesktopMenu = () => {
  const { t } = useTranslation();

  return (
    <>
      <Grid item>
        <Grid container spacing={2}>
          <Grid item xs={3} sm='auto'>
            <DropdownMenu title={t('main.header.products')} alia-label='Open Product List Menu'>
              <MenuItem component={Link} to='/product/simulation/' alia-label='Go to Simulation product page'>
                {t('simulation.navTitle')}
              </MenuItem>
              <MenuItem component={Link} to='/product/cloud/' alia-label='Go to Cloud product page'>
                {t('cloud.navTitle')}
              </MenuItem>
              <MenuItem component={Link} to='/product/digitaltwin/' alia-label='Go to Digital-twin product page'>
                {t('digitaltwin.navTitle')}
              </MenuItem>
            </DropdownMenu>
          </Grid>
          <Grid item xs={3} sm='auto'>
            <DropdownMenu title={t('main.header.useCases.label')} alia-label='Open Use cases List Menu'>
              <MenuItem component={Link} to='/use-cases/' alia-label='Go to Future Mobility Solutions use-case page'>
                {t('main.header.useCases.future')}
              </MenuItem>
              <MenuItem component={Link} to='/use-cases/#robotics' alia-label='Go to Robotics use-case page'>
                {t('main.header.useCases.robotics')}
              </MenuItem>
              <MenuItem component={Link} to='/use-cases/#academics' alia-label='Go to Academics use-case page'>
                {t('main.header.useCases.academics')}
              </MenuItem>
            </DropdownMenu>
          </Grid>
          <Grid item xs={3} sm='auto'>
            <StyledLinkButton color='secondary' fullWidth to='/docs/' alia-label='Go to developer documentation page'>
              {t('main.header.forDevelopers')}
            </StyledLinkButton>
          </Grid>
          {/* <Grid item xs={3} sm='auto'>
            <StyledLinkButton color='secondary' fullWidth to='/applications/' alia-label='Go to Applications page'>
              {t('applications.navTitle')}
            </StyledLinkButton>
          </Grid> */}
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
        {/* "Box" is a temporary spacer to keep the menu balanced in the absense of the login button. */}
        <StyledRequestDemoButton variant='text' color='secondary' fullWidth>
          {t('main.buttons.contactUs')}
        </StyledRequestDemoButton>
        {/* <Box width={180} /> */}
        {/* <StyledLinkButton
          color='primary'
          to='https://account.lgsvlsimulator.com/'
          // to='https://wise.staging.lgsvlsimulator.com/sign-in'
          endIcon={<IconLogin />}
          alia-label='Log in Button'
        >
          {t('main.header.login')}
        </StyledLinkButton> */}
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
          <ListItem button component={Link} to='/use-cases/'>
            <ListItemText primary={t('uc1')} />
          </ListItem>
          <ListItem button component={Link} to='/use-cases/'>
            <ListItemText primary={t('uc2')} />
          </ListItem>
          <ListItem button component={Link} to='/use-cases/'>
            <ListItemText primary={t('uc3')} />
          </ListItem>
          <ListItem button component={Link} to='/docs/'>
            <ListItemText primary={t('main.header.forDevelopers')} />
          </ListItem>
          <ListItem button component={Link} to='/news/'>
            <ListItemText primary={t('news.navTitle')} />
          </ListItem>
          <ListItem button component={Link} to='/about/'>
            <ListItemText primary={t('about.navTitle')} />
          </ListItem>
          <StyledRequestDemoButton variant='text' color='secondary' fullWidth>
            {t('main.buttons.contactUs')}
          </StyledRequestDemoButton>
          {/* <ListItem button component={Link} to='https://wise.staging.lgsvlsimulator.com/sign-in'> */}
          {/* <ListItem button component={Link} to='https://account.lgsvlsimulator.com/'>
            <ListItemText primary={t('main.header.login')} />
            <ListItemIcon>
              <IconLogin />
            </ListItemIcon>
          </ListItem> */}
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
