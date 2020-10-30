import { withTheme } from '@material-ui/core';
import Box, { BoxProps } from '@material-ui/core/Box';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { graphql } from 'gatsby';
import React from 'react';
import LayoutGrid from 'src/components/LayoutGrid';
import Link from 'src/components/Link';
import LinkButton from 'src/components/LinkButton';
import Page from 'src/components/Page';
import SubscribeBox from 'src/components/SubscribeBox';
import { useTranslation } from 'src/hooks/useTranslations';
import imgPlaceholder from 'src/images/placeholder1.jpg';
import { fade, px } from 'src/utils/theme';
import styled from 'styled-components';
// import Img from "gatsby-image";
import { NewsIndexQuery } from '../../../graphql-types';

const newsBoxCategoryColors = {
  news: '',
  event: 'rgba(0, 0, 255, 0.05)',
  article: 'rgba(255, 255, 0, 0.05)',
  announcement: 'rgba(0, 255, 0, 0.05)'
};
type NewsBoxCategory = keyof typeof newsBoxCategoryColors;

interface NewsBoxProps extends PaperProps {
  colSpan: number;
  rowSpan: number;
  category: NewsBoxCategory;
  link?: string;
  src?: string;
}

const StyledNewsBox = withTheme(styled(Paper)<NewsBoxProps>`
  ${({ theme, category, colSpan, rowSpan, src }) => `
  grid-column-end: ${colSpan ? `span ${colSpan}` : 'auto'};
  grid-row-end: ${rowSpan ? `span ${rowSpan}` : 'auto'};
  padding: ${px(theme.spacing(2))};
  // background-color: ${newsBoxCategoryColors[category]};
  background-color: ${fade(theme.palette.background.paper, 0.6)};
  background-image: url(${src});
  background-position: center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 360px;

  ${theme.breakpoints.only('sm')} {
    grid-column-end: ${colSpan > 2 ? 'auto' : `span ${colSpan}`};
  }
  ${theme.breakpoints.only('xs')} {
    grid-column-end: ${colSpan > 1 ? 'auto' : `span ${colSpan}`};
  }
  `}
`) as React.FC<NewsBoxProps>;

const FadeBox = withTheme(styled(Box)<BoxProps>`
  overflow: hidden;
  height: 100%;
  mask-box-image: linear-gradient(to bottom, black calc(100% - 5em), transparent);
  mask-box-image-width: 0 0 1em 0;
`) as React.FC<BoxProps>;

const NewsBox = ({
  children,
  category = 'news',
  colSpan = 1,
  link,
  rowSpan = 1,
  title,
  ...rest
}: Partial<NewsBoxProps>) => {
  const { t } = useTranslation();
  return (
    <StyledNewsBox elevation={4} {...rest} category={category} colSpan={colSpan} rowSpan={rowSpan}>
      <Typography variant='caption'>{t(`news.categories.${category}`)}</Typography>
      {title && <Typography variant='h5'>{title}</Typography>}
      <FadeBox>{children}</FadeBox>
      {link ? (
        <Box alignSelf='start' mt='auto'>
          <LinkButton buttonVariant='outlined' to={link}>
            {t('main.buttons.readNews')}
          </LinkButton>
        </Box>
      ) : null}
    </StyledNewsBox>
  );
};

// The generated typescript type from the below query automatically has "Query"
// appended to the query name: "NewsIndex" -> "NewsIndexQuery", imported by name above.
export const queryNews = graphql`
  query NewsIndex {
    allMdx(limit: 10, sort: { fields: frontmatter___date }) {
      edges {
        node {
          id
          slug
          headings {
            value
          }
          excerpt
          frontmatter {
            title
            date
            category
            preview
            prominence
            featuredImage {
              childImageSharp {
                fluid(maxHeight: 720) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;

type NewsItemProminence = 'normal' | 'big' | 'biggest';
type NewsItemNode = NewsIndexQuery['allMdx']['edges'][0]['node'];

type NewsItemData = {
  bodyPreview: string;
  category?: NewsBoxCategory;
  date?: Date;
  featuredImageSrc?: string;
  id: string;
  link?: string;
  prominence?: NewsItemProminence;
  title: string;
};

// const getNewsItemData: (arg0: NewsItemNode) => NewsItemData = ({ id, frontmatter, headings, excerpt }) => {
const getNewsItemData = ({ id, frontmatter, headings, excerpt, slug }: NewsItemNode) => {
  let title = '';
  const date = undefined;
  let bodyPreview = '';
  const link = slug?.replace(/^pages/, '') || undefined;
  // console.log('slug:', slug, 'link:', link);
  let prominence: NewsItemProminence = 'normal';
  let category: NewsBoxCategory = 'news';
  const featuredImageSrc = frontmatter?.featuredImage?.childImageSharp?.fluid?.src || undefined;
  if (frontmatter?.title) {
    // Use the defined metadata title from the "---" section at the top
    title = frontmatter.title;
  } else if (headings?.length && headings[0] && headings[0].value) {
    // Just grab the first heading off the MD file
    title = headings[0].value;
  }

  if (frontmatter?.preview) {
    bodyPreview = frontmatter?.preview;
  } else if (excerpt) {
    bodyPreview = excerpt.slice(title.length);
  }

  if (frontmatter?.prominence) {
    prominence = frontmatter?.prominence as NewsItemProminence;
  }

  if (frontmatter?.category) {
    category = frontmatter?.category as NewsBoxCategory;
  }

  const data: NewsItemData = {
    bodyPreview,
    category,
    date,
    featuredImageSrc,
    id,
    link,
    prominence,
    title
  };
  return data;
};

export default function News({ data }: { data: NewsIndexQuery }) {
  const { t } = useTranslation();
  // console.log('data:', data);

  return (
    <Page title={t('news.title')}>
      <Typography variant='h1'>{t('news.title')}</Typography>
      <LayoutGrid sm={2} md={4} spacing={2}>
        {data.allMdx.edges.map(({ node }: { node: NewsItemNode }) => {
          const { id, title, bodyPreview, category, link, featuredImageSrc, prominence } = getNewsItemData(node);

          let colSpan = 1;
          switch (prominence) {
            case 'biggest': {
              colSpan = 4;
              break;
            }
            case 'big': {
              colSpan = 2;
              break;
            }
          }
          return (
            <NewsBox key={id} title={title} src={featuredImageSrc} category={category} colSpan={colSpan} link={link}>
              {/* {(console.log(node), null)} */}
              <Typography>{bodyPreview}</Typography>
            </NewsBox>
          );
        })}
        <NewsBox title='News 1' src={imgPlaceholder}>
          <Typography>News 1 Body</Typography>
          <Typography>
            <Link to='/news/readme'>Go to example README</Link>
          </Typography>
        </NewsBox>
        <NewsBox category='event'>
          <Typography>
            <Link to='/news/october-event'>Go to CES Event</Link>
          </Typography>
        </NewsBox>
        <NewsBox colSpan={2} category='article'>
          <Typography>News 3</Typography>
          <Typography>
            The component leverages the power of React and TypeScript, to provide the best UX, while manipulating an
            unlimited set of data. It comes with an intuitive API for real-time updates, accessibility, as well as
            theming and custom templates, all with blazing fast performance.
          </Typography>
        </NewsBox>
        <NewsBox colSpan={2} category='announcement'>
          <Typography>News 4</Typography>
        </NewsBox>
        <NewsBox category='news'>
          <Typography>News 5</Typography>
        </NewsBox>
        <NewsBox category='article'>
          <Typography>News 6</Typography>
        </NewsBox>
      </LayoutGrid>

      <SubscribeBox />
    </Page>
  );
}
