import MuiButton, { ButtonProps } from '@material-ui/core/Button';
import { withTheme } from '@material-ui/core/styles';
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'src/hooks/useTranslations';

const StyledButton = withTheme(styled(MuiButton)``);

const Button = React.forwardRef((props: ButtonProps, ref) => <StyledButton variant='outlined' {...props} ref={ref} />);

const ButtonGetDemo = React.forwardRef((props: ButtonProps, ref) => {
  const { t } = useTranslation();
  return (
    <Button color='primary' variant='contained' {...props} ref={ref}>
      {t('main.buttons.getDemo')}
    </Button>
  );
});

const ButtonReadMore = React.forwardRef((props: ButtonProps, ref) => {
  const { t } = useTranslation();
  return (
    <Button {...props} ref={ref}>
      {t('main.buttons.readMore')}
    </Button>
  );
});

export default Button;
export { Button, ButtonGetDemo, ButtonReadMore };
