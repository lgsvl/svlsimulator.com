import React from 'react';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';
import MuiLink from '@material-ui/core/Link';

// Gatsby bug needs a custom thing to work...
// https://github.com/gatsbyjs/gatsby/issues/16682
// type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
// const Link: React.FC<Omit<GatsbyLinkProps<{}>, 'ref'>> = ({ children, to, activeClassName, partiallyActive, ...rest }: LinkProps) => {
const Link: React.FC<GatsbyLinkProps<{}>> = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  ...rest
}) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);
  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <MuiLink
        component={GatsbyLink}
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...rest}
      >
        {children}
      </MuiLink>
    );
  }
  return (
    <MuiLink href={to} {...rest}>
      {children}
    </MuiLink>
  );
};

export default Link;
export { Link };
