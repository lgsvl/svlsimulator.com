import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Theme, useTheme, withTheme } from '@material-ui/core/styles';
import React from 'react';
import PageContextProvider from 'src/context/Page';
import useMeasurable from 'src/hooks/useMeasurable';
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

/* Let's get this party started */
::-webkit-scrollbar {
  height: 5px;
  width: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(138, 136, 136, 0.8);
}
`}`;

const AppContainer = withTheme(styled(Container)``);

const AppGrid = withTheme(styled(Grid)`
  min-height: 100vh;
`);

const StyledPaper = withTheme(styled(Paper)``);

const App = ({ children }: { children?: React.ReactNode }) => {
  const theme = useTheme();
  const { ref, measurement } = useMeasurable();

  return (
    <React.Fragment>
      <GlobalStyle theme={theme} />
      <AppContainer component='main' maxWidth='lg'>
        <AppGrid container direction='column'>
          <Grid item style={{ height: px((measurement?.height || 0) + theme.spacing(2)) }}>
            <Header forwardRef={ref}>Testing</Header>
          </Grid>
          <Grid item>
            <StyledPaper elevation={3}>
              <Box p={2}>{children}</Box>
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

const Page = ({ children }: { children?: React.ReactNode }) => (
  <PageContextProvider>
    <SEO title='' />
    <App>{children}</App>
  </PageContextProvider>
);

export default Page;
export { Page };
