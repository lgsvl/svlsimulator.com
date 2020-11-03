import { withTheme } from '@material-ui/core';
import Box, { BoxProps } from '@material-ui/core/Box';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { graphql } from 'gatsby';
import React from 'react';
import LayoutGrid from 'src/components/LayoutGrid';
// import Link from 'src/components/Link';
import LinkButton from 'src/components/LinkButton';
import Page from 'src/components/Page';
import SubscribeBox from 'src/components/SubscribeBox';
import { useTranslation } from 'src/hooks/useTranslations';
// import imgPlaceholder from 'src/images/placeholder1.jpg';
import { fade, px } from 'src/utils/theme';
import styled from 'styled-components';
// import Img from "gatsby-image";
import { NewsIndexQuery } from '../../../graphql-types';

const newsBoxCategoryColors = {
  news: '',
  event: 'rgba(0, 0, 255, 0.05)',
  article: 'rgba(255, 255, 0, 0.05)',
  announcement: 'rgba(0, 255, 0, 0.05)'
} as const;

type NewsBoxCategory = keyof typeof newsBoxCategoryColors;

const newsItemProminence = {
  normal: { colSpan: 1, rowSpan: 1 },
  big: { colSpan: 2, rowSpan: 1 },
  biggest: { colSpan: 4, rowSpan: 1 }
} as const;

type NewsItemProminence = keyof typeof newsItemProminence;

type NewsItemNode = NewsIndexQuery['allMdx']['edges'][0]['node'];

interface NewsBoxProps extends PaperProps {
  colSpan: number;
  rowSpan: number;
  category: NewsBoxCategory;
  link?: string;
  src?: string;
}

type NewsItemData = {
  bodyPreview: string;
  category: NewsBoxProps['category'];
  date?: Date;
  featuredImageSrc?: string;
  id: string;
  link?: string;
  prominence: NewsItemProminence;
  title: string;
};

const StyledNewsBox = withTheme(styled(Paper)<NewsBoxProps>`
  ${({ theme, category, colSpan, rowSpan, src }) => `
  grid-column-end: ${colSpan ? `span ${colSpan}` : 'auto'};
  grid-row-end: ${rowSpan ? `span ${rowSpan}` : 'auto'};
  padding: ${px(theme.spacing(2))};
  // background-color: ${fade(theme.palette.background.paper, 0.6)};
  background-color: transparent;
  display: flex;
  flex-direction: column;
  height: 360px;
  position: relative;
  overflow: hidden;

  ${theme.breakpoints.only('sm')} {
    grid-column-end: ${colSpan > 2 ? 'auto' : `span ${colSpan}`};
  }
  ${theme.breakpoints.only('xs')} {
    grid-column-end: ${colSpan > 1 ? 'auto' : `span ${colSpan}`};
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    // background-color: ${newsBoxCategoryColors[category]};
    // background-color: ${fade(theme.palette.background.paper, 0.6)};
    background-color: ${theme.palette.background.paper};
    background-image: url(${src});
    background-position: center center;
    background-size: cover;
    opacity: 0.4;
    filter: blur(1px);
    will-change: opacity, filter;
  }
  &:hover::before {
    filter: blur(0);
    opacity: 0.6;
  }
  `}
`) as React.FC<NewsBoxProps>;

const FadeBox = withTheme(styled(Box)<BoxProps>`
  overflow: hidden;
  height: 100%;
  mask-box-image: linear-gradient(to bottom, black calc(100% - 5em), transparent);
  mask-box-image-width: 0 0 1em 0;
`) as React.FC<BoxProps>;

const validateEnum = (optionName: string, option: string, allowedList: string[] | Record<string, unknown>) => {
  if (!(allowedList instanceof Array)) {
    // Just assume it's an object/hash until we care more later.
    allowedList = Object.keys(allowedList);
  }
  // Check for known enum values
  if (allowedList.indexOf(option) === -1) {
    console.error('Unknown news %s: "%s". Use one of the following: %s.', optionName, option, allowedList.join(', '));
    return false;
  }
  return true;
};

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

  // Check for known enum values
  validateEnum('category', category, newsBoxCategoryColors);

  const externalLink = link && link.match('://');

  return (
    <StyledNewsBox elevation={4} {...rest} category={category} colSpan={colSpan} rowSpan={rowSpan}>
      <Box position='relative'>
        <Typography variant='overline'>{t(`news.categories.${category}`)}</Typography>
      </Box>
      <FadeBox>
        {title && <Typography variant='h5'>{title}</Typography>}
        {children}
      </FadeBox>
      {link ? (
        <Box alignSelf='start' mt='auto'>
          <LinkButton buttonVariant='outlined' to={link} target={externalLink ? '_blank' : undefined}>
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
            link
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

const getNewsItemData: (arg0: NewsItemNode) => NewsItemData = ({ id, frontmatter, headings, excerpt, slug }) => {
  const date = undefined;
  const link = frontmatter?.link || slug?.replace(/^pages/, '') || undefined;
  let title = '';
  let bodyPreview = '';

  // Set a default and assert that this (the incoming value and the default) are one of the enum options.
  const category = ((frontmatter?.category || 'news') as unknown) as NewsItemData['category'];
  const prominence = ((frontmatter?.prominence || 'normal') as unknown) as NewsItemData['prominence'];
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

  return {
    bodyPreview,
    category,
    date,
    featuredImageSrc,
    id,
    link,
    prominence,
    title
  };
};

export default function News({ data }: { data: NewsIndexQuery }) {
  const { t } = useTranslation();

  return (
    <Page title={t('news.title')}>
      <Typography variant='h1'>{t('news.title')}</Typography>
      <LayoutGrid sm={2} md={4} spacing={2} dense>
        {data.allMdx.edges.map(({ node }: { node: NewsItemNode }) => {
          const { id, title, bodyPreview, category, link, featuredImageSrc, prominence } = getNewsItemData(node);

          // Check for known enum values
          validateEnum('prominence', prominence, newsItemProminence);
          const colSpan = newsItemProminence[prominence].colSpan;
          const rowSpan = newsItemProminence[prominence].rowSpan;

          return (
            <NewsBox
              key={id}
              title={title}
              src={featuredImageSrc}
              category={category}
              colSpan={colSpan}
              rowSpan={rowSpan}
              link={link}
            >
              <Typography>{bodyPreview}</Typography>
            </NewsBox>
          );
        })}
        {/* <NewsBox title='News 1' src={imgPlaceholder}>
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
        </NewsBox> */}
      </LayoutGrid>

      <SubscribeBox />
    </Page>
  );
}
