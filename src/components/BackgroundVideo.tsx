import Box, { BoxProps } from '@material-ui/core/Box';
import { withTheme } from '@material-ui/core/styles';
import React, { useMemo } from 'react';
import { useAppState } from 'src/context/AppState';
import styled from 'styled-components';

// Temporary filter to get the video background color to match the site background until the videos get updated.
const cssVideoFilter = 'filter: saturate(0.7) contrast(1.01)';

type VideoProps = Omit<React.VideoHTMLAttributes<'video'>, 'children' | 'style'> & {
  style: React.CSSProperties;
  ref: React.ForwardedRef<unknown>;
};

const StyledVideo = withTheme(styled.video`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
  ${cssVideoFilter};
`) as React.FC<Partial<VideoProps>>;

export interface BackgroundVideoProps extends BoxProps {
  fit?: 'cover' | 'contain';
  poster?: HTMLVideoElement['poster'];
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
}) => {
  const {
    appState: {
      videos: { allPaused }
    },
    setAppState
  } = useAppState();

  const videoRef = React.useRef<HTMLVideoElement>();

  // Respond to appState changes
  useMemo(() => {
    if (allPaused) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
  }, [allPaused]);

  const handlePlayPauseAll = React.useCallback(() => {
    setAppState(!allPaused, 'videos.allPaused');
  }, [allPaused, setAppState]);

  return (
    <Box height={1} width={1} position='relative' overflow='hidden' {...rest} onClick={handlePlayPauseAll}>
      <StyledVideo
        controls={false}
        loop
        autoPlay={!allPaused}
        muted
        poster={poster || ''}
        ref={videoRef}
        style={{ objectFit: fit }}
      >
        <source src={src} type={type} />
        {children}
      </StyledVideo>
    </Box>
  );
};

export default BackgroundVideo;
export { BackgroundVideo };
