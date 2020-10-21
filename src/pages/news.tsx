import { withTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Page from 'src/components/Page';
import { useTranslation } from 'src/hooks/useTranslations';
import { px } from 'src/utils/theme';
import styled from 'styled-components';

const NewsGrid = withTheme(styled(Box)`
  display: grid;
  grid-gap: ${({ theme }) => px(theme.spacing(2))};
  grid-template-columns: repeat(4, 1fr);

  ${({ theme }) => `
  ${theme.breakpoints.down('sm')} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${theme.breakpoints.down('xs')} {
    grid-template-columns: repeat(1, 1fr);
  }
  `}
`);

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
}

const StyledNewsBox = withTheme(styled(Paper)<NewsBoxProps>`
  ${({ theme, category, colSpan, rowSpan }) => `
  grid-column-end: ${colSpan ? `span ${colSpan}` : 'auto'};
  grid-row-end: ${rowSpan ? `span ${rowSpan}` : 'auto'};
  padding: ${px(theme.spacing(1))};
  background-color: ${newsBoxCategoryColors[category]};

  ${theme.breakpoints.only('sm')} {
    grid-column-end: ${colSpan > 2 ? 'auto' : `span ${colSpan}`};
  }
  ${theme.breakpoints.only('xs')} {
    grid-column-end: ${colSpan > 1 ? 'auto' : `span ${colSpan}`};
  }
  `}
`);
// ` as React.FC<NewsBoxProps>;

const NewsBox = ({ children, category = 'news', colSpan = 0, rowSpan = 0, title, ...rest }: Partial<NewsBoxProps>) => {
  const { t } = useTranslation();
  return (
    <StyledNewsBox elevation={4} {...rest} category={category} colSpan={colSpan} rowSpan={rowSpan}>
      <Typography variant='caption'>{t(`news.categories.${category}`)}</Typography>
      {title && <Typography variant='h3'>{title}</Typography>}
      {children}
    </StyledNewsBox>
  );
};

export default function News() {
  const { t } = useTranslation();
  return (
    <Page>
      <Typography variant='h1'>{t('news.title')}</Typography>
      <NewsGrid>
        <NewsBox title='News 1'>
          <Typography>News 1 Body</Typography>
        </NewsBox>
        <NewsBox category='event'>
          <Typography>News 2</Typography>
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
      </NewsGrid>
    </Page>
  );
}
