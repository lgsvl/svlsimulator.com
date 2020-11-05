import { withTheme } from '@material-ui/core';
import Box, { BoxProps } from '@material-ui/core/Box';
import React from 'react';
import styled from 'styled-components';

export interface ImageProps extends BoxProps {
  src?: HTMLImageElement['src'];
}

// Arbitrarily assigned a non-zero value to min-height, so it's never invisible.
const Image = withTheme(styled(({ src, ...rest }) => <Box height={1} width={1} minHeight='100px' {...rest} />)`
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center center;
`) as React.FC<ImageProps>;

export default Image;
export { Image };
