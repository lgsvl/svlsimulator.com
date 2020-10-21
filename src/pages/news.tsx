import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { px, themed } from 'src/utils/theme';
import Page from 'src/components/Page';

const NewsGrid = themed(Box)`
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
`;

const NewsBox = themed<{ colSpan: number; rowSpan: number }>(Paper)`
${({ theme, colSpan, rowSpan }) => `
  grid-column-end: ${colSpan ? `span ${colSpan}` : 'auto'};
  grid-row-end: ${rowSpan ? `span ${rowSpan}` : 'auto'};
  padding: ${px(theme.spacing(1))};

  ${theme.breakpoints.only('sm')} {
    grid-column-end: ${colSpan > 2 ? 'auto' : `span ${colSpan}`};
  }
  ${theme.breakpoints.only('xs')} {
    grid-column-end: ${colSpan > 1 ? 'auto' : `span ${colSpan}`};
  }
  `}
`;

export default function News() {
  return (
    <Page>
      <Typography variant='h1'>News</Typography>
      <NewsGrid>
        <NewsBox elevation={4}>
          <Typography>News 1</Typography>
        </NewsBox>
        <NewsBox elevation={4}>
          <Typography>News 2</Typography>
        </NewsBox>
        <NewsBox elevation={4} colSpan={2}>
          <Typography>News 3</Typography>
        </NewsBox>
        <NewsBox elevation={4} colSpan={2}>
          <Typography>News 4</Typography>
        </NewsBox>
        <NewsBox elevation={4}>
          <Typography>News 5</Typography>
        </NewsBox>
        <NewsBox elevation={4}>
          <Typography>News 6</Typography>
        </NewsBox>
      </NewsGrid>
    </Page>
  );
}
