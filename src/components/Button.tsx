import MuiButton, { ButtonProps } from '@material-ui/core/Button';
import { withTheme } from '@material-ui/core/styles';
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'src/hooks/useTranslations';
import Link from './Link';
import LinkButton, { LinkButtonProps } from './LinkButton';

const StyledButton = withTheme(styled(MuiButton)``);

const Button: React.ForwardRefExoticComponent<ButtonProps> = React.forwardRef((props, ref) => (
  <StyledButton variant='outlined' {...props} ref={ref} />
));

const ButtonReadMore: typeof LinkButton = React.forwardRef((props, ref) => {
  const { t } = useTranslation();
  return (
    <LinkButton buttonVariant='outlined' {...props} ref={ref}>
      {t('main.buttons.readMore')}
    </LinkButton>
  );
});

export default Button;
export { Button, ButtonReadMore };
