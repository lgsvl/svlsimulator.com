/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'gatsby-plugin-react-i18next';
import React from 'react';

type MetaProps = JSX.IntrinsicElements['meta'];

interface SEOProps {
  title?: string;
  meta?: MetaProps[];
  description?: string;
  featuredImage?: string;
}

const SEO: React.FC<SEOProps> = ({ title = '', meta = [], description, featuredImage }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );
  const metaTitle = title || site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      defaultTitle={site.siteMetadata.title}
      defer={false}
      meta={([
        {
          name: 'description',
          content: metaDescription
        },
        {
          property: 'og:title',
          content: metaTitle
        },
        {
          property: 'og:description',
          content: metaDescription
        },
        {
          property: 'og:type',
          content: 'website'
        },
        featuredImage && {
          property: 'og:image',
          content: site.siteMetadata.siteUrl + featuredImage
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author
        },
        {
          name: 'twitter:site',
          content: '@svlsimulator'
        },
        {
          name: 'twitter:title',
          content: metaTitle
        },
        {
          name: 'twitter:description',
          content: metaDescription
        },
        featuredImage && {
          name: 'twitter:image',
          content: site.siteMetadata.siteUrl + featuredImage
        }
      ] as MetaProps[])
        .filter(Boolean)
        .concat(meta)}
    />
  );
};

export default SEO;
