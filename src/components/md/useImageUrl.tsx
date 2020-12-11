import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { NewsImagesQuery } from '../../../graphql-types';

interface ImageURL {
  publicURL?: string;
}

export default function useImageUrl(imagePath?: string): ImageURL {
  const { allFile }: NewsImagesQuery = useStaticQuery(
    graphql`
      query NewsImages {
        allFile(filter: { relativeDirectory: { eq: "pages/news/images" } }) {
          edges {
            node {
              id
              childImageSharp {
                fluid(maxWidth: 800) {
                  src
                  srcSet
                  aspectRatio
                  sizes
                  originalImg
                }
              }
              publicURL
              relativePath
            }
          }
        }
      }
    `
  );
  if (!imagePath) return {};
  const result = allFile.edges.find(n => n.node.relativePath === 'pages/news/' + imagePath);
  return {
    publicURL: result?.node?.childImageSharp?.fluid?.originalImg || result?.node?.publicURL || imagePath
  };
}
