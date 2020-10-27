import Box, { BoxProps } from '@material-ui/core/Box';
import { useTheme, withTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React, { useCallback, useState } from 'react';
import Button from 'src/components/Button';
import Input from 'src/components/Input';
import { IconCheck } from 'src/components/Icons';
import styled from 'styled-components';
import { useTranslation } from 'src/hooks/useTranslations';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

const StyledSubscribeBox = withTheme(styled(Box)`
  background-image: linear-gradient(-205deg, #e83d95, #862155 30%, black);
`);

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

const SubscribeBox = ({ ...rest }: BoxProps) => {
  const { t } = useTranslation();
  const [submitVisible, setSubmitVisible] = useState(false);
  const handleInputChange = useCallback(
    ev => {
      setSubmitVisible(Boolean(ev.target.value.length));
    },
    [setSubmitVisible]
  );

  return (
    <StyledSubscribeBox my={4} p={2} height={{ xs: 600, sm: 400, md: 600 }} {...rest}>
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
    </StyledSubscribeBox>
  );
};

export default SubscribeBox;
export { SubscribeBox };
