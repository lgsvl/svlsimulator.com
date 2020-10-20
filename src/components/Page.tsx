import React from 'react';
import Paper from '@material-ui/core/Paper';
import PageContextProvider from '../context/Page';
import Header from './Header';
import Footer from './Footer';
import { GridBox } from './GridBox';
import SEO from './SEO';
import { themed, px } from '../utils/theme';
import useMeasurable from '../hooks/useMeasurable';

import { createGlobalStyle } from 'styled-components';
import { Theme, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
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

const AppContainer = themed(Container)``;

const AppGrid = themed(Grid)`
  min-height: 100vh;
`;

const StyledPaper = themed(Paper)``;

const App = ({ children }: { children?: React.ReactNode }) => {
  const theme = useTheme();
  const { ref, measurement } = useMeasurable();

  return (
    <React.Fragment>
      <GlobalStyle theme={theme} />
      <AppContainer component='main' maxWidth='md'>
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

const Page = ({ children }: { children?: React.ReactNode }) => {
  return (
    <PageContextProvider>
      <SEO title='' />
      <App>{children}</App>
    </PageContextProvider>
  );
};

export default Page;
export { Page };
