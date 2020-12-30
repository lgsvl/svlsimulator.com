import Box, { BoxProps } from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import { useTheme, withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from 'react';
// import { LinkButton, LinkButtonProps } from 'src/components/Button';
import BackgroundVideo, { BackgroundVideoProps } from 'src/components/BackgroundVideo';
import styled from 'styled-components';

const StyledPaper = withTheme(styled(Paper)`
  border-radius: 16px;
`) as React.FC<PaperProps>;

const DimBox = withTheme(styled(Box)`
  background-color: rgba(0, 0, 0, 0.2);

  dt,
  dd {
    display: inline-block;
  }
  dt {
    margin-right: 1ex;
  }
`) as React.FC<BoxProps>;

const FakeWiseHeader: React.FC<BoxProps> = props => (
  <Box pb={2} display='flex' alignItems='center' {...props}>
    <DimBox flexBasis='100%' p={2} borderRadius='borderRadius'>
      <Grid container>
        <Grid item xs={12} sm={6} component='dl'>
          <Typography component='dt' color='textSecondary'>
            Bridge:
          </Typography>
          <Typography component='dd'>ROS1</Typography>
          <br />
          <Typography component='dt' color='textSecondary'>
            Sensors configuration:
          </Typography>
          <Typography component='dd'>My config</Typography>
        </Grid>
        <Grid item xs={12} sm={6} component='dl'>
          <Typography component='dt' color='textSecondary'>
            Asset bundle version:
          </Typography>
          <Typography component='dd'>A</Typography>
          <br />
          <Typography component='dt' color='textSecondary'>
            Connection:
          </Typography>
          <Typography component='dd'>localhost:9090</Typography>
        </Grid>
      </Grid>
    </DimBox>
    <DimBox ml={2} p={1} borderRadius='borderRadius' whiteSpace='nowrap' style={{ pointerEvents: 'none' }}>
      <Button style={{ width: '50%' }}>Analysis</Button>
      <Button style={{ width: '50%' }} variant='contained' color='primary'>
        Visualization
      </Button>
    </DimBox>
  </Box>
);

export type VisualizationFrameProps = PaperProps & Pick<BackgroundVideoProps, 'src' | 'poster'>;

const VisualizationFrame = ({ children, poster, src, ...rest }: VisualizationFrameProps) => {
  const theme = useTheme();
  // const isXs = !useMediaQuery(theme.breakpoints.up('sm'));
  // const iconSize = isXs ? 42 : 80;
  return (
    <StyledPaper {...rest}>
      <Box p={2} width={992} height={1} display='flex' flexDirection='column' boxSizing='border-box'>
        <FakeWiseHeader />
        <Box flexBasis='100%'>
          <BackgroundVideo poster={poster} src={src} zIndex='auto'>
            {children}
          </BackgroundVideo>
        </Box>
      </Box>
    </StyledPaper>
  );
};

export default VisualizationFrame;
export { VisualizationFrame };
