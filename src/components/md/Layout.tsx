//
// https://www.gatsbyjs.com/docs/mdx/customizing-components/
//
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { MDXProvider } from '@mdx-js/react';
import { PageProps } from 'gatsby';
import moment from 'moment';
import React from 'react';
import Breadcrumbs from 'src/components/Breadcrumbs';
import Page, { PageSection } from 'src/components/Page';
import { useTranslation } from 'src/hooks/useTranslations';
import { NewsIndexQuery } from '../../../graphql-types';
import GridBox from '../GridBox';
import Image from '../Image';
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
  const { author, featuredImage, title, date: dateStr } = pageContext.frontmatter || {};

  let date: Date | undefined;
  if (dateStr && !isNaN(Date.parse(dateStr))) date = new Date(dateStr);

  return (
    <MDXProvider components={Subs}>
      <Page>
        <PageSection component='section' maxWidth='lg'>
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
                        <time dateTime={date.toString()}>{moment(date).format('LL')}</time>
                      </Typography>
                    ) : null}
                  </Box>
                </Grid>
              ) : null}
            </Grid>
          </Box>
        </PageSection>
        <PageSection component='section' maxWidth='md'>
          <Box>
            {title ? (
              <Box position='relative' mb={3} py={featuredImage ? 3 : 0}>
                <Image position='absolute' top={0} left={0} src={(featuredImage as unknown) as string} />
                <Typography variant='h1'>{title}</Typography>
              </Box>
            ) : null}
            {children}
          </Box>
        </PageSection>
      </Page>
    </MDXProvider>
  );
}