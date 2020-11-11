import { withTheme } from '@material-ui/core';
import Box, { BoxProps } from '@material-ui/core/Box';
import React from 'react';
import styled from 'styled-components';

export type ImageProps = BoxProps & { src?: HTMLImageElement['src'] };

// Set up just a Box with a covering background image.
const ImageBase = withTheme(styled(({ src, ...rest }: ImageProps) => <Box {...rest} />)`
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center center;
`) as React.FC<ImageProps>;

// Add the most common sizing rules
// Arbitrarily assigned a non-zero value to min-height, so it's never invisible.
const Image: React.FC<ImageProps> = props => <ImageBase height={1} width={1} minHeight='100px' role='img' {...props} />;

export default Image;
export { Image, ImageBase };
