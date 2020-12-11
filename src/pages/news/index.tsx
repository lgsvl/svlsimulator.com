import { Table, TableBody, TableCell, TableRow, withTheme } from '@material-ui/core';
import Box, { BoxProps } from '@material-ui/core/Box';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import { graphql } from 'gatsby';
import moment from 'moment';
import React from 'react';
import { LinkButton } from 'src/components/Button';
import Center from 'src/components/Center';
import LayoutGrid from 'src/components/LayoutGrid';
import { Link } from 'src/components/Link';
import Page, { PageSection } from 'src/components/Page';
import SubscribeBox from 'src/components/SubscribeBox';
import { useTranslation } from 'src/hooks/useTranslations';
import { omitProps } from 'src/utils/react';
import { px } from 'src/utils/theme';
import styled from 'styled-components';
import { NewsIndexQuery } from '../../../graphql-types';

enum newsBoxCategoryColors {
  news,
  event = 'rgba(0, 0, 255, 0.05)',
  article = 'rgba(255, 255, 0, 0.05)',
  announcement = 'rgba(0, 255, 0, 0.05)'
}

type NewsBoxCategory = keyof typeof newsBoxCategoryColors;

const newsItemProminence: Record<string, Record<string, number>> = {
  normal: { colSpan: 1, rowSpan: 1 },
  big: { colSpan: 2, rowSpan: 1 },
  biggest: { colSpan: 4, rowSpan: 1 }
};

type NewsItemProminence = keyof typeof newsItemProminence;

type NewsItemNode = NewsIndexQuery['allFile']['edges'][0]['node'];
type NewsItemMdx = Exclude<NewsItemNode['childMdx'], null | undefined>;

type NewsItemData = {
  bodyPreview: string;
  category: NewsBoxCategory;
  date: Date;
  featuredImageSrc?: string;
  id: string;
  link?: string;
  prominence: NewsItemProminence;
  title: string;
};

interface NewsBoxProps extends PaperProps {
  prominence: NewsItemData['prominence'];
  category: NewsItemData['category'];
  date?: NewsItemData['date'];
  link?: NewsItemData['link'];
  src?: string;
}

interface StyledNewsBoxProps extends NewsBoxProps {
  colSpan: number;
  rowSpan: number;
}

