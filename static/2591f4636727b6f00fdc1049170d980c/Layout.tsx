//
// https://www.gatsbyjs.com/docs/mdx/customizing-components/
//
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import Page from 'src/components/Page';
import Subs from './Substitutions';

export default function Layout({ children }: React.PropsWithChildren<typeof MDXProvider>) {
  return (
    <MDXProvider components={Subs}>
      <Page>
        <Container disableGutters maxWidth='md'>
          <Paper elevation={0}>
            <Box>{children}</Box>
          </Paper>
        </Container>
      </Page>
    </MDXProvider>
  );
}
