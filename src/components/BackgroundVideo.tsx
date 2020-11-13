import Box, { BoxProps } from '@material-ui/core/Box';
import { withTheme } from '@material-ui/core/styles';
import React from 'react';
import styled from 'styled-components';

// Temporary filter to get the video background color to match the site background until the videos get updated.
const cssVideoFilter = 'filter: saturate(0.7) contrast(1.01)';

const StyledVideo = withTheme(styled.video`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
  ${cssVideoFilter};
`);

export interface BackgroundVideoProps extends BoxProps {
  fit?: 'cover' | 'contain';
  poster?: React.VideoHTMLAttributes<HTMLVideoElement>['poster'];
  src?: HTMLSourceElement['src'];
  type?: HTMLSourceElement['type'];
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  children,
  fit = 'contain',
  title,
  src,
  poster,
  type = 'video/mp4',
  ...rest
}) => (
  <Box height={1} width={1} position='relative' overflow='hidden' {...rest}>
    <StyledVideo controls={false} loop autoPlay muted poster={poster} style={{ objectFit: fit }}>
      <source src={src} type={type} />
      {children}
    </StyledVideo>
  </Box>
);

export default BackgroundVideo;
export { BackgroundVideo };
