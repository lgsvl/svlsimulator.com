// This file includes all of the override/customization components that MDX will
// substitute interpreted tags with.
import { Table, TableCell, TableCellProps, TableRow, withTheme } from '@material-ui/core';
import Box, { BoxProps } from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import MuiLink from '@material-ui/core/Link';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import React from 'react';
import Link, { LinkProps } from 'src/components/Link';
import { isImageUri } from 'src/utils';
import styled from 'styled-components';
import Li, { LiProps, LiText } from '../Li';
import { MdxComponentSubstitutions } from './Substitutions.d';
import useImageUrl from './useImageUrl';

export type MdLinkProps = { to?: LinkProps['to'] } & Omit<LinkProps, 'to'>;

const StyledOlBox = withTheme(styled(Box)`
  counter-reset: list-item-counter;
`);

const H1 = (props: TypographyProps) => <Typography {...props} variant='h1' />;
const H2 = (props: TypographyProps) => <Typography {...props} variant='h2' gutterBottom />;
const H3 = (props: TypographyProps) => <Typography {...props} variant='h3' gutterBottom />;
const H4 = (props: TypographyProps) => <Typography {...props} variant='h4' gutterBottom />;
const H5 = (props: TypographyProps) => <Typography {...props} variant='h5' gutterBottom />;
const H6 = (props: TypographyProps) => <Typography {...props} variant='h6' gutterBottom />;
const P = (props: TypographyProps) => <Typography {...props} paragraph />;
const TableHeadCell = (props: TableCellProps) => <TableCell {...props} component='th' variant='head' />;
const MdImgLink: React.FC<MdLinkProps> = ({ to, href = '#', children, ...rest }) => {
  const { publicURL } = useImageUrl(to || href);
  return (
    <MuiLink {...rest} href={publicURL || to || href}>
      {children}
    </MuiLink>
  );
};
const MdLink: React.FC<MdLinkProps> = ({ to, href = '#', ...rest }) =>
  isImageUri(to || href) ? <MdImgLink {...rest} to={to || href} /> : <Link {...rest} to={to || href} />;
const Ol: React.FC<BoxProps> = props => <StyledOlBox pl={3} {...props} component='ol' />;
const Ul: React.FC<BoxProps> = props => <Box pl={3} {...props} component='ul' />;
const ListItem: React.FC<LiProps> = ({ children, ...rest }) => (
  <Li {...rest}>
    <LiText>{children}</LiText>
  </Li>
);

const components: MdxComponentSubstitutions = {
  // Map HTML element tag to React component
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
  table: Table,
  tr: TableRow,
  td: TableCell,
  th: TableHeadCell,
  hr: Divider,
  a: MdLink,
  ol: Ol,
  ul: Ul,
  li: ListItem
};

export default components;
export { components };
