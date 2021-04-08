//
// https://www.gatsbyjs.com/docs/mdx/customizing-components/
//
import Box, { BoxProps } from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { MDXProvider } from '@mdx-js/react';
import { PageProps } from 'gatsby';
import moment from 'moment';
import React from 'react';
import Breadcrumbs from 'src/components/Breadcrumbs';
import Page, { PageSection } from 'src/components/Page';
import { useTranslation } from 'src/hooks/useTranslations';
import styled from 'styled-components';
import { NewsIndexQuery } from '../../../graphql-types';
import GridBox from '../GridBox';
import Image from '../Image';
import Subs from './Substitutions';
import useImageUrl from './useImageUrl';

type NewsItemNode = NewsIndexQuery['allFile']['edges'][0]['node'];
type NewsItemMdx = Exclude<NewsItemNode['childMdx'], null | undefined>;
type NewsFrontmatter = NewsItemMdx['frontmatter'] & { featuredImage?: string };

const OverlayBox = withTheme(styled(Box)`
  text-shadow: 0px 1px 3px black, 0px 1px 20px rgba(0, 0, 0, 0.7);
`) as React.FC<BoxProps>;

export interface LayoutProps extends PageProps {
  location: PageProps['location'];
  pageContext: PageProps['pageContext'] & {
    frontmatter?: NewsFrontmatter;
  };
}

export default function Layout({ children, location, pageContext, ...rest }: React.PropsWithChildren<LayoutProps>) {
  const { t } = useTranslation();
  const { author, featuredImage, title, date: dateStr, preview } = pageContext.frontmatter || {};
  const { publicURL: featuredImageURL } = useImageUrl(featuredImage);

  let date: Date | undefined;
  if (dateStr && !isNaN(Date.parse(dateStr))) date = new Date(dateStr);

  return (
    <MDXProvider components={Subs}>
      <Page title={title} description={preview as string | undefined} featuredImage={featuredImageURL}>
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
              featuredImageURL ? (
                <OverlayBox position='relative' mb={3} py={6}>
                  <Image position='absolute' top={0} left={0} zIndex={-1} src={featuredImageURL} />
                  <Typography variant='h1'>{title}</Typography>
                </OverlayBox>
              ) : (
                <Box mb={3}>
                  <Typography variant='h1'>{title}</Typography>
                </Box>
              )
            ) : null}
            {children}
          </Box>
        </PageSection>
      </Page>
    </MDXProvider>
  );
}
