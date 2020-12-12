import MuiButton, { ButtonProps as MuiButtonProps } from '@material-ui/core/Button';
import { withTheme } from '@material-ui/core/styles';
import React from 'react';
import styled from 'styled-components';

const StyledButton = withTheme(styled(MuiButton)``);

const Button: React.ForwardRefExoticComponent<MuiButtonProps> = React.forwardRef((props, ref) => (
  <StyledButton variant='outlined' {...props} ref={ref} />
));

export type ButtonProps = MuiButtonProps;
export default Button;
export { Button };
