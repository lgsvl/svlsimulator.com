//
// https://www.gatsbyjs.com/docs/mdx/customizing-components/
//
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { MDXProvider } from '@mdx-js/react';
import { graphql, PageProps, useStaticQuery } from 'gatsby';
import moment from 'moment';
import React from 'react';
import styled from 'styled-components';
import Breadcrumbs from 'src/components/Breadcrumbs';
import Page, { PageSection } from 'src/components/Page';
import { useTranslation } from 'src/hooks/useTranslations';
import { NewsIndexQuery } from '../../../graphql-types';
import GridBox from '../GridBox';
import Image from '../Image';
import Subs from './Substitutions';
import useImageUrl from './useImageUrl';

type NewsItemNode = NewsIndexQuery['allFile']['edges'][0]['node'];
type NewsItemMdx = Exclude<NewsItemNode['childMdx'], null | undefined>;
type NewsFrontmatter = NewsItemMdx['frontmatter'] & { featuredImage?: string };

const BgImage = styled(Image)`
  z-index: -1;
`;

export interface LayoutProps extends PageProps {
  location: PageProps['location'];
  pageContext: PageProps['pageContext'] & {
    frontmatter?: NewsFrontmatter;
  };
}

export default function Layout({ children, location, pageContext, ...rest }: React.PropsWithChildren<LayoutProps>) {
  const { t } = useTranslation();
  const { author, featuredImage, title, date: dateStr } = pageContext.frontmatter || {};
  const { publicURL: featuredImageURL } = useImageUrl(featuredImage);

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
              <Box position='relative' mb={3} py={featuredImageURL ? 3 : 0}>
                <BgImage position='absolute' top={0} left={0} src={featuredImageURL} />
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
