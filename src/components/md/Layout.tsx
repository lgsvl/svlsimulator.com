//
// https://www.gatsbyjs.com/docs/mdx/customizing-components/
//
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { MDXProvider, MDXProviderProps } from '@mdx-js/react';
import { PageProps } from 'gatsby';
import React from 'react';
import Breadcrumbs from 'src/components/Breadcrumbs';
import Page from 'src/components/Page';
import Subs from './Substitutions';
import { NewsIndexQuery } from '../../../graphql-types';
import { useTranslation } from 'src/hooks/useTranslations';
import moment from 'moment';

type NewsItemNode = NewsIndexQuery['allMdx']['edges'][0]['node'];
export interface LayoutProps extends PageProps {
  location: PageProps['location'];
  pageContext: PageProps['pageContext'] & {
    frontmatter?: NewsItemNode['frontmatter'];
  };
}

export default function Layout({ children, location, pageContext }: React.PropsWithChildren<LayoutProps>) {
  const { t } = useTranslation();
  const author = pageContext.frontmatter?.author || null;
  let date = pageContext.frontmatter?.date || null;
  if (date) date = new Date(date);

  return (
    <MDXProvider components={Subs}>
      <Page>
        <Grid container>
          <Grid item sm={10}>
            <Breadcrumbs location={location} pageContext={pageContext} />
          </Grid>
          {author || date ? (
            <Grid item sm={2}>
              <Box textAlign='end'>
                {author ? <Typography variant='body2'>{author}</Typography> : null}
                {date ? (
                  <Typography variant='body2'>
                    <time dateTime={date?.toString()}>{moment(date).format('LL')}</time>
                  </Typography>
                ) : null}
              </Box>
            </Grid>
          ) : null}
        </Grid>
        <Container disableGutters maxWidth='md'>
          <Paper elevation={0}>
            <Box>{children}</Box>
          </Paper>
        </Container>
      </Page>
    </MDXProvider>
  );
}
