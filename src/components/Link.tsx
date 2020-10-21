import MuiLink, { LinkBaseProps } from '@material-ui/core/Link';
import { GatsbyLinkProps } from 'gatsby';
import { Link as GatsbyLink } from 'gatsby-plugin-react-i18next';
import React from 'react';

type I18nGatsbyLinkProps = GatsbyLinkProps<HTMLAnchorElement> & { language?: string };

const FwdLink = React.forwardRef((props: I18nGatsbyLinkProps, ref) => (
  <GatsbyLink {...props} ref={ref as React.Ref<HTMLAnchorElement>} />
));

export type LinkProps = LinkBaseProps & I18nGatsbyLinkProps;

// Gatsby bug needs a custom thing to work...
// https://github.com/gatsbyjs/gatsby/issues/16682
// type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link: React.FC<LinkProps> = ({ to, activeClassName, partiallyActive, ...rest }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);
  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <MuiLink
        component={FwdLink}
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...rest}
      />
    );
  }
  return <MuiLink href={to} {...rest} />;
};

export default Link;
export { Link };
