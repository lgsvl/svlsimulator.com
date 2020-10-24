import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Theme, useTheme, withTheme } from '@material-ui/core/styles';
import React from 'react';
import PageContextProvider from 'src/context/Page';
import { px } from 'src/utils/theme';
import styled, { createGlobalStyle } from 'styled-components';
import Footer from './Footer';
import { GridBox } from './GridBox';
import Header from './Header';
import SEO from './SEO';

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
::-webkit-scrollbar {
  height: 7px;
  width: 7px;
  background-color: transparent;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar-track-piece {
  background-color: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background-color: ${theme.palette.secondary.dark};
  border: 1px solid transparent;
  background-clip: padding-box;
}

::-webkit-scrollbar-corner {
  background-color: transparent;
}

::-webkit-resizer {
  border-radius: 3px;
  background-color: ${theme.palette.primary.main};
  border: 1px solid transparent;
  background-clip: padding-box;
}
`}`;

const AppContainer = withTheme(styled(Container)``);

const AppGrid = withTheme(styled(Grid)`
  min-height: 100vh;
`);

const HeaderGrid = withTheme(styled(Grid)`
  // Make the layout have the same height rules as the toolbar, so it can be fixed
  // (outside the layout) and the content shifts down to accomodate its variable height.
  ${({ theme }) => theme.mixins.toolbar};
  margin-bottom: ${({ theme }) => px(theme.spacing(2))};
`);

const StyledPaper = withTheme(styled(Paper)``);

const App = ({ children }: { children?: React.ReactNode }) => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <GlobalStyle theme={theme} />
      <AppContainer component='main' maxWidth='lg'>
        <AppGrid container direction='column'>
          <HeaderGrid item>
            <Header />
          </HeaderGrid>
          <Grid item>
            <StyledPaper elevation={0}>
              <Box>{children}</Box>
            </StyledPaper>
          </Grid>
          <GridBox item component='footer' mt='auto'>
            <Footer />
          </GridBox>
        </AppGrid>
      </AppContainer>
    </React.Fragment>
  );
};

const Page = ({ children, title }: { children?: React.ReactNode; title?: string }) => (
  <PageContextProvider>
    <SEO title={title} />
    <App>{children}</App>
  </PageContextProvider>
);

export default Page;
export { Page };
