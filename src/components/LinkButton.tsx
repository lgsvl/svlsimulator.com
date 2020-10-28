import Button, { ButtonProps } from '@material-ui/core/Button';
import { withTheme } from '@material-ui/core/styles';
import React from 'react';
import styled from 'styled-components';
import Link, { LinkProps } from './Link';

const StyledButton = withTheme(styled(Button)``);

export type LinkButtonProps = Exclude<ButtonProps, 'variant'> &
  Partial<LinkProps> & { buttonVariant?: ButtonProps['variant'] };

const LinkButton: React.ExoticComponent<LinkButtonProps> = React.forwardRef(
  ({ buttonVariant, ...rest }: LinkButtonProps, ref) => (
    <StyledButton {...rest} variant={buttonVariant} underline='none' component={Link} ref={ref} />
  )
);

export default LinkButton;
export { LinkButton };
