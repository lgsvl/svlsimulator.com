import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import PageContextProvider from '../context/Page';
import Header from './Header';
import Footer from './Footer';
import { GridBox } from './GridBox';

import { createGlobalStyle } from 'styled-components';
import { Theme, useTheme } from '@material-ui/core/styles';
import Grid, { GridProps } from '@material-ui/core/Grid';
import Container, { ContainerProps } from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const GlobalStyle = createGlobalStyle`
${({ theme }: { theme: Theme }) => `
body {
  margin: 0;
  background-color: ${theme.palette.background.default};
  color: ${theme.palette.text.primary};
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
// ::-webkit-scrollbar {
//   width: 5px;
// }

/* Handle */
// ::-webkit-scrollbar-thumb {
//   border-radius: 10px;
//   background: rgba(138, 136, 136, 0.8);
// }
`}`;

const AppContainer = styled(Container)<{ component: string }>``;

const AppGrid = styled(Grid)`
  min-height: 100vh;
`;

const StyledPaper = styled(Paper)``;

const App = ({ children }: { children?: React.ReactNode }) => {
  const theme = useTheme();
  return (
    <React.Fragment>
      <GlobalStyle theme={theme} />
      <AppContainer component='main' maxWidth='sm'>
        <AppGrid container direction='column'>
          <Grid item>
            <Header>Testing</Header>
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

const Page = ({ children }: { children?: React.ReactNode }) => {
  return (
    <PageContextProvider>
      <App>{children}</App>
    </PageContextProvider>
  );
};

export default Page;
export { Page };
