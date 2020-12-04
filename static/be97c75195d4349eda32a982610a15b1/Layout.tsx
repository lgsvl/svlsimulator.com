//
// https://www.gatsbyjs.com/docs/mdx/customizing-components/
//
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { MDXProvider } from '@mdx-js/react';
import { PageProps } from 'gatsby';
import moment from 'moment';
import React from 'react';
import Breadcrumbs from 'src/components/Breadcrumbs';
import Page from 'src/components/Page';
import { useTranslation } from 'src/hooks/useTranslations';
import { NewsIndexQuery } from '../../../graphql-types';
import GridBox from '../GridBox';
import Subs from './Substitutions';

type NewsItemNode = NewsIndexQuery['allFile']['edges'][0]['node'];
type NewsItemMdx = Exclude<NewsItemNode['childMdx'], null | undefined>;

export interface LayoutProps extends PageProps {
  location: PageProps['location'];
  pageContext: PageProps['pageContext'] & {
    frontmatter?: NewsItemMdx['frontmatter'];
  };
}

export default function Layout({ children, location, pageContext, ...rest }: React.PropsWithChildren<LayoutProps>) {
  const { t } = useTranslation();
  const author = pageContext.frontmatter?.author || null;
  let date = pageContext.frontmatter?.date || null;
  if (date) date = new Date(date);
  console.log(pageContext);
  console.log(location);
  console.log(rest);

  return (
    <MDXProvider components={Subs}>
      <Page>
        <Box mb={7}>
          <Grid container alignItems='center'>
            <GridBox item xs={12} sm={9} mb={{ xs: 2, sm: 0 }}>
              <Breadcrumbs location={location} pageContext={pageContext} />
            </GridBox>
            {author || date ? (
              <Grid item xs={12} sm={3}>
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
        </Box>
        <Container disableGutters maxWidth='md'>
          <Paper elevation={0}>
            <Box>{children}</Box>
          </Paper>
        </Container>
      </Page>
    </MDXProvider>
  );
}
