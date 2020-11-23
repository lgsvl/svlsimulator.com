// This file includes all of the override/customization components that MDX will
// substitute interpreted tags with.
import { Table, TableCell, TableRow, TableCellProps } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import React from 'react';
import Link, { LinkProps } from 'src/components/Link';
import { MdxComponentSubstitutions } from './Substitutions.d';

export type MdLinkProps = { to?: LinkProps['to'] } & Omit<LinkProps, 'to'>;

const H1 = (props: TypographyProps) => <Typography {...props} variant='h1' />;
const H2 = (props: TypographyProps) => <Typography {...props} variant='h2' gutterBottom />;
const H3 = (props: TypographyProps) => <Typography {...props} variant='h3' gutterBottom />;
const H4 = (props: TypographyProps) => <Typography {...props} variant='h4' gutterBottom />;
const H5 = (props: TypographyProps) => <Typography {...props} variant='h5' gutterBottom />;
const H6 = (props: TypographyProps) => <Typography {...props} variant='h6' gutterBottom />;
const P = (props: TypographyProps) => <Typography {...props} paragraph />;
const TableHeadCell = (props: TableCellProps) => <TableCell {...props} component='th' variant='head' />;
const MdLink: React.FC<MdLinkProps> = ({ to, href = '#', ...rest }) => <Link {...rest} to={to || href} />;

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
  a: MdLink
};

export default components;
export { components };
