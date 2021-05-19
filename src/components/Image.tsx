import { withTheme } from '@material-ui/core';
import Box, { BoxProps } from '@material-ui/core/Box';
import { checkWebPSupport } from 'supports-webp-sync';
import React from 'react';
import styled from 'styled-components';

export type ImageProps = BoxProps & {
  fit?: 'cover' | 'contain';
  src?: HTMLImageElement['src'];
  webp?: string;
  bgPosition?: string;
};

// Set up just a Box with a covering background image.
const ImageBase = withTheme(styled(({ fit, src, webp, bgPosition, ...rest }: ImageProps) => <Box {...rest} />)`
  background-image: url(${({ src, webp }) =>
    webp && (typeof window === 'undefined' || checkWebPSupport()) ? webp : src});
  background-size: ${({ fit = 'cover' }) => fit};
  background-position: ${({ bgPosition = 'center center' }) => bgPosition};
  background-repeat: no-repeat;
`) as React.FC<ImageProps>;

// Add the most common sizing rules
// Arbitrarily assigned a non-zero value to min-height, so it's never invisible.
const Image: React.FC<ImageProps> = props => <ImageBase height={1} width={1} minHeight='100px' role='img' {...props} />;

export default Image;
export { Image, ImageBase };
