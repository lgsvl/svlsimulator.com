import Box, { BoxProps } from '@material-ui/core/Box';
import Grid, { GridProps } from '@material-ui/core/Grid';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment, { InputAdornmentProps } from '@material-ui/core/InputAdornment';
import { withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useCallback, useState } from 'react';
import BackgroundVideo from 'src/components/BackgroundVideo';
import { IconCheck } from 'src/components/Icons';
import Input from 'src/components/Input';
import { useTranslation } from 'src/hooks/useTranslations';
// import videoSrcSubscribe from 'src/videos/Subscription.mp4';
import styled from 'styled-components';
import { OuijaAnchor } from './Ouija';

const FullHeightGrid = withTheme(styled(Grid)`
  height: 100%;
`) as React.FC<GridProps>;

const StyledInputAdornment = withTheme(styled(InputAdornment)`
  padding-right: 4px;
`) as React.FC<InputAdornmentProps>;

const TransitioningIconButton = withTheme(styled(IconButton)`
  ${({ theme }) => `
  border-radius: 4px;

  transition: ${theme.transitions.create('opacity', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  })};
`}
`) as React.FC<IconButtonProps>;

const SubscribeBox: React.FC<BoxProps> = ({ ...rest }) => {
  const { t } = useTranslation();
  const [submitVisible, setSubmitVisible] = useState(false);
  const handleInputChange = useCallback(
    ev => {
      setSubmitVisible(Boolean(ev.target.value.length));
    },
    [setSubmitVisible]
  );

  return (
    <Box my={4} position='relative' {...rest}>
      <OuijaAnchor position='absolute' />
      {/* <BackgroundVideo src={videoSrcSubscribe} position='absolute'>
        <Typography>
          A really cool looking video of a Lidar point-cloud following a simulated autonomous vehicle that makes you
          really want to subscribe to our email list for more information.
        </Typography>
      </BackgroundVideo> */}
      <Box p={2} height={{ xs: 600, sm: 400, md: 600 }}>
        <FullHeightGrid container alignItems='center' justify='center'>
          <Grid item xs={12} sm={10} md={6}>
            <Typography variant='h3' gutterBottom>
              {t('main.subscribe.title')}
            </Typography>
            <Input
              id='subscribeEmailAddress'
              label={t('main.subscribe.emailPlaceholder')}
              placeholder={t('main.subscribe.emailPlaceholder')}
              fullWidth
              variant='outlined'
              onChange={handleInputChange}
              InputProps={{
                endAdornment: (
                  <StyledInputAdornment position='end'>
                    <TransitioningIconButton
                      style={!submitVisible ? { opacity: 0, pointerEvents: 'none' } : undefined}
                      aria-label='submit subscription'
                      edge='end'
                      size='medium'
                    >
                      <IconCheck />
                    </TransitioningIconButton>
                  </StyledInputAdornment>
                )
              }}
            />
          </Grid>
        </FullHeightGrid>
      </Box>
    </Box>
  );
};

export default SubscribeBox;
export { SubscribeBox };
