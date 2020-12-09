import { withTheme } from '@material-ui/core';
import Box, { BoxProps } from '@material-ui/core/Box';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Button from 'src/components/Button';
import LayoutGrid from 'src/components/LayoutGrid';
import Page from 'src/components/Page';
import SubscribeBox from 'src/components/SubscribeBox';
import { useTranslation } from 'src/hooks/useTranslations';
import { fade, px } from 'src/utils/theme';
import styled from 'styled-components';
import imgPlaceholder from 'src/images/placeholder1.jpg';
import Link from 'src/components/Link';
import { graphql } from 'gatsby';

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

const NewsBox = ({ children, category = 'news', colSpan = 1, rowSpan = 1, title, ...rest }: Partial<NewsBoxProps>) => {
  const { t } = useTranslation();
  return (
    <StyledNewsBox elevation={4} {...rest} category={category} colSpan={colSpan} rowSpan={rowSpan}>
      <Typography variant='caption'>{t(`news.categories.${category}`)}</Typography>
      {title && <Typography variant='h5'>{title}</Typography>}
      <FadeBox>{children}</FadeBox>
      <Box alignSelf='start' mt='auto'>
        <Button variant='outlined'>{t('main.buttons.readNews')}</Button>
      </Box>
    </StyledNewsBox>
  );
};

// export const queryNews = graphql`
//   query MdxBlogPost {
//     mdx(title: { eq: "Using a Theme" }) {
//       id
//       title
//     }
//   }
// `;

export const queryHome = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`;

export default function News({ data }: { data: any }) {
  const { t } = useTranslation();
  console.log('data:', data);
  return (
    <Page title={t('news.title')}>
      <Typography variant='h1'>{t('news.title')}</Typography>
      <LayoutGrid sm={2} md={4} spacing={2}>
        <NewsBox title='News 1' src={imgPlaceholder}>
          <Typography>News 1 Body</Typography>
          <Typography>
            <Link to='/news/readme'>Go to example README</Link>
          </Typography>
        </NewsBox>
        <NewsBox category='event'>
          <Typography>
            The component leverages the power of React and TypeScript, to provide the best UX, while manipulating an
            unlimited set of data. It comes with an intuitive API for real-time updates, accessibility, as well as
            theming and custom templates, all with blazing fast performance.
          </Typography>
        </NewsBox>
        <NewsBox colSpan={2} category='article'>
          <Typography>News 3</Typography>
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
