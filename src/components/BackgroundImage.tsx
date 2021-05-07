import React, { useMemo } from 'react';
import Box, { BoxProps } from '@material-ui/core/Box';
import { withTheme } from '@material-ui/core/styles';
import styled from 'styled-components';
import Image from './Image';

export interface BackgroundImageProps extends BoxProps {
  fit?: 'cover' | 'contain';
  src?: HTMLImageElement['src'];
  bgPosition?: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ children, fit = 'contain', src, zIndex = -1, ...rest }) => (
  <Image height='100%' width='100%' minHeight={300} src={src} fit={fit} zIndex={zIndex} {...rest}>
    {children}
  </Image>
);

export default BackgroundImage;
export { BackgroundImage };
