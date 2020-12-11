import MuiLink, { LinkProps as MuiLinkProps } from '@material-ui/core/Link';
import { GatsbyLinkProps } from 'gatsby';
import { Link as GatsbyLink } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { OutboundLink } from 'react-ga';
import { Merge } from 'src/@types/utils';

type OutboundGatsbyLinkProps = GatsbyLinkProps<HTMLAnchorElement>;
type I18nGatsbyLinkProps = OutboundGatsbyLinkProps & { language?: string };

// Gatsby's Link component (really gatsby-plugin-react-i18next's) is a bit old,
// (pre React 16.4) so it still uses (allows) the innerRef prop, which is
// correctly type-checked. https://github.com/gatsbyjs/gatsby/issues/12014
const FwdLink = React.forwardRef((props: I18nGatsbyLinkProps, ref) => (
  <GatsbyLink {...props} innerRef={ref as React.Ref<HTMLAnchorElement>} />
)) as React.ForwardRefExoticComponent<I18nGatsbyLinkProps>;

const FwdOutbound = React.forwardRef((props: OutboundGatsbyLinkProps, ref) => {
  const outboundProps = { ...props, ref: undefined };
  return <OutboundLink eventLabel={outboundProps.to} {...outboundProps} />;
}) as React.ForwardRefExoticComponent<OutboundGatsbyLinkProps>;

export type LinkProps = Merge<MuiLinkProps, I18nGatsbyLinkProps>;

// Gatsby bug needs a custom thing to work...
// https://github.com/gatsbyjs/gatsby/issues/16682
// type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = React.forwardRef(({ to, activeClassName, partiallyActive, ...rest }: LinkProps, ref) => {
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
        ref={ref as React.Ref<HTMLAnchorElement>}
      />
    );
  }
  // Outbound link, track with analytics
  if (to) {
    return <MuiLink component={FwdOutbound} to={to} {...rest} ref={ref as React.Ref<HTMLAnchorElement>} />;
  }
  // Undefined link (probably listening for click with javascript, use basic MuiLink)
  return <MuiLink href={to} {...rest} ref={ref} />;
}) as React.ForwardRefExoticComponent<LinkProps>;

export default Link;
export { Link };
