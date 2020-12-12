import Container, { ContainerProps } from '@material-ui/core/Container';
import Grid, { GridProps } from '@material-ui/core/Grid';
import { Theme, useTheme, withTheme } from '@material-ui/core/styles';
import React from 'react';
import { useAppState } from 'src/context/AppState';
import PageContextProvider from 'src/context/Page';
import { px } from 'src/utils/theme';
import styled, { createGlobalStyle } from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import RequestDemoForm from './RequestDemoForm';
import SEO from './SEO';
import UserConsent from './UserConsent';

const GlobalStyle = createGlobalStyle`
${({ theme }: { theme: Theme }) => `
body {
  margin: 0;
  background-color: ${theme.palette.background.default};
  color: ${theme.palette.text.primary};
  overflow-y: scroll; // So the page doesn't shift when switching between scrollable and non-scrollable pages.
}

a {
  &,
  &:link,
  &:visited {
    text-decoration: none;
  }

  &:hover,
  &:active {
    text-decoration: underline;
  }
}

/* Scroll bar frame */
::-webkit-scrollbar,
*::-webkit-scrollbar {
  height: 7px;
  width: 7px;
  background-color: transparent;
  ${theme.breakpoints.down('sm')} {
    height: 15px;
    width: 15px;
  }
}
::-webkit-scrollbar-track,
*::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar-track-piece,
*::-webkit-scrollbar-track-piece {
  background-color: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb,
*::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background-color: ${theme.palette.secondary.dark};
  border: 1px solid transparent;
  background-clip: padding-box;
}

::-webkit-scrollbar-corner,
*::-webkit-scrollbar-corner {
  background-color: transparent;
}

::-webkit-resizer,
*::-webkit-resizer {
  border-radius: 3px;
  background-color: ${theme.palette.primary.main};
  border: 1px solid transparent;
  background-clip: padding-box;
}
`}`;

const AppGrid = withTheme(styled(Grid)`
  min-height: 100vh;
`) as React.FC<GridProps>;

const HeaderGrid = withTheme(styled(Grid)`
  // Make the layout have the same height rules as the toolbar, so it can be fixed
  // (outside the layout) and the content shifts down to accomodate its variable height.
  ${({ theme }) => theme.mixins.toolbar};
  margin-bottom: ${({ theme }) => px(theme.spacing(2))};
`) as React.FC<GridProps>;

const FooterGrid = withTheme(styled(Grid)`
  margin-top: auto;
`) as React.FC<GridProps<'footer', { component: string }>>;

const App: React.FC = ({ children }) => {
  const theme = useTheme();
  const { appState, setAppState } = useAppState();

  const handleFormClose = React.useCallback(() => {
    setAppState(false, 'requestDemoForm.open');
  }, [setAppState]);

  return (
    <React.Fragment>
      <GlobalStyle theme={theme} />
      <AppGrid container direction='column'>
        <HeaderGrid item>
          <Header />
        </HeaderGrid>
        <Grid item>{children}</Grid>
        <FooterGrid item component='footer'>
          <Footer />
        </FooterGrid>
        <RequestDemoForm open={appState.requestDemoForm.open} onClose={handleFormClose} />
      </AppGrid>
    </React.Fragment>
  );
};

const Page: React.FC<{ title?: string }> = ({ children, title }) => (
  <PageContextProvider>
    <SEO title={title} />
    <UserConsent />
    <App>{children}</App>
  </PageContextProvider>
);

/**
 * All (nearly) content lives inside this container.
 *
 * Use this for basically all content, *except for* content that spans the entire width of the page.
 */
const PageSection: React.FC<ContainerProps & { children?: ContainerProps['children']; component?: string }> = props => (
  <Container maxWidth='lg' {...props} />
);

/**
 * Use this for any content that must stretch to the full width of the window.
 */
const PageSectionFullWidth: React.FC<ContainerProps> = props => (
  <PageSection disableGutters maxWidth={false} {...props} />
);

export type { ContainerProps as PageSectionProps };
export default Page;
export { Page, PageSection, PageSectionFullWidth };
