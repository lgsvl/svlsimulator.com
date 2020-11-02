import Button, { ButtonProps } from '@material-ui/core/Button';
import { withTheme } from '@material-ui/core/styles';
import React from 'react';
import { Merge } from 'src/@types/utils';
import styled from 'styled-components';
import Link, { LinkProps } from './Link';

const StyledButton = withTheme(styled(Button)``);

export type LinkButtonProps = Merge<ButtonProps, Partial<LinkProps>> & {
  buttonVariant?: ButtonProps['variant'];
};

const LinkButton: React.ForwardRefExoticComponent<LinkButtonProps> = React.forwardRef(
  ({ buttonVariant, ...rest }, ref) => (
    <StyledButton {...rest} variant={buttonVariant} underline='none' component={Link} ref={ref} />
  )
);

export default LinkButton;
export { LinkButton };
