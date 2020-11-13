import Box, { BoxProps } from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useCallback, useState } from 'react';
import BackgroundVideo from 'src/components/BackgroundVideo';
import { IconCheck } from 'src/components/Icons';
import Input from 'src/components/Input';
import { useTranslation } from 'src/hooks/useTranslations';
import videoSrcSubscribe from 'src/videos/Subscription.mp4';
import styled from 'styled-components';

const FullHeightGrid = withTheme(styled(Grid)`
  height: 100%;
`);

const StyledInputAdornment = withTheme(styled(InputAdornment)`
  padding-right: 4px;
`);

const TransitioningIconButton = withTheme(styled(IconButton)`
  ${({ theme }) => `
  border-radius: 4px;

  transition: ${theme.transitions.create('opacity', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  })};
`}
`);

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
      <BackgroundVideo src={videoSrcSubscribe} position='absolute' />
      <Box p={2} height={{ xs: 600, sm: 400, md: 600 }}>
        <FullHeightGrid container alignItems='center' justify='center'>
          <Grid item xs={12} sm={10} md={6}>
            <Typography variant='h3' gutterBottom>
              {t('main.subscribe.title')}
            </Typography>
            <Input
              placeholder={t('main.subscribe.emailPlaceholder')}
              fullWidth
              variant='outlined'
              onChange={handleInputChange}
              InputProps={{
                endAdornment: (
                  <StyledInputAdornment position='end'>
                    <TransitioningIconButton
                      style={!submitVisible ? { opacity: 0, pointerEvents: 'none' } : null}
                      aria-label='submit subscription'
                      edge='end'
                      size='large'
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
