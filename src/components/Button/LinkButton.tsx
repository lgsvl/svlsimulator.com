import Button, { ButtonProps } from '@material-ui/core/Button';
import { withTheme } from '@material-ui/core/styles';
import React from 'react';
import { Merge } from 'src/@types/utils';
import styled from 'styled-components';
import Link, { LinkProps } from '../Link';

export type LinkButtonBaseProps = Merge<ButtonProps, Partial<LinkProps>> & {
  component?: React.ElementType;
};
const StyledButton = withTheme(styled(Button)``) as React.FC<LinkButtonBaseProps>;

export type LinkButtonProps = LinkButtonBaseProps & {
  buttonVariant?: ButtonProps['variant'];
};

const LinkButton: React.ForwardRefExoticComponent<LinkButtonProps> = React.forwardRef(
  ({ buttonVariant, ...rest }, ref) => (
    <StyledButton {...rest} variant={buttonVariant} underline='none' component={Link} ref={ref} />
  )
);

export default LinkButton;
export { LinkButton };