const StyledNewsBox = withTheme(styled(
  omitProps(Paper, ['theme', 'src', 'prominence', 'colspan', 'rowspan', 'category'])
)<StyledNewsBoxProps>`
  ${({ theme, colSpan, rowSpan, src }) => `
  grid-column-end: ${colSpan ? `span ${colSpan}` : 'auto'};
  grid-row-end: ${rowSpan ? `span ${rowSpan}` : 'auto'};
  padding: ${px(theme.spacing(2))};
  background-color: transparent;
  display: flex;
  flex-direction: column;
  height: 360px;
  position: relative;
  overflow: hidden;

  &.MuiPaper-outlined {
    border: 3px solid ${theme.palette.text.primary};
    border-radius: 16px;
  }

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
`) as React.FC<StyledNewsBoxProps>;

const NewsBoxTitle = withTheme(styled(Typography)<TypographyProps>`
  &.MuiTypography-h2 {
    font-weight: 400;
  }
  &.MuiTypography-h4 {
    font-weight: 600;
  }
`) as React.FC<TypographyProps>;

const FadeBox = withTheme(styled(Box)<BoxProps>`
  overflow: hidden;
  height: 100%;
  mask-box-image: linear-gradient(to bottom, black calc(100% - 5em), transparent);
  mask-box-image-width: 0 0 1em 0;
`) as React.FC<BoxProps>;

const StyledTable = withTheme(styled(Table)`
  border-collapse: separate;
`);

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
  prominence = 'normal',
  link,
  title,
  ...rest
}: Partial<NewsBoxProps>) => {
  const { t } = useTranslation();

  const colSpan = newsItemProminence[prominence].colSpan || 1;
  const rowSpan = newsItemProminence[prominence].rowSpan || 1;

  // Check for known enum values
  validateEnum('category', category, newsBoxCategoryColors);

  const externalLink = link && link.match('://');

  const titleVariant: TypographyProps['variant'] = 'h5';

  // switch (prominence) {
  //   case 'biggest': {
  //     rest.variant = 'outlined';
  //     titleVariant = 'h2';
  //     break;
  //   }
  //   case 'big': {
  //     titleVariant = 'h4';
  //     break;
  //   }
  // }

  return (
    <StyledNewsBox
      elevation={0}
      {...rest}
      prominence={prominence}
      category={category}
      colSpan={colSpan}
      rowSpan={rowSpan}
    >
      <Box position='relative'>
        <Typography variant='overline'>{t(`news.categories.${category}`)}</Typography>
      </Box>
      <FadeBox>
        {title && <NewsBoxTitle variant={titleVariant}>{title}</NewsBoxTitle>}
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

const NewsTableRow = ({ title, date, src, category, link }: Partial<NewsBoxProps>) => {
  const { t } = useTranslation();
  const externalLink = link && link.match('://');

  const thisYear = date?.getFullYear() === new Date().getFullYear();
  const dateStr = thisYear ? moment(date, 'LL').fromNow() : moment(date).format('LL');

  return (
    <TableRow>
      <TableCell>
        <Typography variant='overline'>{t(`news.categories.${category}`)}</Typography>
      </TableCell>
      <TableCell>
        {date ? (
          <Typography variant='overline'>
            <time dateTime={date.toString()}>{dateStr}</time>
          </Typography>
        ) : null}
      </TableCell>
      <TableCell>
        <Typography>
          <Link to={link || ''} color='textSecondary' target={externalLink ? '_blank' : undefined}>
            {title}
          </Link>
        </Typography>
      </TableCell>
    </TableRow>
  );
};

// The generated typescript type from the below query automatically has "Query"
// appended to the query name: "NewsIndex" -> "NewsIndexQuery", imported by name above.
export const queryNews = graphql`
  query NewsIndex {
    allFile(filter: { extension: { eq: "md" }, relativeDirectory: { eq: "pages/news" } }) {
      edges {
        node {
          birthTime
          childMdx {
            id
            slug
            headings {
              value
            }
            excerpt
            frontmatter {
              title
              author
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
  }
`;

const getNewsItemData: (arg0: NewsItemNode) => NewsItemData = ({ birthTime, childMdx }) => {
  const { id, frontmatter, headings, excerpt, slug } = childMdx as NewsItemMdx;
  const date = new Date(frontmatter?.date && !isNaN(Date.parse(frontmatter?.date)) ? frontmatter?.date : birthTime);
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
  const newsData = data.allFile.edges
    .filter(edge => Boolean(edge.node.childMdx))
    .map(edge => getNewsItemData(edge.node))
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  const oldNews = newsData.splice(8);

  return (
    <Page title={t('news.title')}>
      <PageSection>
        <Box mt={{ xs: 2, md: 6 }} mb={4}>
          <Typography variant='h3'>{t('news.title')}</Typography>
        </Box>
        <Box mb={2}>
          <LayoutGrid sm={2} md={4} spacing={2} dense>
            {newsData.map(({ id, title, bodyPreview, category, link, featuredImageSrc, prominence }) => {
              // Check for known enum values
              validateEnum('prominence', prominence, newsItemProminence);

              return (
                <NewsBox
                  key={id}
                  title={title}
                  src={featuredImageSrc}
                  category={category}
                  prominence={prominence}
                  link={link}
                >
                  <Typography>{bodyPreview}</Typography>
                </NewsBox>
              );
            })}
          </LayoutGrid>
        </Box>
      </PageSection>
      <PageSection>
        <Box mt={10} mb={3}>
          <Center>
            <Typography variant='h4'>{t('news.archive')}</Typography>
          </Center>
          <StyledTable>
            <TableBody>
              {oldNews.map(({ title, category, date, link, featuredImageSrc }, index) => (
                <NewsTableRow
                  key={`newsTableRow${index}`}
                  title={title}
                  date={date}
                  src={featuredImageSrc}
                  category={category}
                  link={link}
                />
              ))}
            </TableBody>
          </StyledTable>
        </Box>
      </PageSection>

      <SubscribeBox />
    </Page>
  );
}
