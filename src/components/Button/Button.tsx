import MuiButton, { ButtonProps } from '@material-ui/core/Button';
import { withTheme } from '@material-ui/core/styles';
import React from 'react';
import styled from 'styled-components';

const StyledButton = withTheme(styled(MuiButton)``);

const Button: React.ForwardRefExoticComponent<ButtonProps> = React.forwardRef((props, ref) => (
  <StyledButton variant='outlined' {...props} ref={ref} />
));

export default Button;
export { Button };
