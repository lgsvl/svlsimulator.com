import { withTheme } from '@material-ui/core';
import Box, { BoxProps } from '@material-ui/core/Box';
import React from 'react';
import styled from 'styled-components';

export interface ImageProps extends BoxProps {
  src?: HTMLImageElement['src'];
}

const Image = withTheme(styled(({ src, ...rest }) => <Box {...rest} />)`
  // height: 100%;
  width: 100%;
  min-height: 100px; // Arbitrarily assigned this to a non-zero value, so it's never invisible.
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center center;
`) as React.FC<ImageProps>;

export default Image;
export { Image };
