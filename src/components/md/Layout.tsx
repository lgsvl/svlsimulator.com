//
// https://www.gatsbyjs.com/docs/mdx/customizing-components/
//
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { MDXProvider, MDXProviderProps } from '@mdx-js/react';
import { PageProps } from 'gatsby';
import React from 'react';
import Breadcrumbs from 'src/components/Breadcrumbs';
import Page from 'src/components/Page';
import Subs from './Substitutions';

export default function Layout({
  children,
  location,
  pageContext
}: React.PropsWithChildren<MDXProviderProps & PageProps>) {
  return (
    <MDXProvider components={Subs}>
      <Page>
        <Breadcrumbs location={location} pageContext={pageContext} />
        <Container disableGutters maxWidth='md'>
          <Paper elevation={0}>
            <Box>{children}</Box>
          </Paper>
        </Container>
      </Page>
    </MDXProvider>
  );
}
